// CartPage.js
import OrderElement from './orderElement/component';
import style from './style.module.css'


const OrderContainer = () => {
    return (
        <div className={`${style.orderBox}`}>
            <h1 className='mb-5'>Orders</h1>
            <OrderElement/>
            <OrderElement/>
            <OrderElement/>
        </div>
    );
};

export default OrderContainer;