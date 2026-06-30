function normalize(value) {
    return String(value ?? '').toLowerCase().trim();
}

function compactText(value) {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
}

export function getTerms(query) {
    return normalize(query).split(/\s+/).filter(Boolean).slice(0, 6);
}

function scoreText(text, terms, weight) {
    const normalized = normalize(text);
    return terms.reduce((score, term) => normalized.includes(term) ? score + weight : score, 0);
}

function scoreIssueNumber(number, terms) {
    return terms.some(term => String(number) === term || `#${number}` === term) ? 12 : 0;
}

function makeSnippet(text, query, fallback) {
    const plain = compactText(text || fallback);
    if (!plain) return '';

    const terms = getTerms(query);
    const lower = normalize(plain);
    const matched = terms.find(term => lower.includes(term));
    if (!matched) return plain.length > 140 ? `${plain.slice(0, 140)}...` : plain;

    const index = lower.indexOf(matched);
    const start = Math.max(0, index - 44);
    const end = Math.min(plain.length, index + matched.length + 96);
    return `${start > 0 ? '...' : ''}${plain.slice(start, end)}${end < plain.length ? '...' : ''}`;
}

export function searchIssues(index, query) {
    const terms = getTerms(query);
    if (terms.length === 0) return [];

    return index
        .map((item) => {
            const score =
                scoreIssueNumber(item.number, terms) +
                scoreText(item.fullTitle, terms, 10) +
                scoreText(item.title, terms, 8) +
                scoreText(item.summary, terms, 4) +
                scoreText(item.text, terms, 1);

            return {
                ...item,
                score,
                snippet: makeSnippet(item.text, query, item.summary)
            };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score || b.number - a.number)
        .slice(0, 30);
}

export {compactText};
