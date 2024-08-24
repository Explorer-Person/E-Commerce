import style from './style.module.css';
import { PaymentProductContainer, TotalCostContainer } from './components';
// import {ButtonsCss} from '@src/styles/components.style'


const PaymentInfoContainer = () => {
    return (
        <div className={`${style.paymentInfoBox}`}>
            <div className={`${style.productsContainer} p-2`}>
                <h3 className='m-2 mb-5'>Products</h3>
                <PaymentProductContainer/>
                <PaymentProductContainer/>
                <PaymentProductContainer/>
            </div>
            <hr />
            <div className={`${style.totalCostContainer} p-2`}>
                <TotalCostContainer/>
            </div>
        </div>
    )
};

export default PaymentInfoContainer;