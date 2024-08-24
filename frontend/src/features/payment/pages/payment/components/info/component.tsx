import style from './style.module.css'
import { ButtonsCss } from '@src/shared'
import { AddressInputContainer, CardInputContainer, OrderInfoContainer } from './components';
import { MouseEventHandler, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@src/stores/hooks';
import { pageNumberAdjuster, pageRegulative } from '@src/features/payment/slices/infoSlice/slice';
import { RootState } from '@src/stores/store';



const ProcessesContainer = () => {
    const dispatch = useAppDispatch();
    const pageState = useAppSelector((state: RootState) => state.PaymentReducers.InfoReducer.pageState)
    const pageNumber = useAppSelector((state: RootState) => state.PaymentReducers.InfoReducer.pageNumber)

    const pageStateController: MouseEventHandler<HTMLElement> = (event) => {
        const target = event.target as HTMLButtonElement;
        const currentTarget = event.currentTarget as HTMLHeadingElement;
        const process = currentTarget.accessKey;
        const direction = target.value;
        if (direction) {
            dispatch(pageNumberAdjuster(direction));
        } else if (process) {
            dispatch(pageRegulative(Number(process)))
        }
    }
    useEffect(() => {
        dispatch(pageRegulative(null));
        console.log(pageState.isActive);
        console.log(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber])
    return (
        <div className={`${style.processesBox}`}>
            <div className={`${style.processesTab}`}>
                <h4 accessKey="1" onClick={pageStateController} className={pageState.isActive === "address" ? `${style.isActive}` : ""}>Address</h4>
                <h2>/</h2>
                <h4 accessKey="2" onClick={pageStateController} className={pageState.isActive === "payment" ? `${style.isActive}` : ""}>Payment</h4>
                <h2>/</h2>
                <h4 accessKey="3" onClick={pageStateController} className={pageState.isActive === "order" ? `${style.isActive}` : ""}>Order Info</h4>
            </div>
            <div className={`${style.processElements}`}>
                <div className={`${pageState.AddressInput} ${style.addressInput}`}>
                    <AddressInputContainer />
                </div>
                <div className={`${pageState.CardInput} ${style.cardInput}`}>
                    <CardInputContainer />
                </div>
                <div className={`${pageState.OrderInput} ${style.orderInfo}`}>
                    <OrderInfoContainer />
                </div>
            </div>

            <button value="prev" onClick={pageStateController} className={`${ButtonsCss.prevButton}`}>Prev</button>
            <button value="next" onClick={pageStateController} className={`${ButtonsCss.nextButton}`}>Next</button>
        </div>
    )
};

export default ProcessesContainer;