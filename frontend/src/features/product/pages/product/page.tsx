import style from './style.module.css'
import { ImgContainer, InfoContainer, CommentContainer, SimilarProductsContainer } from './components'

const ProductPage = () => {
    return (
        <div className={`${style.productContainers}`}>
            <div className={`${style.productContainer}`}>
                <div className={`${style.imgContainer}`}>
                    <ImgContainer />
                </div>
                <div className={`${style.infoContainer}`}>
                    <InfoContainer />
                </div>
                <div className={`${style.commentContainer}`}>
                    <CommentContainer />
                </div>
            </div>
            <div className={`${style.similarProductsContainer}`}>
                <SimilarProductsContainer />
            </div>
        </div>
    )
};

export default ProductPage;