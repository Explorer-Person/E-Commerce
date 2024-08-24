import style from './style.module.css'
import {nutsImg} from "@src/shared"
// import {ButtonsCss} from '@src/styles/components.style'


const PaymentProductContainer = () => {
    return (
        <div className={`${style.productBoxItem}`}>
            <div key="1" className={`${style.productBoxImg}`}>
                <img src={nutsImg} alt="salça" />
            </div>
            <div className={`${style.productItemInfos}`}>
                <div className={`${style.productNumber} d-flex`}>
                    <h6 className='mx-2'>Name: </h6>
                    <h6>HeybeNuts</h6>
                </div>
                <div className={`${style.productPrice}`}>
                    <h6>65.99$</h6>
                </div>
            </div>
        </div>
    )
};

export default PaymentProductContainer;