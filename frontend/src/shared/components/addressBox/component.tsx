// CartPage.js
import AddressBoxHook from './hook';
import style from "./style.module.css";



const AddressBox = () => {
   
    const { functions: { handleInputChange, handleSubmitAddress }, datas: { addressData, isLoading } } = AddressBoxHook();

    return (
        <div className={`${style.addressBox}`}>
            <div>
                <h3>{isLoading === false ? "ADDRESS" : "SAVING..."}</h3>
            </div>
            {isLoading === false ? <div className={`${style.addressInputs}`}>
                <div className={`${style.inputGroup}`}>
                    <label htmlFor="country">Country:</label>
                    <input onChange={handleInputChange} type="text" name="country" id="country" className={`${style.inputField}`} value={addressData.country} placeholder="Country" />
                </div>
                <div className={`${style.inputGroup}`}>
                    <label htmlFor="city">City:</label>
                    <input onChange={handleInputChange} type="text" name="city" id="city" className={`${style.inputField}`} value={addressData.city} placeholder="City" />
                </div>
                <div className={`${style.inputGroup}`}>
                    <label htmlFor="district">District:</label>
                    <input onChange={handleInputChange} type="text" name="district" id="district" className={`${style.inputField}`} value={addressData.district} placeholder="District" />
                </div>
                <div className={`${style.inputGroup}`}>
                    <label htmlFor="street">Street:</label>
                    <input onChange={handleInputChange} type="text" name="street" id="street" className={`${style.inputField}`} value={addressData.street} placeholder="Street" />
                </div>
                <div className={`${style.inputGroup}`}>
                    <label htmlFor="buildingNumber">Building Number:</label>
                    <input onChange={handleInputChange} type="text" name="buildingNumber" id="buildingNumber" className={`${style.inputField}`} value={addressData.buildingNumber} placeholder="Building Number" />
                </div>
                <div className={`${style.inputGroup}`}>
                    <label htmlFor="fullAddress">Full Address:</label>
                    <input type='textarea' onChange={handleInputChange} name="fullAddress" id="fullAddress" className={`${style.inputField}`} value={`${addressData.street} - No: ${addressData.buildingNumber} / ${addressData.postalCode} - ${addressData.district} / ${addressData.city} / ${addressData.country}`} placeholder="Full Address" />
                </div>
                <div className={`${style.inputGroup}`}>
                    <label htmlFor="detail">Address Type:</label>
                    <select onChange={handleInputChange} name='addressType' value={addressData.addressType} id="addressType" className={`${style.selectField}`}>
                        <option value="Home">Home</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className={`${style.inputGroup}`}>
                    <label htmlFor="postalCode">Postal Code:</label>
                    <input onChange={handleInputChange} type="text" name="postalCode" id="postalCode" className={`${style.inputField}`} value={addressData.postalCode} placeholder="Postal Code" />
                </div>
                <div className={`${style.inputGroup}`}>
                    <button onClick={handleSubmitAddress} className={`${style.saveButton}`}>{isLoading === false ? "Save Address" : "Saving..."}</button>
                </div>
            </div> : <div className={`${style.loader}`}></div>}

        </div>

    );
};

export default AddressBox;