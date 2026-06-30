export function SearchBox({defaultValue = ''} = {}) {
    return (
        <form className="search-box search-box--large" action="/search" role="search">
            <span className="search-box__icon" aria-hidden="true">⌕</span>
            <input
                name="q"
                type="search"
                defaultValue={defaultValue}
                placeholder="搜索 AI、开源、rsync…"
                aria-label="搜索周刊内容"
            />
            <button className="primary-button" type="submit">搜索</button>
        </form>
    );
}
