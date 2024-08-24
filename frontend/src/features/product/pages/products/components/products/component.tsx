import { ProductBox } from '@src/shared/components';
import style from './style.module.css';
// import { useEffect, useState } from 'react';
// import { arrayFiller } from '@src/shared';
import { useAppSelector } from '@src/stores/hooks';
import { RootState } from '@src/stores/store';
// import HomeCss from '/public/css/home.module.css';


const AllProductsContainer = () => {
    const products = useAppSelector((state: RootState)=> state.product.product);
    console.log(products);


    return (
        <div>
            <div className={`${style.allProducts}`}>
                {products.map((box)=>(
                   <ProductBox key={box.id} productInfo={box} />
                ))}          
            </div>
        </div>

    )
};

export default AllProductsContainer;