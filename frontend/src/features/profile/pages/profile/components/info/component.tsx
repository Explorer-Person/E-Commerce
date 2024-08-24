import style from './style.module.css'
import { ConfirmBox, gewurzeImg } from "@src/shared"
import { ButtonsCss } from '@src/shared';
import ProfileInfoHook from './hook';

const ProfileInfos = () => {
    
    const { functions: { handleInputChange, handleClickButton, setConfirmBoxStatus }, datas: { userData, editedUserData } } = ProfileInfoHook();
    const editedItems = Object.entries(editedUserData)
    .filter(([key, value]) => value !== '' && key !== 'password')
    .map(([key, value], index) => (
        <span key={index}>
            <strong>{key}</strong> as <strong>{value}, <br /></strong>
        </span>
    ));
    return (
        <div id='profile' className={`${style.profileInfosBox}`}>
            <h2 className='mx-5 my-5'>Account</h2>
            <div className={`${style.profileImg}`}>
                <img src={gewurzeImg} alt="premium" />
            </div>
            <div className={`${style.profileInfos}`}>
                <div className={`${style.otherInfos}`}>
                    <div className={`${style.profileName}`}>
                        <label htmlFor="profileName">Name: </label>
                        <input name='username' type="text" onChange={handleInputChange} defaultValue={userData.username} />
                        <span className="info-text">(You can update your username)</span>
                    </div>
                    <div className={`${style.profileEmail}`}>
                        <label htmlFor="profileEmail">Email: </label>
                        <input name='email' type="mail" onChange={handleInputChange} defaultValue={userData.email} />
                        <span className="info-text">(You can change your email address)</span>
                    </div>
                    <div className={`${style.profilePhone}`}>
                        <label htmlFor="profilePhone">Phone: </label>
                        <input name='phone' type="number" onChange={handleInputChange} defaultValue={userData.phone} />
                        <span className="info-text">(You can update your phone number)</span>
                    </div>
                </div>
                <div className={`${style.passwordInfos}`}>
                    <div className={`${style.profilePassword}`}>
                        <label htmlFor="profilePassword">Password:</label>
                        <input name='password' type="password" onChange={handleInputChange} defaultValue="" />
                        <span>(Input current password for changing data)</span>
                    </div>
                    <div className={`${style.profileNewPassword}`}>
                        <label htmlFor="profileNewPassword">New Password:</label>
                        <input name='newPassword' onChange={handleInputChange} type="password" />
                        <span>(Input new password)</span>
                    </div>
                    <div className={`${style.buttonBox}`}>
                        <ConfirmBox confirmHeader={'Are You Sure?'} confirmBody={editedItems.length < 1 || editedUserData.password === "" ? null : editedItems} process={handleClickButton}/>
                        <button onClick={()=>{setConfirmBoxStatus(true)}} className={`${ButtonsCss.saveButton}`}>Save User</button>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default ProfileInfos;