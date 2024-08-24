import { RoutingUtil } from "@src/shared";
import style from "./style.module.css";

const BlogBox = () => {
    const {linkTo} = RoutingUtil();
    return (
        <div className={style.blogBox}>
            <img className={style.blogImage} src="https://via.placeholder.com/150" alt="Blog Image" />
            <div className={style.blogContent}>
                <div className={style.titleContents}>
                <h2 className={style.blogTitle}>Blog Title</h2>
                <h6 className={style.blogDate}>15/10/2001</h6>
                </div>
                
                <p className={style.blogDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra velit nec mauris lobortis ultrices.</p>
                <div className={style.blogButtons}>
                    <button className={style.likeButton}>Like</button>
                    <button onClick={()=>linkTo("/blogs/blog")} className={style.readMoreButton}>Read More</button>
                    <div className="mt-2 mx-5"><h5> ❤️ 89</h5></div>
                </div>
            </div>
        </div>
    );
}

export default BlogBox;
