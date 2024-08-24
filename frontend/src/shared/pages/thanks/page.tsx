// import react from "react";
import style from './style.module.css';
import {thanksImg} from '@src/shared';
import { ButtonsCss } from '@src/shared';
import { RoutingUtil } from '@src/shared';

const Sitemap = () => {
    const {linkTo} = RoutingUtil();
    return (
        <div className={`${style.thanksPage}`}>
              <div className={`${style.thanksImg}`}><img src={thanksImg} alt="" /></div>
              <button onClick={()=>{linkTo("/")}} className={`${ButtonsCss.goHomeButton}`}>Go Home</button>
        </div>

    )
};

export default Sitemap;