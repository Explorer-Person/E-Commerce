import style from './style.module.css'
import {nutsImg} from "@src/shared"

const CustomerComment = () => {
    return (
        <div className={`${style.customerComment}`}>
            <div className={`${style.commentDetails}`}>
                <div className={`${style.avatar}`}><img src={nutsImg} alt="" /></div>
                <div className={`${style.customerDetails}`}>
                    <h5>Korgeneral Faruk</h5>
                </div>
                <div className={`${style.commentDate}`}><h6>15/10/2001</h6></div>
                <div className={`${style.commentEvaluate}`}><h3>★★★★★</h3></div>
                <div className={`${style.commentTitle}`}><h5>Ürün Bok Gibi</h5></div>
            </div>
            <hr />
            <div className={`${style.commentContent}`}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat explicabo eveniet voluptatibus ad provident deleniti similique laboriosam sunt hic, doloribus repellendus, nemo eos minus necessitatibus. Similique, deleniti. Provident corrupti consequuntur aliquam numquam optio at id excepturi blanditiis quisquam ipsum. Expedita neque voluptatem animi voluptatibus dolorum autem, minus quasi in quod?
                </p>
            </div>
        </div>
    )
}

export default CustomerComment;