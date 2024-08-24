import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'
import { RoutingUtil } from '@src/shared';
import { nutsImg } from "@src/shared"
import { EventStory } from './components';
import ProfileBoxHook from './hook';
import { useEffect } from 'react';
import { storeUserData, useGetUserQuery } from '@src/features';
import { useAppDispatch } from '@src/stores/hooks';


const ProfileBox = () => {
  const dispatch = useAppDispatch();
  const {linkTo} = RoutingUtil();
  const {functions: {handleClick, }, datas: {userData, display, size, authStatus}} = ProfileBoxHook();
  const {data} = useGetUserQuery();
    useEffect(()=>{
        if(data){
            dispatch(storeUserData({...data.userData, password: "", newPassword: ""}));
        }
    },[data])
  const linkBox = (
    <div className={`${style.linkBox}`}>
      <h6 onClick={()=> linkTo("/login")}>Login</h6>
      <h4>/</h4>
      <h6 onClick={()=> linkTo("/signup")}>Signup</h6>
    </div>
  )
  const profileBox = (
    <div className={`${style.profileBoxContainer}`}>
      <div className={`${style.profileBox}`}>
        <div className={`${style.cartButton}`}>
          <button><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
        <img role="story" onClick={handleClick} src={nutsImg} alt="Profile Picture" className={`${style.profilePicture}`} />
        <div className={`${style.profileInfo}`}>
          <span className={`${style.profileName}`}>John Doe</span>
          <span className={`${style.profileEmail}`}>john.doe@example.com</span>
        </div>
        <div className={`${style.dropdownButton}`}>
          <button role='profile' onClick={handleClick}><FontAwesomeIcon icon={faSquareCaretDown} /></button>
          <div className={`${style.dropdownItems} ${display}`}>
           <a style={{textDecoration:"none"}} href="#orders"><div onClick={() => linkTo("/profile/orders")}><h6>Orders</h6></div></a>
           <a style={{textDecoration:"none"}} href="#cart"><div onClick={() => linkTo("/profile/cart")}><h6>Cart</h6></div></a>
           <a style={{textDecoration:"none"}} href="#favourites"><div onClick={() => linkTo("/profile/favourites")}><h6>Favourites</h6></div></a>
           <a style={{textDecoration:"none"}} href="#location"><div onClick={() => linkTo("/profile/location")}><h6>Location</h6></div></a>
           <a style={{textDecoration:"none"}} href="#profile"><div onClick={() => linkTo("/profile")}><h6>Profile</h6></div></a>
          </div>
        </div>
      </div>
      <EventStory handleClick={handleClick} size={size} />
    </div>
  );

  return (
    <div>
       {userData.role === "user" || authStatus === true ? profileBox : linkBox }
    </div>
  );
};

export default ProfileBox;