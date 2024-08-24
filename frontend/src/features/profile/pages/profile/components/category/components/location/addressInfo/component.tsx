import { useAppDispatch, useAppSelector } from '@src/stores/hooks';
import { RootState } from '@src/stores/store';
import style from "./style.module.css"
import { ButtonsCss } from "@src/shared/styles";
import { useEffect } from 'react';
import {  LoaderBox, storeAddress, useGetSelectedAddressQuery } from '@src/shared';
import { setProcess } from '@src/features/profile/slices';

interface AddressInfoComponentIF {
    handleClickButtons: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleSelectAddress: (event: React.MouseEvent<HTMLInputElement>) => void;
    fetchAddresses: () => void;
}


const AddressInfo = ({ handleClickButtons, fetchAddresses, handleSelectAddress }: AddressInfoComponentIF) => {
    const dispatch = useAppDispatch();
    const { data, isLoading } = useGetSelectedAddressQuery();
    const processStatus = useAppSelector((state: RootState) => state.profileActions.processStatus);
    const address = useAppSelector((state: RootState) => state.address.address);
    const addresses = useAppSelector((state: RootState) => state.address.addresses);



    useEffect(() => {
        if (data && data.message) {
            const info = JSON.parse(data.message);
            console.log(info);
            dispatch(storeAddress(info[0]));
            dispatch(setProcess("getOne"));
        }
    }, [data]);
    useEffect(() => {
        if (processStatus === "get") {
            fetchAddresses();
        }
    }, [processStatus]);





    if (isLoading) {
        <LoaderBox loaderStyle='threeDot' />
    }
    else if(address) {
        const selectedAddressComponent = (
            <div id='addressBoxes' className={`${style.flexContainer}`}>
                <div className={`${style.addressBox}`}>
                    <div className={`${style.titleBox}`}>
                        <h2>Address</h2>
                    </div>
                    <p><span className={`${style.key}`}>Country:</span> <span className={`${style.value}`}>{address.country}</span></p>
                    <p><span className={`${style.key}`}>City:</span> <span className={`${style.value}`}>{address.city}</span></p>
                    <p><span className={`${style.key}`}>District:</span> <span className={`${style.value}`}>{address.district}</span></p>
                    <p><span className={`${style.key}`}>Street:</span> <span className={`${style.value}`}>{address.street}</span></p>
                    <p><span className={`${style.key}`}>Building Number:</span> <span className={`${style.value}`}>{address.buildingNumber}</span></p>
                    <hr />
                    <p><span className={`${style.key}`}>Open Address:</span> <span className={`${style.value}`}>{address.openAddress}</span></p>
                    <hr />

                    <div className={`${style.addressButtons}`}>
                        <button onClick={handleClickButtons} value={`${address.id}`} name='put' className={`${ButtonsCss.changeButton}`}>Change Address</button>
                        <button onClick={handleClickButtons} value={`${address.id}`} name='delete' className={`${ButtonsCss.deleteButton}`}>Delete Address</button>
                    </div>


                </div>
            </div>
        )
        const addressesComponent = (
            <div id='addressBoxes' className={`${style.flexContainer}`}>
                {addresses.map((address, index) => (
                    <div key={index} className={`${style.addressBox}`}>
                        <div className={`${style.titleBox}`}>
                            <h2>Address</h2>
                            <div className={`${style.selectionBox}`}>
                                {address.isSelected === 1 ?
                                    <button onClick={handleClickButtons} name='getOne' className={address.isSelected === 1 ? `${style.symbol}` : `d-none`}>{address.isSelected === 1 ? "Selected" : ""}</button>
                                    :
                                    <input
                                        type='checkbox'
                                        className={`${style.selectButton}`}
                                        value={address.id}
                                        // checked={address.isSelected === 1 ? true : false}
                                        // readOnly
                                        onClick={handleSelectAddress}
                                    />
                                }


                            </div>

                        </div>
                        <p><span className={`${style.key}`}>Country:</span> <span className={`${style.value}`}>{address.country}</span></p>
                        <p><span className={`${style.key}`}>City:</span> <span className={`${style.value}`}>{address.city}</span></p>
                        <p><span className={`${style.key}`}>District:</span> <span className={`${style.value}`}>{address.district}</span></p>
                        <p><span className={`${style.key}`}>Street:</span> <span className={`${style.value}`}>{address.street}</span></p>
                        <p><span className={`${style.key}`}>Building Number:</span> <span className={`${style.value}`}>{address.buildingNumber}</span></p>
                        <hr />
                        <div className={`${style.addressButtons}`}>
                            <button onClick={handleClickButtons} value={`${address.id}`} name='put' className={`${ButtonsCss.changeButton}`}>Change Address</button>
                            <button onClick={handleClickButtons} value={`${address.id}`} name='delete' className={`${ButtonsCss.deleteButton}`}>Delete Address</button>
                        </div>

                        {/* Add more address fields as needed */}
                    </div>
                ))}
            </div>
        )
        return (
            <div id='addressBoxes' className={`${style.flexContainer}`}>
                {processStatus === "get" ? addressesComponent : selectedAddressComponent}
            </div>

        )
    }

};

export default AddressInfo;