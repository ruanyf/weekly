'use client';

import {useRouter} from 'next/navigation';
import {useRef} from 'react';

export function SearchBox() {
    const router = useRouter();
    const inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const query = inputRef.current?.value.trim() || '';
        router.push(`/search${query ? `?q=${encodeURIComponent(query)}` : ''}`);
    }

    return (
        <form className="search-box search-box--large" role="search" onSubmit={handleSubmit}>
            <span className="search-box__icon" aria-hidden="true">⌕</span>
            <input
                ref={inputRef}
                name="q"
                type="search"
                placeholder="搜索 AI、开源、rsync…"
                aria-label="搜索周刊内容"
            />
            <button className="primary-button" type="submit">搜索</button>
        </form>
    );
}
