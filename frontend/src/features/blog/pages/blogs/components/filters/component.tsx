import style from "./style.module.css";

const FiltersBox = () => {
    return (
        <div className={style.filtersBox}>
            <input type="text" placeholder="Search..." />
            <select>
                <option value="most_faved">Most Faved</option>
                <option value="last_updated">Last Updated</option>
                <option value="most_viewed">Most Viewed</option>
            </select>
            <select>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
}

export default FiltersBox;