import Carousel from 'react-bootstrap/Carousel';
import style from './style.module.css'
import { arrayFiller, hundredGramImg } from "@src/shared"
import { useEffect, useState } from 'react';



function Slider() {
    const [array, setArray] = useState<number[]>([]);
    useEffect(() => {
        const productArray = arrayFiller(3);
        setArray(productArray);
    }, [])

    return (
        <Carousel>
            {array.map((box:number) => (
                <Carousel.Item key={box} id={`${box}`}>
                    <img className={`${style.sliderImg}`} src={hundredGramImg}></img>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;