// import React from "react";
import style from './style.module.css'
import { CustomerComment, CommentFilters, CommentResult } from './components';


const Comment = () => {
    return (
        <div className={`${style.commentBox}`}>
            <div className={`${style.boxTitle}`}>
                <h3>Comments</h3>
            </div>
            <div className={`${style.boxContent}`}>
                <div>
                    <CommentResult />
                </div>
                <div className={`${style.filterComment} d-flex`}>
                    <CommentFilters />
                </div>
                <div className={`${style.customerComments}`}>

                    <CustomerComment />
                    <CustomerComment />
                    <CustomerComment />

                </div>
            </div>
        </div>

    );
}

export default Comment;