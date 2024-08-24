import { AddressBox } from '@src/shared';
import { TTMapService } from '@src/shared/services';
import style from './style.module.css';

// import {ButtonsCss} from '@src/styles/components.style'


const AddressInputContainer = () => {
    return (
        <div className={`${style.addressInputBox}`}>
            <div className={`${style.mapContainer}`}>
                <TTMapService />
            </div>
            <div className={`${style.addressesContainer}`}>
                <AddressBox />
            </div>
        </div>
    )
};

export default AddressInputContainer;