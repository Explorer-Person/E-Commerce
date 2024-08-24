import style from './style.module.css'

import { StoryBox } from './components';


const Story = () => {
    return (
        <div className={`${style.storyComponent}`}>
            <div id='storySlider' className={`${style.storyBoxes}`}>
                <div className={`${style.focalElement}`}>
                    <StoryBox />
                </div>
                <div  className={`${style.sideElements}`}>
                    <div className='d-flex'>
                        <StoryBox />
                        <StoryBox />
                    </div>
                    <div className='d-flex'>
                        <StoryBox />
                        <StoryBox />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Story;