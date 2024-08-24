import style from './style.module.css'

const CommentFilters = () => {
    return (
        <div className={`${style.filterComment}`}>
            <div className={`${style.commentSearch}`}><input placeholder='Search Comments' type="text" />
                <button>Search</button>
            </div>
            <div className={`${style.commentFilter}`}>
                <select className="browser-default custom-select">
                    <option selected>Product Point</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="browser-default custom-select">
                    <option selected>Comment Point</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    )
}

export default CommentFilters;