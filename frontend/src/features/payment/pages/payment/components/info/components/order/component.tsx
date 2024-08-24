import { ToastBox } from '@src/shared';
import style from './style.module.css'

// import {ButtonsCss} from '@src/styles/components.style'
import {xlEdited} from "@src/shared"
import { productInfo } from '@src/features/payment/stores/initialState';


const OrderInfoContainer = () => {
    return (
        <div className={`${style.orderInfoBox}`}>
            <div className={`${style.profileInfo}`}>
                <div className={`${style.addressInfo}`}>
                    <h4 className='mb-3'>Address</h4>
                    <div>
                        <div>
                            <p>Country:</p>
                            <p className={`${style.answer}`}>Turkey</p>
                        </div>
                        <div>
                            <p>City:</p>
                            <p className={`${style.answer}`}>Istanbul</p>
                        </div>
                    </div>

                    <h5>Open Address:</h5>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi reiciendis, nostrum praesentium velit aut sit at dignissimos suscipit maiores tenetur!</h6>
                </div>
                <div className={`${style.userInfo}`}>
                    <h4 className='mb-3'>User Info</h4>
                    <div className={`${style.userName}`}>
                        <p>Name: </p>
                        <p className={`${style.answer}`}>Fatih Babo</p>
                    </div>
                    <div className={`${style.email}`}>
                        <p>Email: </p>
                        <p className={`${style.answer}`}>Fatih@gmail.com</p>
                    </div>
                    <div className={`${style.phoneNumber}`}>
                        <p>Number: </p>
                        <p className={`${style.answer}`}>5415834011</p>
                    </div>
                </div>
            </div>
            <div className={`${style.orderProductInfo}`}>
                <h4 className='mb-3'>Order Info</h4>
                <div className={`${style.orderProducts}`}>
                    <ToastBox productInfo={productInfo} />
                    <ToastBox productInfo={productInfo} />
                    <ToastBox productInfo={productInfo} />
                    <ToastBox productInfo={productInfo} />
                </div>

            </div>
            <div className={`${style.paymentInfo}`}>
                <h4 className='mb-3'>Payment Info</h4>
                {/* Add Card Info here */}
                <div className={`${style.cardInfo}`}>
                    <div className={`${style.cardDetails}`}>
                        <p>Card Holder:</p>
                        <p>Card Number:</p>
                        <p>Expiration Date - Security Number:</p>
                    </div>
                    <div>
                        <p className={`${style.answer}`}> John Doe</p>
                        <p className={`${style.answer}`}> **** **** **** 1234</p>
                        <p className={`${style.answer}`}> 10/25 - 255</p>
                    </div>
                    <div className={`${style.cardImage}`}>
                        {/* Add Card Image here */}
                        <img src={xlEdited} alt="Card" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderInfoContainer;