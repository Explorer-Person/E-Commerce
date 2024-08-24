import { RoutingUtil } from "@src/shared";
import { FiltersBox, BlogBox } from "./components";
import style from "./style.module.css";

const BlogsPage = () => {
    const {linkTo} = RoutingUtil();
    return (
        <div className={`${style.blogsPage}`}>
            <div className={`${style.title}`}>
                <h2>Blogs</h2>
                <div onClick={()=>linkTo("/")}>
                    <h4>HOMEPAGE</h4>
                </div>
            </div>
            <div className={`${style.filters}`}>
                <FiltersBox />
            </div >
            <div className={`${style.blogs}`}>
                <BlogBox />
                <BlogBox />
                <BlogBox />
                <BlogBox />
            </div>
        </div>
    )
}

export default BlogsPage;