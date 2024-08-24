// CartPage.js
import FavouriteElement from './favouriteElement/component';
import style from './style.module.css'


const FavouritesPage = () => {
    return (
        <div className={`${style.favBox}`}>
            <h1>Favourite Products</h1>
            <FavouriteElement/>
            <FavouriteElement/>
            <FavouriteElement/>
            <FavouriteElement/>
        </div>
    );
};

export default FavouritesPage;