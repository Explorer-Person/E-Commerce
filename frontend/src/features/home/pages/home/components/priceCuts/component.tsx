import { productInfo } from '@src/features/home/stores/initialState';
import style from './style.module.css'
import { ContentSlider, arrayFiller } from '@src/shared';
import { ProductBox } from '@src/shared';
import { useEffect, useState } from 'react';



const PriceCuts = () => {
    const [array, setArray] = useState<number[]>([]);
    useEffect(() => {
        const productArray = arrayFiller(8);
        setArray(productArray);
    }, [])
    const content = (

        <div id='priceCutSlider' className={`${style.priceCutSlider}`}>
            <div className={`${style.elementSlider}`}>
                {array.map((box:number) => (
                    <ProductBox key={box} productInfo={productInfo} />
                ))}
            </div>
        </div>

    );
    return (
        <div className={`${style.priceCuts}`}>
            <div className={`${style.title}`}><h2>Price Cuts</h2></div>
            <div className={`${style.contentSlider}`}>
                <ContentSlider component="PriceCuts" sliderClass='priceCutSlider' content={content} />
            </div>
        </div>
    );
};

export default PriceCuts;