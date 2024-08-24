import style from './style.module.css'
import { nutsImg } from '@src/shared'


const Category = () => {

    return (
        <div className={`${style.categoryBox}`}>
            <ul className={`${style.categoryList}`}>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Premium Box / Premium Kutu</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Regionale Dorfprodukte / Yöresel Köy Ürünleri</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Käse, Oliven-Sorten / Peynir, Zeytin Çeşitleri</h4></div>
                    </div>
                </li>
            </ul>
            <ul className={`${style.categoryList}`}>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Frühstücksprodukte / Kahvaltılık Çeşitleri</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Türkisches Lokum / Lokum (Türk Lokumu)</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Trockenfrüchte / Kuruyemişler</h4></div>
                    </div>
                </li>
            </ul>
            <ul className={`${style.categoryList}`}>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Gewürze / Baharatlar</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Antep Tomatenmark, Paprikapaste / Antep Salça Çeşitleri (Antep Biber Salçası, Patlıcan Salçası vb.)</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Alles Hier / Alle Produkte / Her Şey Burada / Tüm Ürünler</h4></div>
                    </div>
                </li>
            </ul>
            <ul className={`${style.categoryList}`}>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Rezepte / Yemek Tarifleri</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Sprichwörter / Atasözleri</h4></div>
                    </div>
                </li>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Monatliches ANGEBOT / Ayın Teklifi</h4></div>
                    </div>
                </li>
            </ul>
            <ul className={`${style.categoryList}`}>
                <li className={`${style.categoryItem}`}>
                    <div>
                        <div><img src={nutsImg} alt="" /></div>
                        <div><h4 className='text-center'>Kaffee / Kahve</h4></div>
                    </div>
                </li>
            </ul>

        </div>
    )
};

export default Category;