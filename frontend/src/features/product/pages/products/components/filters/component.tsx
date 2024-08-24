// import { useEffect } from 'react';  
import style from './style.module.css'
import buttonCss from "@src/shared/styles/buttons.module.css"
import useFilter from './hook';


const Filters = () => {
    const { functions } = useFilter();
    return (
        <div className={`${style.filterBox}`}>
            <h2 className='text-decoration-underline'>Filters</h2>
            <div className={`${style.nameFilter}`}>
                <label htmlFor="nameFilter">Name:</label>
                <input onChange={functions.searchInputElement} type="text" id="nameFilter" />
            </div>
            <div className={`${style.priceFilter}`}>
                <label htmlFor="priceFilter">Price:</label>
                <div className='d-flex'>
                    <input onChange={functions.determineInputPrice} placeholder='min' name='min' type="number" id="minPrice" />
                    <input onChange={functions.determineInputPrice} placeholder='max' name='max' type="number" id="maxPrice" />
                </div>

            </div>
            <div className={`${style.weightFilter}`}>
                <label htmlFor="weightFilter">Weight:</label>
                <select onClick={functions.selectOptionWeight} id="weight">
                    <option value="null" selected>Choose Weight</option>
                    <option value="100 Gramm">100 Gramm</option>
                    <option value="S Päckchen">S Päckchen / S Paket</option>
                    <option value="250 Gramm">250 Gramm</option>
                    <option value="M Päckchen">M Päckchen / M Paket</option>
                    <option value="500 Gramm">500 Gramm</option>
                    <option value="L Paket">L Paket</option>
                    <option value="1 Kg">1 kg</option>
                    <option value="XL Packung">XL Packung / XL Paket</option>
                    <option value="3 Kilo - 5 Kilo">3 Kilo - 5 Kilo</option>
                    <option value="XXL Packung">XXL Packung / XXL Paket</option>
                    <option value="10 Kg">10 kg</option>
                    <option value="3XL">3XL</option>
                </select>
            </div>
            <div className={`${style.campaignedFilter}`}>
                <label htmlFor="campaignedFilter">Campaigned:</label>
                <div className='d-flex'>
                    <select onClick={functions.selectOptionDiscount} id="campaignedFilter" >
                        <option value="">All</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

            </div>
            <div className={`${style.categories}`}>
                <label htmlFor="campaignedFilter">Categories:</label>
                <ul id='categoryList'>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category1" name="Premium Box" /><label htmlFor="category1">Premium Box / Premium Kutu</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category2" name="Regionale Dorfprodukte" /><label htmlFor="category2">Regionale Dorfprodukte / Yöresel Köy Ürünleri</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category3" name="Käse, Oliven-Sorten" /><label htmlFor="category3">Käse, Oliven-Sorten / Peynir, Zeytin Çeşitleri</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category4" name="Frühstücksprodukte" /><label htmlFor="category4">Frühstücksprodukte / Kahvaltılık Çeşitleri</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category5" name="Türkisches Lokum" /><label htmlFor="category5">Türkisches Lokum / Lokum (Türk Lokumu)</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category6" name="Trockenfrüchte" /><label htmlFor="category6">Trockenfrüchte / Kuruyemişler</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category7" name="Gewürze" /><label htmlFor="category7">Gewürze / Baharatlar</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category8" name="Antep Tomatenmark" /><label htmlFor="category8">Antep Tomatenmark, Paprikapaste / Antep Salça Çeşitleri (Antep Biber Salçası, Patlıcan Salçası vb.)</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category9" name="Alles Hier" /><label htmlFor="category9">Alles Hier / Alle Produkte / Her Şey Burada / Tüm Ürünler</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category10" name="Rezepte" /><label htmlFor="category10">Rezepte / Yemek Tarifleri</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category11" name="Sprichwörter" /><label htmlFor="category11">Sprichwörter / Atasözleri</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category12" name="Monatliches ANGEBOT" /><label htmlFor="category12">Monatliches ANGEBOT / Ayın Teklifi</label></li>
                    <li><input onClick={functions.getCheckCategory} type="checkbox" id="category13" name="Kaffee" /><label htmlFor="category13">Kaffee / Kahve</label></li>
                </ul>

            </div>
            <button onClick={functions.startFilter} className={`${buttonCss.buyButton} mx-4`}>Filter</button>

        </div>
    );
};

export default Filters;