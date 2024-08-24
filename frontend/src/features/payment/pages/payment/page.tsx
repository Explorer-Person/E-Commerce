import style from './style.module.css'
import { PaymentInfoContainer, ProcessesContainer } from './components';


const PaymentPage = () => {
    return (
        <div className={`${style.paymentPage}`}>
            <div className={`${style.processesContainer}`}>
                <ProcessesContainer />
            </div>
            <div className={`${style.paymentInfoContainer}`}>
                <PaymentInfoContainer />

            </div>
        </div>
    )
};

export default PaymentPage;