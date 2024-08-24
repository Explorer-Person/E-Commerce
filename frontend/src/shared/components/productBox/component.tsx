import { ProductIF } from '@src/features/home/stores/interfaces/stateInterface';
import style from './style.module.css'
// import {RoutingUtil} from '@src/shared';
import {nutsImg} from "@src/shared"
import ProductBoxHook from './hook';
// import HomeCss from '/public/css/home.module.css'
interface ProductBoxIF{
    productInfo: ProductIF;
}

const ProductBox = ({productInfo}: ProductBoxIF) => {
    // const {linkTo} = RoutingUtil();
    const {functions: {handleButtonClick}} = ProductBoxHook();
    return (
        <div className={`${style.productBox}`}>
            <div className={`${style.imageBox}`}><img src={nutsImg} alt="nuts" /></div>
            <div className={`${style.definitionBox}`}>
                <div className={`${style.productTitle}`}><h4>{productInfo.title}</h4></div>
                <div className={`${style.productPrice}`}><h5>{productInfo.price}£</h5></div>
                <div className={`${style.productRate}`}><h5>★★★★★ - {productInfo.rate}</h5></div>
                <div className={`${style.productDetail}`}><h6>{productInfo.detail}</h6></div>
                <div className={`${style.productButton}`}><button value={productInfo.id} onClick={handleButtonClick}>Add To Cart</button></div>
            </div>
        </div>
    )
};

export default ProductBox;