export interface ResponseGetProductsIF {
    products: ProductIF[];
}

export interface ProductIF {
    id: string;
    image: string;
    title: string;
    price: number;
    detail: string;
    rate: number;
}