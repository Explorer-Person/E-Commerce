import style from "./style.module.css"
import {notFoundImg} from "@src/shared"
import { ButtonsCss } from "@src/shared"
import { RoutingUtil } from "@src/shared"

const ErrorPage = () =>{
    const {linkTo} = RoutingUtil();
     return (
        <div className={`${style.errorPage}`}>
                <div className={`${style.errorDetail}`}>
                    <h1>404</h1>
                    <h2>Not Found</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, harum?</p>
                    <button onClick={()=>linkTo("/")} className={`${ButtonsCss.goHomeButton}`}>Go Home</button>
                </div>
                <div className={`${style.errorImg}`}><img src={notFoundImg} alt="not-found" /></div>
        </div>
     )
}

export default ErrorPage