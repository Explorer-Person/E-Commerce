import style from "./style.module.css"
import {nutsImg} from "@src/shared"


interface CategoryBarIF {
    display: string;
}
const CategoryBar = ({display}: CategoryBarIF) =>{
    return (
        <div className={`${style.categoryBar} ${display}`}>
            <div className={`${style.categories}`}>
                <div className={`${style.category}`}>
                    <p>Angebot Des Monats</p>
                    <img src={nutsImg} alt="" />
                </div>
                <div className={`${style.category}`}>
                    <p>Angebot Des Monats</p>
                    <img src={nutsImg} alt="" />
                </div>
                <div className={`${style.category}`}>
                    <p>Angebot Des Monats</p>
                    <img src={nutsImg} alt="" />
                </div>
                <div className={`${style.category}`}>
                    <p>Angebot Des Monats</p>
                    <img src={nutsImg} alt="" />
                </div>
                <div className={`${style.category}`}>
                    <p>Angebot Des Monats</p>
                    <img src={nutsImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CategoryBar;