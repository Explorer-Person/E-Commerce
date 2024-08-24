import { useAppSelector } from '@src/stores/hooks';
import { RootState } from '@src/stores/store';
import style from "./style.module.css"
import { ButtonsCss } from "@src/shared/styles";


interface AddressesComponentIF {
    handleClickButtons: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const SelectedAddress = ({ handleClickButtons }: AddressesComponentIF) => {

    const address = useAppSelector((state: RootState) => state.address.address);

    return (
        <div id='addressBoxes' className={`${style.flexContainer}`}>
            <div className={`${style.addressBox}`}>
                <div className={`${style.titleBox}`}>
                    <h2>Address</h2>
                </div>
                <p>Country: {address.country}</p>
                <p>City: {address.city}</p>
                <p>District: {address.district}</p>
                <p>Street: {address.street}</p>
                <p>Building Number: {address.buildingNumber}</p>
                <hr />
                <div className={`${style.addressButtons}`}>
                    <button onClick={handleClickButtons} value={`${address.id}`} name='put' className={`${ButtonsCss.changeButton}`}>Change Address</button>
                    <button onClick={handleClickButtons} value={`${address.id}`} name='delete' className={`${ButtonsCss.deleteButton}`}>Delete Address</button>
                </div>


            </div>
        </div>

    )
};

export default SelectedAddress;