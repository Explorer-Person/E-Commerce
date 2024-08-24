import style from './style.module.css'
import {ButtonsCss} from '@src/shared'
import {salcalarImg} from '@src/shared'
import { RoutingUtil } from '@src/shared';

const FavouriteElement = () => {
    const {linkTo} = RoutingUtil();
    return (
        <div className={`${style.cartBoxItem}`}>
            <div key="1" className={`${style.cartItemImg}`}>
                <img src={salcalarImg} alt="salça" className={`${style.itemImage}`} />
            </div>
            <div className={`${style.cartItemInfos}`}>
                <div className={`${style.itemName}`}>
                    <h3>Angebotts</h3>
                </div>
                <div className={`${style.itemPriceStars}`}>
                    <h5>45.99$</h5>
                    <h5>★★★★★</h5>
                </div>
                <div className={`${style.itemDetails}`}>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae!</h6>
                </div>
            </div>
            <div className={`${style.favItemButtons}`}>
                <button className={`${ButtonsCss.addToCartButton}`}>Add To Cart!</button>
                <button onClick={()=>linkTo("/product")} className={`${ButtonsCss.viewButton}`}>View</button>
            </div>
        </div>
    )
}

export default FavouriteElement;