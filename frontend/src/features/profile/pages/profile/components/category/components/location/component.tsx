import { useAppDispatch, useAppSelector } from '@src/stores/hooks';
import MapContainer from './map/component';
import style from './style.module.css'
import { ButtonsCss } from "@src/shared/styles";
import { AddressBox, setAddressesLength, storeAddresses, useGetAddressesQuery } from '@src/shared/components';
import { RootState } from '@src/stores/store';
import LocationHook from './hook';
import { useEffect } from 'react';
import { ErrorPage } from '@src/shared';
import AddressInfo from './addressInfo/component';



const LocationContainer = () => {
    const dispatch = useAppDispatch();
    const { functions: { handleClickButtons, fetchAddresses, handleSelectAddress } } = LocationHook()
    const { data: allAddresses, isLoading: allAddressesLoading, isError: allAddressesError } = useGetAddressesQuery();
    const addressesLength = useAppSelector((state: RootState) => state.address.addressesLength);
    const processStatus = useAppSelector((state: RootState) => state.profileActions.processStatus);
    useEffect(() => {
        if (allAddresses) {
            const info = JSON.parse(allAddresses.message);
            dispatch(setAddressesLength(info.length));
            dispatch(storeAddresses(info));
        }
    }, [allAddresses])

    if (allAddressesLoading) {
        <h1>Loading...</h1>
    } else if (allAddressesError) {
        <ErrorPage />
    }
    return (
        <div className={`${style.locationBox}`}>
            {addressesLength > 0 && processStatus !== "add" && processStatus !== "put" ? null : <button className={`${ButtonsCss.addButton}`} name='back' onClick={handleClickButtons}>Back</button>}
            <h1 className='text-center mt-5'>Location</h1>
            <div className={`${style.mapContainer}`}>
                {addressesLength > 0 && processStatus !== "add" && processStatus !== "put" ? <div className='d-block'>
                    {processStatus === "getOne" ? <div className='d-flex'>
                        <button onClick={handleClickButtons} name="add" className={`${ButtonsCss.addButton}`}>Add New Address</button>
                        <button onClick={handleClickButtons} name="seeOthers" className={`${ButtonsCss.seeOthersButton}`}>See Others...</button>
                    </div> :
                        <div className='d-flex'>
                            <button onClick={handleClickButtons} name="add" className={`${ButtonsCss.addButton}`}>Add New Address</button>
                            <button onClick={handleClickButtons} name="deleteAll" className={`${ButtonsCss.deleteAllButton}`}>Delete All Address</button>
                        </div>
                    }

                </div> : <MapContainer />}
            </div>
            <div className={`${style.addressContainer}`}>
                {addressesLength > 0 && processStatus !== "add" && processStatus !== "put" ? (
                    <AddressInfo handleClickButtons={handleClickButtons} fetchAddresses={fetchAddresses} handleSelectAddress={handleSelectAddress} />
                ) : <AddressBox />}
            </div>

        </div>
    );
};

export default LocationContainer;