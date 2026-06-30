const INLINE_RENDERERS = {
    text(node, key) {
        return node.text;
    },
    strong(node, key) {
        return <strong key={key}>{renderInlineNodes(node.tokens || [])}</strong>;
    },
    em(node, key) {
        return <em key={key}>{renderInlineNodes(node.tokens || [])}</em>;
    },
    codespan(node, key) {
        return <code key={key}>{node.text}</code>;
    },
    del(node, key) {
        return <del key={key}>{renderInlineNodes(node.tokens || [])}</del>;
    },
    link(node, key) {
        const children = renderInlineNodes(node.tokens || []);
        const external = typeof node.href === "string" && /^https?:\/\//.test(node.href);
        return (
            <a
                key={key}
                href={node.href}
                title={node.title || undefined}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
            >
                {children}
            </a>
        );
    },
    image(node, key) {
        return <img key={key} src={node.href} alt={node.text || ""} title={node.title || undefined} loading="lazy" />;
    },
    br(node, key) {
        return <br key={key} />;
    }
};

function renderInlineNodes(nodes = []) {
    return nodes.map((node, index) => {
        const key = node.raw ? `${node.type}-${index}-${node.raw}` : `${node.type}-${index}`;
        const renderer = INLINE_RENDERERS[node.type];

        if (renderer) {
            return renderer(node, key);
        }

        if (Array.isArray(node.tokens)) {
            return <span key={key}>{renderInlineNodes(node.tokens)}</span>;
        }

        if (typeof node.text === "string") {
            return <span key={key}>{node.text}</span>;
        }

        return null;
    });
}

function renderTable(table, keyPrefix) {
    const head = table.token?.header || [];
    const rows = table.token?.rows || [];

    return (
        <div className="overflow-x-auto">
            <table className="issue-table">
                {head.length ? (
                    <thead>
                        <tr>
                            {head.map((cell, index) => (
                                <th key={`${keyPrefix}-head-${index}`} style={{textAlign: table.token?.align?.[index] || "left"}}>
                                    {renderInlineNodes(cell.tokens || [{type: "text", text: cell.text, raw: cell.text}])}
                                </th>
                            ))}
                        </tr>
                    </thead>
                ) : null}
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={`${keyPrefix}-row-${rowIndex}`}>
                            {row.map((cell, cellIndex) => (
                                <td key={`${keyPrefix}-cell-${rowIndex}-${cellIndex}`} style={{textAlign: table.token?.align?.[cellIndex] || "left"}}>
                                    {renderInlineNodes(cell.tokens || [{type: "text", text: cell.text, raw: cell.text}])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function renderBlock(node, index) {
    const key = node.id || `${node.type}-${index}`;

    switch (node.type) {
        case "heading": {
            const level = Math.min(Math.max(node.depth || 2, 1), 6);
            const HeadingTag = `h${level}`;
            return (
                <HeadingTag key={key} id={node.headingId || node.id || undefined} className={`issue-h issue-h-${level}`}>
                    {renderInlineNodes(node.token?.tokens || [{type: "text", text: node.text, raw: node.text}])}
                </HeadingTag>
            );
        }
        case "paragraph":
            return <p key={key}>{renderInlineNodes(node.token?.tokens || [{type: "text", text: node.text, raw: node.text}])}</p>;
        case "blockquote":
            return (
                <blockquote key={key}>
                    {node.token?.tokens?.map((child, childIndex) => renderBlock({type: child.type, token: child, text: child.text, raw: child.raw, depth: child.depth, ordered: child.ordered, id: `${key}-${childIndex}`}, `${key}-${childIndex}`))}
                </blockquote>
            );
        case "list": {
            const Tag = node.token?.ordered ? "ol" : "ul";
            return (
                <Tag key={key}>
                    {(node.token?.items || []).map((item, itemIndex) => (
                        <li key={`${key}-item-${itemIndex}`}>
                            {renderInlineNodes(item.tokens?.[0]?.tokens || item.tokens || [{type: "text", text: item.text, raw: item.text}])}
                        </li>
                    ))}
                </Tag>
            );
        }
        case "code":
            return (
                <pre key={key}>
                    <code>{node.token?.text || node.text}</code>
                </pre>
            );
        case "hr":
            return <hr key={key} />;
        case "table":
            return renderTable(node, key);
        case "space":
            return null;
        case "html":
            return <div key={key} dangerouslySetInnerHTML={{__html: node.token?.raw || ""}} />;
        default:
            if (node.token?.text) {
                return <p key={key}>{node.token.text}</p>;
            }
            return null;
    }
}

export function Article({content = [], className = ""}) {
    return (
        <div className={className}>
            {content.map((node, index) => renderBlock(node, index))}
        </div>
    );
}
