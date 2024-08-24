const { executeQuery } = require("@root/src/db");
const { AddressModel } = require("@src/models/user");

class AddressQueries {
  constructor() {}

  insertAddress = async (addressData, userId) => {
    try {
      const query = `INSERT INTO addresses (country, city, district, street, neighborhood, buildingNumber, postalCode, addressType, openAddress,isSelected, userId)
      VALUES ('${addressData.country}', '${addressData.city}', '${addressData.district}', '${addressData.street}', '${addressData.neighborhood}', '${addressData.buildingNumber}', '${addressData.postalCode}', '${addressData.addressType}', '${addressData.openAddress}', '0', '${userId}')`;

      await AddressModel();
      await executeQuery(query);
      return this.getAddresses(userId)
        .then((result) => {
          return result.length;
        })
        .catch((err) => err);
    } catch (err) {
      throw err;
    }
  };
  getAddresses = async (userId) => {
    try {
      const query = `SELECT * FROM addresses WHERE userId = ?`;
      const execute = await executeQuery(query, userId);
      return execute;
    } catch (err) {
      throw err;
    }
  };
  getAddress = async (parameter) => {
    try {
      const query = parameter !== null ? `SELECT * FROM addresses WHERE id = ?` : `SELECT * FROM addresses WHERE isSelected = 1`;
      const execute = await executeQuery(query, parameter);
      
      return execute;
    } catch (err) {
      throw err;
    }
  };
  
  deleteAddress = async (addressId) => {
    try {
      const query = `DELETE FROM addresses WHERE id = ?`;
      const execute = await executeQuery(query, addressId);
      return execute;
    } catch (err) {
      throw err;
    }
  };
  deleteAllAddresses = async (userId) => {
    try {
      const query = `DELETE FROM addresses WHERE userId='?'`;
      const execute = await executeQuery(query, userId);
      return execute;
    } catch (err) {
      throw err;
    }
  };
  putAddress = async (newAddressData, addressId, userId) => {
    try {
      console.log(newAddressData.id);
      const query = `UPDATE addresses SET 
                        country = ?,
                        city = ?,
                        district = ?,
                        street = ?,
                        neighborhood = ?,
                        buildingNumber = ?,
                        postalCode = ?,
                        addressType = ?,
                        openAddress = ?,
                        isSelected = '0'
                        WHERE id = ? AND userId = ?`;
                        console.log(addressId,",,,,,,,,,");
      const params = [
        newAddressData.country,
        newAddressData.city,
        newAddressData.district,
        newAddressData.street,
        newAddressData.neighborhood,
        newAddressData.buildingNumber,
        newAddressData.postalCode,
        newAddressData.addressType,
        newAddressData.openAddress,
        Number(addressId),
        Number(userId),
      ];
      await executeQuery(query, params);
      const data = this.getAddress(addressId);
      return data;
    } catch (err) {
      throw err;
    }
  };

  selectAddress = async (addressId, userId) => {
    try {
      // Set all addresses for the user to isSelected=0
      const queryAll = `UPDATE addresses SET isSelected=? WHERE userId=?`;
      const paramsAll = [0, userId];
      await executeQuery(queryAll, paramsAll);

      // Set the selected address to isSelected=1
      const querySelected = `UPDATE addresses SET isSelected=? WHERE id=? AND userId=?`;
      const paramsSelected = [1, addressId, userId];
      const executeSelected = await executeQuery(querySelected, paramsSelected);   
      return executeSelected;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = AddressQueries;
