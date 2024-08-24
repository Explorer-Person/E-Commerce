import { productInfo } from "@src/features/tracking/stores/initialState";
import style from "./style.module.css";
import { ToastBox } from "@src/shared";


const OrderContainer = () => {
    return (
        <div className={`${style.orderBox}`}>
            <h2 className="my-5">Order Detail</h2>
            <div className={`${style.orderBoxItems}`}>
            <ToastBox productInfo = {productInfo}/>
            <ToastBox productInfo = {productInfo}/>
            <ToastBox productInfo = {productInfo}/>
            <ToastBox productInfo = {productInfo}/>
            </div>
        </div>
    )
}

export default OrderContainer;