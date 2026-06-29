'use client';

import Link from 'next/link';
import {useCallback, useEffect, useRef, useState} from 'react';

const TILT_MAX_X = 3;
const TILT_MAX_Y = 4;

export function LatestIssueCard({issue}) {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({x: 0, y: 0});
    const [isHovering, setIsHovering] = useState(false);
    const rafRef = useRef(null);
    const [reducedMotion, setReducedMotion] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handler = (e) => setReducedMotion(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current || reducedMotion) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            const rect = cardRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const offsetX = (e.clientX - centerX) / (rect.width / 2);
            const offsetY = (e.clientY - centerY) / (rect.height / 2);
            setTilt({
                x: -offsetY * TILT_MAX_X,
                y: offsetX * TILT_MAX_Y,
            });
        });
    }, [reducedMotion]);

    const handleMouseEnter = useCallback(() => {
        if (!reducedMotion) setIsHovering(true);
    }, [reducedMotion]);

    const handleMouseLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setTilt({x: 0, y: 0});
        setIsHovering(false);
    }, []);

    const tiltStyle = reducedMotion
        ? {}
        : {
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovering ? 'none' : 'transform 780ms cubic-bezier(0.16, 1, 0.3, 1)',
        };

    return (
        <section className="latest-card-scene" aria-label="最新一期">
            <div
                ref={cardRef}
                className={`latest-card is-glass-depth${isHovering ? ' is-active' : ''}`}
                style={tiltStyle}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link className="latest-card__media" href={issue.href}
                      aria-label={`阅读第 ${issue.number} 期`}>
                    <img src={issue.cover.src} alt={`第 ${issue.number} 期封面图`}/>
                </Link>
                <div className="latest-card__body">
                    <span className="badge">最新一期 · {issue.year} 年 {issue.month} 月</span>
                    <h2>第 {issue.number} 期：{issue.title}</h2>
                    <p>{issue.summary}</p>
                    <Link className="primary-button" href={issue.href}>开始阅读</Link>
                </div>
            </div>
        </section>
    );
}
