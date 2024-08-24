import style from "./style.module.css"
import {peanutsImg} from '@src/shared'

const StoryBox = () => {
    return (
        <div className={`${style.storyBox}`}>
            <div className={`${style.storyTitle}`}><h3 className="text-center">Peanuts History</h3></div>
            <div className={`${style.storyImage}`}><img src={peanutsImg} alt="" /></div>
            <div className={`${style.storyDetail}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, hic.</p>
                <button>Read More..</button>
            </div>
        </div>

    )
}

export default StoryBox;