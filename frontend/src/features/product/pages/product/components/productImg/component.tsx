import { useEffect } from 'react';
import { MouseEventHandler } from 'react';
import style from './style.module.css'
import { salcalarImg, yoreselImg, nutsImg, gewurzeImg } from "@src/shared"
import { useAppDispatch, useAppSelector } from '@src/stores/hooks';
import { RootState } from '@src/stores/store';
import { imageSelector } from '@src/features/product/slices/product/slice';


const SimilarProducts = () => {
    const dispatch = useAppDispatch();
    const currentImg = useAppSelector((state: RootState) => state.ProductReducers.productReducer.currentImg)

    const pickImage: MouseEventHandler<HTMLImageElement> = (event) => {
        const img = event.target as HTMLImageElement;
        const src = img.getAttribute("src")
        if (src) {
            dispatch(imageSelector(src));
        }
    }
    useEffect(() => {
        const startImage = document.getElementById('startImage')?.getAttribute("src");
        if (startImage) {
            dispatch(imageSelector(startImage));
        }
    }, [dispatch])
    return (
        <div className={`${style.imgBox}`}>
            <div className={`${style.parentImg}`}>
                <img id='mainImg' src={currentImg} alt="" />
            </div>
            <div className={`${style.childrenImgs}`}>
                <div><img id='startImage' onClick={pickImage} src={salcalarImg} alt="" /></div>
                <div><img onClick={pickImage} src={nutsImg} alt="" /></div>
                <div><img onClick={pickImage} src={gewurzeImg} alt="" /></div>
                <div><img onClick={pickImage} src={yoreselImg} alt="" /></div>
            </div>
        </div>
    )
};

export default SimilarProducts;