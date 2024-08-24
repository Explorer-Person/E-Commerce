const { executeQuery } = require("@root/src/db");
const { UserModels } = require("@root/src/models");
const bcryptjs = require("bcryptjs");

class UserQueries {
  constructor() {}

  insertUser = async (signupData) => {
    try {
      const encryptedPass = bcryptjs.hashSync(signupData.password, 12);
      const query = `
       INSERT INTO users (username, email, phone, password, role)
       VALUES ('${signupData.username}', '${signupData.email}', '${signupData.phone}', '${encryptedPass}', 'user');
        `;
      await UserModels.UserModel();
      const insert = await executeQuery(query);
      return insert;
    } catch (err) {
      throw err;
    }
  };

  findUser = async (parameter) => {
    try {
      const query = `SELECT * FROM users WHERE username= ? OR id= ?`;
      const parameters = [parameter, parameter];
      const getUser = await executeQuery(query, parameters);

      return getUser;
    } catch (err) {
      throw err;
    }
  };
  editUser = async (userData, userId) => {
    try {
      const oldUser = await this.findUser(userId);
     
      const isEqual = bcryptjs.compareSync(userData.password, oldUser[0].password);
      if (!isEqual || userData.password === "") {
        console.log("Not Equal")
        throw err;
      }
        
        let query = `UPDATE users SET `;
        const parameters = [];

        for(const [key,value] of Object.entries(userData)){
          if(value === '' || key === "newPassword"){
            continue;
          }
          if(key === 'password' && userData.newPassword !== ""){
            const encryptedPassword = bcryptjs.hashSync(userData.newPassword, 12);
            query += 'password = ?, '
            parameters.push(encryptedPassword);
          }else if(key !== 'password') {
            query += `${key} = ?, `;
            parameters.push(value);
          }
        }
        
        query = query.slice(0, -2);
        query += ' WHERE id = ?';
        parameters.push(userId);
        if(parameters.length < 2){
          console.log("something went wrong!!!")
          throw err;
        }
  
        await executeQuery(query, parameters);
        const editedUser = await this.findUser(userId);

        return editedUser;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserQueries;
