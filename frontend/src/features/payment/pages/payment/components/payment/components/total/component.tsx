import style  from './style.module.css'
import { ButtonsCss } from '@src/shared'


const TotalCostContainer = () => {
    return (
        <div className={`${style.totalCostBox}`}>
            <div className={`${style.totalCostTableWrapper}`}>
                <table className={`${style.totalCostTable}`}>
                    <tbody>
                        <tr>
                            <td>Products Price:</td>
                            <td>255$</td>
                        </tr>
                        <tr>
                            <td>Cargo Price:</td>
                            <td>25$</td>
                        </tr>
                        <tr className={`${style.totalCostDivider}`}>
                            <td><hr /></td>
                        </tr>
                        <tr>
                            <td>Total Cost:</td>
                            <td>280$</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <button className={`${ButtonsCss.paymentButton}`}>Pay</button>
        </div>
    )
};

export default TotalCostContainer;