import { RoutingUtil } from "@src/shared/utils"
import style from "./style.module.css"
import { xlEdited } from "@src/shared";

const SupportButton = () => {
    const {linkTo} = RoutingUtil();
    return (
        <div onClick={()=>linkTo("/support")} className={`${style.supportButton}`}>
            <div className={`${style.buttonImg}`}><img src={xlEdited} alt="img" /></div>
            <div className={`${style.buttonText}`}><h5>Dou You Need Any Support?</h5></div>
        </div>
    )
}

export default SupportButton;