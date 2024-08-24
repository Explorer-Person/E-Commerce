// import react from "react";
import style from './style.module.css'

const Sitemap = () => {
    return (
        <div className={`${style.siteMapContainer}`}>
            <div className={`${style.sitemap}`}>
                <div className={`${style.sitemapHeader}`}>
                    <h4>Categories</h4>
                    <div className={`${style.sitemapBody}`}>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                    </div>
                </div>
                <div className={`${style.sitemapHeader}`}>
                    <h4>Price-Cuts</h4>
                    <div className={`${style.sitemapBody}`}>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                    </div>
                </div>
                <div className={`${style.sitemapHeader}`}>
                    <h4>Most Buyed</h4>
                    <div className={`${style.sitemapBody}`}>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                    </div>
                </div>
                <div className={`${style.sitemapHeader}`}>
                    <h4>Most Faved</h4>
                    <div className={`${style.sitemapBody}`}>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                        <div><a href="/">Something</a></div>
                    </div>
                </div>


            </div>
        </div>

    )
};

export default Sitemap;