import style from './style.module.css'
import { SliderContainer, CategoryContainer, StoryContainer, MostFavedContainer, PriceCutsContainer } from './components'


const HomePage = () => {
    return (
        <div className={`${style.homeContainer}`}>
            <div className={`${style.sliderContainer}`}>
                <SliderContainer />
            </div>
            <div className={`${style.categoryContainer}`}>
                <div><CategoryContainer /></div>
            </div>
            <div className={`${style.specificProductsContainer}`}>
                <div className={`${style.productSliderContainer}`}>
                    <MostFavedContainer />
                </div>
                <div className={`${style.productSliderContainer}`}>
                    <PriceCutsContainer />
                </div>
            </div>
            <div className={`${style.storyContainer}`}>
                <StoryContainer />
            </div>
        </div>
    )
};

export default HomePage;