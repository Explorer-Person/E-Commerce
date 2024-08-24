import style from './style.module.css'
import {ButtonsCss} from '@src/shared'
import { useState } from 'react';
import {nutsImg , salcalarImg} from '@src/shared'
import { RoutingUtil } from '@src/shared';


const OrderElement = () => {
    const {linkTo} = RoutingUtil();
    const [itemDisplay, setItemDisplay] = useState<string>("d-none");
    const displayController = () =>{
        if(itemDisplay === "d-none"){
            return setItemDisplay("d-flex");
        }else{
            return setItemDisplay("d-none")
        }
        
    }
    return (

        <div>
            <div className={`${style.orderBoxItem}`}>
                <div key="1" className={`${style.orderBoxImg}`}>
                    <img src={salcalarImg} alt="salça" />
                </div>
                <div className={`${style.orderItemInfos}`}>
                    <div className={`${style.orderNumber} d-flex`}>
                        <h4 className='mx-2'>ID: </h4>
                        <h4>32423423423</h4>
                    </div>
                    <div className={`${style.orderDate}`}>
                        <h5>15/10/2001</h5>
                    </div>
                    <div className={`${style.orderDetails}`}>
                        <div><h6>Completed</h6></div>
                    </div>
                    <div className={`${style.orderStatus}`}>
                        <div><h5></h5></div>
                    </div>
                </div>
                <div className={`${style.orderItemButtons}`}>
                    <button onClick={()=>linkTo("/track/order")}  className={`${ButtonsCss.trackButton}`}>Track</button>
                    <button onClick={displayController} className={`${ButtonsCss.moreButton}`}>More...</button>
                </div>
            </div>
            <div className={`${style.orderItemDetails} ${itemDisplay}`}>
                <div className={`${style.orderProduct}`}>
                    <img src={nutsImg} alt="" />
                    <div>
                        <h5>Product Name</h5>
                        <h5>45.99$</h5>
                        <div className='d-flex'>
                            <button className={`${ButtonsCss.buyButton} mx-2`}>Buy Again</button>
                            <button className={`${ButtonsCss.evaluateButton}`}>Evaluate</button>
                        </div>
                    </div>
                </div>
                <div className={`${style.orderProcesses}`}>
                    <div><h5>Status</h5><hr /></div>
                    <div>
                        <button className={`${ButtonsCss.invoiceButton}`}>Show Invoice</button>
                        <button className={`${ButtonsCss.refundButton}`}>Refunds</button>
                    </div>
                </div>
                <div className={`${style.orderAdress}`}>
                    <h5>Adress</h5>
                    <hr />
                    <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, soluta.</h6>
                    <hr />
                    <h6>dsadas@gmail.com</h6>
                    <h6>54323424324</h6>
                </div>
                <div className={`${style.orderPayment}`}>
                    <h5>Payment Info</h5>
                    <hr />
                    <div className={`${style.orderPaymentInfos}`}>
                        <div>
                            <h6>Payment:</h6>
                            <h6>Cargo:</h6>
                            <h6>Products:</h6>
                            <hr />
                            <h6>Total Cost:</h6>
                        </div>
                        <div>
                            <h6>MasterCard</h6>
                            <h6>Free</h6>
                            <h6>123$</h6>
                            <hr />
                            <h6>123$</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default OrderElement