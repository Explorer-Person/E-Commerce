import { useAddToCartMutation } from "@src/features";
import React from "react";
import { useErrorBoundary } from "react-error-boundary";


const ProductBoxHook = () => {
    const {showBoundary} = useErrorBoundary();
    const [addToCart] = useAddToCartMutation();

   const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
      const {value} = event.target as HTMLButtonElement;
      addToCart(value)
      .then(result=>{
        if('data' in result){
            console.log(result.data.message);
        }
      })
      .catch(err=> showBoundary(err));
   }
   return {
    functions: {
        handleButtonClick
    },
    datas: {

    }
   }
}
export default ProductBoxHook;
