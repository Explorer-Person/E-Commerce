import style from './style.module.css'
import { ContentSlider, arrayFiller } from '@src/shared';
import { ProductBox } from '@src/shared';
import { productInfo } from '@src/features/home/stores/initialState';
import { useEffect, useState } from 'react';

const MostFaved = () => {
    const [array, setArray] = useState<number[]>([]);
    useEffect(() => {
        const productArray = arrayFiller(8);
        setArray(productArray);
    }, [])

    const content = (

        <div id='mostFavedSlider' className={`${style.mostFavedSlider}`}>
            <div className={`${style.elementSlider}`}>
                {array.map((box: number) => (
                    <ProductBox key={box} productInfo={productInfo} />
                ))}
            </div>
        </div>

    );
    return (
        <div className={`${style.mostFaved}`}>
            <div className={`${style.title}`}><h2>Most Faved</h2></div>
            <div className={`${style.contentSlider}`}>
                <ContentSlider component="MostFaved" sliderClass='mostFavedSlider' content={content} />
            </div>
        </div>
    );
};

export default MostFaved;