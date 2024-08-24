
import style from "./style.module.css";
import { angebotDesImg } from "@src/shared/assets"


interface EventStoryIF {
    size: {
        width: string;
        height: string;
        display: string;
    };
    handleClick: (event: React.MouseEvent<Element, MouseEvent>)=>void;

}
const EventStory = ({ size, handleClick }: EventStoryIF) => {
    
    return (
        <div style={{ width: `${size.width}`, height: `${size.height}` }} className={`${style.storiesBox}`}>
            <div className={`${style.stories}`}>
                <div className={`${size.display}`}>
                    <div className={`${style.titleBox}`}>
                        <h1>Campaigns</h1>
                        <h1 role="closeStory" onClick={handleClick}  className={`${style.closeButton}`}>x</h1>
                    </div>

                    <hr />
                    <div className={`${style.story}`}>
                        <h3>Title</h3>
                        <div><img src={angebotDesImg} alt="angebot" /></div>

                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aspernatur.</h6>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default EventStory;