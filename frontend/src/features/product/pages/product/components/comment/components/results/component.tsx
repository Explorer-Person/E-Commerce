
import { RatingBox } from "@src/shared"
import {gewurzeImg} from "@src/shared"
import style from "./style.module.css"

const CommentResult = () => {
    return (
        <div className={`${style.commentResults}`}>
            <div className={`${style.commentedProduct}`}><h4>Angebot Nuts - Comments</h4></div>
            <div className={`${style.commentCount}`}><h4>1250 Comments</h4></div>
            <div className={`${style.commentProductImg}`}><img src={gewurzeImg} alt="gewürze" /></div>
            <div className={`${style.totalPoint}`}><h1>1,2 Point</h1> <h1>★★★★★</h1></div>
            <div className={`${style.starPoints}`}>
                <RatingBox />
            </div>
            <div className={`${style.evaluateButtons}`}><button>Evaluate Product...</button> <button>Add To Cart</button></div>
        </div>
    )
}

export default CommentResult;