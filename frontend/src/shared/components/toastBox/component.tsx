import { Toast } from "react-bootstrap"
import style from './style.module.css'
import { ProductIF } from "@src/features/payment/stores/interfaces/stateInterface"

interface ToastBoxIF {
    productInfo: ProductIF;
}

const ToastBox = ({productInfo}:ToastBoxIF) =>{
    return (
        <div className={`${style.toastBox}`}>
            <Toast bg="light">
                <Toast.Header closeButton={false}>
                    <img
                        src={productInfo.image}
                        className={`${style.toastImg}`}
                        alt={productInfo.title}
                    />
                    <strong className="me-auto">{productInfo.title}</strong>
                    <strong><h5>{productInfo.price}</h5></strong>
                </Toast.Header>
                <Toast.Body>{productInfo.detail}</Toast.Body>
            </Toast>
        </div>
    )
}
export default ToastBox