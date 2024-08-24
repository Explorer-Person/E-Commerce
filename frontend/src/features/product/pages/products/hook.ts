import { useAppDispatch } from "@src/stores/hooks";
import { useGetProductsQuery } from "../../services";
import { useEffect } from "react";
import { storeProduct } from "../../slices/product/slice";


const ProductsHook = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      dispatch(storeProduct(data.products));
    }
    if (isLoading) {
      console.log("loading...");
    }
    if (isError) {
      console.log("error...");
    }
  }, [dispatch, data, isError, isLoading]);
  return data;
};

export default ProductsHook;
