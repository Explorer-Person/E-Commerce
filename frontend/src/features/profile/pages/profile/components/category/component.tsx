import { useEffect, useState } from 'react';
import { CartContainer, FavouritesContainer, LocationContainer, OrdersContainer } from './components';
import style from './style.module.css'
import { RoutingUtil } from '@src/shared';


const ProfileCategories = () => {
  const [category, setCategory] = useState<JSX.Element>();
  const {linkTo} = RoutingUtil();
  const endpoint = window.location.pathname;
  useEffect(()=>{
    chooseCategory("", endpoint);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[endpoint] )
  const chooseCategory = (categoryName: string, endpoint: string) =>{
       if(categoryName === "CartContainer" || endpoint === "/profile/cart"){
        setCategory(<CartContainer/>);
        linkTo(endpoint);
       }
       else if(categoryName === "FavouritesContainer" || endpoint === "/profile/favourites"){
        setCategory(<FavouritesContainer/>);
        linkTo(endpoint);
       }
       else if(categoryName === "OrdersContainer" || endpoint === "/profile/orders"){
        setCategory(<OrdersContainer/>);
        linkTo(endpoint);
       }
       else if(categoryName === "LocationContainer" || endpoint === "/profile/location"){
        setCategory(<LocationContainer/>);
        linkTo(endpoint);
       }
  }
  return (
    <div className={`${style.profileCategoriesBox}`}>
      <div id='content-box' className={`${style.profileContentTitles}`}>
          <div id='cart' onClick={()=>chooseCategory("CartContainer", "/profile/cart")} className={`${style.cartCategory} ${style.categoryDiv}`}><h3>Cart</h3></div>
          <div id='orders' onClick={()=>chooseCategory("OrdersContainer", "/profile/orders")} className={`${style.orderCategory} ${style.categoryDiv}`}><h3>Order</h3></div>
          <div id='location' onClick={()=>chooseCategory("LocationContainer", "/profile/location")} className={`${style.locationCategory} ${style.categoryDiv}`}><h3>Location</h3></div>
          <div id='favourites' onClick={()=>chooseCategory("FavouritesContainer", "/profile/favourites")} className={`${style.favouritesCategory} ${style.categoryDiv}`}><h3>Favourites</h3></div>
        </div>
        <div className={`${style.profileContents}`}>
                 {category}
        </div>
    </div>
  );
};

export default ProfileCategories;