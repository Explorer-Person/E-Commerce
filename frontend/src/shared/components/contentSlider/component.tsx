import React from 'react';
import style from './style.module.css'

interface ContentSlider{
    component: string;
    sliderClass: string;
    content: React.ReactNode;
}

function ContentSlider({component, sliderClass, content} : ContentSlider) {
    let leftValue = '0%';
    const slideAnimation = (direction: string) =>{
        const boxSlider = document.getElementById(`${sliderClass}`);
        console.log(direction);
        console.log(sliderClass);
        if(boxSlider){
            if(leftValue === '0%' && direction === '❱'){
                leftValue = '-100%';
                console.log(document.getElementById(`${sliderClass}`)?.style.left);
             }else if(leftValue === '-100%' && direction === '❰'){
                leftValue = '0%';
                console.log(document.getElementById(`${sliderClass}`)?.style.left);
             }
             console.log(leftValue);
             boxSlider.style.left = leftValue;
        }else{
            console.log("Something went wrong...");
        }
      
    }
    return (
        <div id={component} className={`${style.sliderBoxes}`}>
            <div onClick={()=>slideAnimation('❰')} className={`${style.arrows} ${style.leftArrow}`}>❰</div>
            <div className={`${style.parentBoxSlider}`}>
               {content}
            </div>
            <div onClick={()=>slideAnimation('❱')} className={`${style.arrows} ${style.rightArrow}`}>❱</div>
        </div>
    );
}

export default ContentSlider;