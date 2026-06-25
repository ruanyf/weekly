import {useEffect, useRef} from "react";

/**
 * 渲染周刊的组件
 *
 * @param content issue 周刊的具体内容
 */
export function Article({content}) {
    const divRef = useRef(null);
    useEffect(() => {
        if (divRef.current) {
            divRef.current.innerHTML = content
        }
    }, [content]);
    return <div ref={divRef} />;
}