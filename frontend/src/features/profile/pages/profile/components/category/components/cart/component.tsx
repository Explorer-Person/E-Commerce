// CartPage.js
import CartElement from './cartElement/component';
import style from './style.module.css'
import {ButtonsCss} from '@src/shared/styles'


const CartPage = () => {
    return (
        <div className={`${style.cartBox}`}>
            <h1>Shopping Cart</h1>
            <CartElement/>
            <CartElement/>
            <CartElement/>
            <CartElement/>
            <div className={`${style.buyAll}`}><button className={`${ButtonsCss.buyAllButton}`}>Buy All!</button></div>
        </div>
    );
};

export default CartPage;