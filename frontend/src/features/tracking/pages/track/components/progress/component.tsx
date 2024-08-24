import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style  from "./style.module.css";


const ProgressContainer = () =>{
    return (
        <div className={`${style.progressBox}`}>
            <h2 className="mb-5">Progress</h2>
              <div className={`${style.lineBoxes}`}>
                 <div id="lineBox-1" className={`${style.lineBox}`}>
                 <FontAwesomeIcon icon={faLocationDot} className={`${style.locationDot}`}/>
                 </div>
                 <div id="lineBox-2" className={`${style.lineBox}`}>
                 <FontAwesomeIcon icon={faLocationDot} className={`${style.locationDot}`}/>
                 </div>
                 <div id="lineBox-3" className={`${style.lineBox}`}>
                 <FontAwesomeIcon icon={faLocationDot} className={`${style.locationDot}`}/>
                 </div>
              </div>
        </div>
    )
}

export default ProgressContainer;