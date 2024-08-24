import { productInfo } from '@src/features/home/stores/initialState';
import style from './style.module.css'
import { ContentSlider } from '@src/shared/components';
import { ProductBox } from '@src/shared/components';
import { useEffect, useState } from 'react';
import { arrayFiller } from '@src/shared';


const SimilarProducts = () => {
    const [array, setArray] = useState<number[]>([]);
    useEffect(() => {
        const productArray = arrayFiller(8);
        setArray(productArray);
    }, [])
    const content = (
        <div id='similarProductSlider' className={`${style.similarProductSlider}`}>
            <div className={`${style.elementSlider}`}>
                {array.map((box) => (
                    <ProductBox key={box} productInfo={productInfo} />
                ))}
            </div>
        </div>
    );
    return (
        <div className={`${style.similarProduct}`}>
            <div className={`${style.title}`}><h2>Similar Products</h2></div>
            <div className={`${style.contentSlider}`}>
                <ContentSlider component="SimilarProduct" sliderClass='similarProductSlider' content={content} />
            </div>
        </div>
    );
};

export default SimilarProducts;