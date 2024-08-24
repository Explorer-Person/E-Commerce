import "./style.css";

interface LoaderBoxIF {
    loaderStyle: string;
}
const LoaderBox = ({loaderStyle}:LoaderBoxIF) =>{
    console.log(loaderStyle);
   return (
    <div className={`${loaderStyle}`}/>
   )
}

export default LoaderBox;