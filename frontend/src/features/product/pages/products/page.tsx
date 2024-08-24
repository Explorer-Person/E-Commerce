import style from './style.module.css';
import { ProductsContainer, FiltersContainer } from './components';
import ProductsHook from './hook';

const ProductsPage = () => {
    const data = ProductsHook();
    if(data) {
        return (
            <div className={style.allProductsPage}>
                <div className='d-flex'>
                    <div className={style.filtersContainer}>
                        <FiltersContainer />
                    </div>
                    <div className={style.productsContainer}>
                        <ProductsContainer />
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default ProductsPage;
