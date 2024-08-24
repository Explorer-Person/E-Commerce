// import React, { useState } from 'react';
// import { MDBContainer, MDBRating } from 'mdbreact';
import style from './style.module.css'

const RatingBox = () => {


    return (
        <div className={`${style.ratingChartBox}`}>
            <div className={`${style.ratingChart}`}>
                <div className={`${style.starTag}`}>
                     <div><h6>5</h6></div>
                     <div><h6>★</h6></div>
                </div>
                <div className={`${style.progressChart}`}>
                    <div className={`${style.progress}`}></div>
                </div>
                <div className={`${style.ratingCount}`}><h6>25</h6></div>
            </div>
            <div className={`${style.ratingChart}`}>
                <div className={`${style.starTag}`}>
                     <div><h6>4</h6></div>
                     <div><h6>★</h6></div>
                </div>
                <div className={`${style.progressChart}`}>
                    <div className={`${style.progress} w-75`}></div>
                </div>
                <div className={`${style.ratingCount}`}><h6>25</h6></div>
            </div>
            <div className={`${style.ratingChart}`}>
                <div className={`${style.starTag}`}>
                     <div><h6>3</h6></div>
                     <div><h6>★</h6></div>
                </div>
                <div className={`${style.progressChart}`}>
                    <div className={`${style.progress} w-50`}></div>
                </div>
                <div className={`${style.ratingCount}`}><h6>25</h6></div>
            </div>
            <div className={`${style.ratingChart}`}>
                <div className={`${style.starTag}`}>
                     <div><h6>2</h6></div>
                     <div><h6>★</h6></div>
                </div>
                <div className={`${style.progressChart}`}>
                    <div className={`${style.progress} w-25`}></div>
                </div>
                <div className={`${style.ratingCount}`}><h6>25</h6></div>
            </div>
            <div className={`${style.ratingChart}`}>
                <div className={`${style.starTag}`}>
                     <div><h6>1</h6></div>
                     <div><h6>★</h6></div>
                </div>
                <div className={`${style.progressChart}`}>
                    <div className={`${style.progress} d-none`}></div>
                </div>
                <div className={`${style.ratingCount}`}><h6>25</h6></div>
            </div>
            
            

        </div>
        // <MDBContainer>
        //   <MDBRating data={basic} />
        // </MDBContainer>
    );
};

export default RatingBox;