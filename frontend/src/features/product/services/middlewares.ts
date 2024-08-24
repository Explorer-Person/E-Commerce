import { filterProductsApi, getProductsApi } from ".";


const ProductMiddlewares = [getProductsApi.middleware, filterProductsApi.middleware];

export default ProductMiddlewares;