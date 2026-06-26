'use client';

import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/navigation';
import * as THREE from 'three';

const ACTIONS = {
    latest: 'latest',
    search: 'search'
};

function disposeMaterial(material) {
    if (Array.isArray(material)) {
        material.forEach(disposeMaterial);
        return;
    }
    material?.dispose?.();
}

function markAction(group, action) {
    group.traverse((object) => {
        object.userData.action = action;
    });
}

function findAction(object) {
    let current = object;
    while (current) {
        if (current.userData.action) return current.userData.action;
        current = current.parent;
    }
    return null;
}

function buildArchiveGroup(latestNumber) {
    const group = new THREE.Group();
    group.name = 'latest-issue-stack';
    group.userData.baseY = 0.26;

    const pageGeometry = new THREE.BoxGeometry(2.28, 0.035, 2.92);
    const pages = [
        {color: 0xffffff, opacity: 0.86},
        {color: 0xf2f6ff, opacity: 0.72},
        {color: 0xe9f0fb, opacity: 0.64},
        {color: 0xe1e9f6, opacity: 0.56},
        {color: 0xd9e4f2, opacity: 0.48}
    ];

    pages.forEach((page, index) => {
        const material = new THREE.MeshStandardMaterial({
            color: page.color,
            roughness: 0.42,
            metalness: 0.02,
            transparent: true,
            opacity: page.opacity,
            depthWrite: false
        });
        const mesh = new THREE.Mesh(pageGeometry, material);
        mesh.position.set(index * 0.035, index * 0.045, -index * 0.035);
        mesh.rotation.y = index * 0.008;
        group.add(mesh);
    });

    const inkMaterial = new THREE.MeshStandardMaterial({
        color: 0x2e3947,
        roughness: 0.65,
        transparent: true,
        opacity: 0.34
    });
    const accentMaterial = new THREE.MeshStandardMaterial({
        color: 0x0071e3,
        roughness: 0.5,
        transparent: true,
        opacity: 0.82
    });
    const lineGeometry = new THREE.BoxGeometry(1, 0.012, 0.03);
    const titleBars = [
        {x: -0.08, z: -0.78, width: 1.44},
        {x: -0.2, z: -0.52, width: 1.18},
        {x: -0.18, z: -0.1, width: 1.32},
        {x: -0.28, z: 0.16, width: 1.02},
        {x: -0.12, z: 0.42, width: 1.5}
    ];
    titleBars.forEach((bar, index) => {
        const line = new THREE.Mesh(lineGeometry, index === 0 ? accentMaterial : inkMaterial);
        line.scale.x = bar.width;
        line.position.set(bar.x, 0.25, bar.z);
        group.add(line);
    });

    const issueMark = new THREE.Mesh(
        new THREE.BoxGeometry(0.54, 0.014, 0.09),
        new THREE.MeshStandardMaterial({
            color: 0x0071e3,
            roughness: 0.46,
            transparent: true,
            opacity: latestNumber ? 0.92 : 0.72
        })
    );
    issueMark.position.set(-0.68, 0.255, -1.13);
    group.add(issueMark);

    markAction(group, ACTIONS.latest);
    return group;
}

function buildSearchGroup() {
    const group = new THREE.Group();
    group.name = 'search-lens';
    group.userData.baseY = 0.8;

    const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.43, 0.035, 12, 48),
        new THREE.MeshStandardMaterial({
            color: 0x1d1d1f,
            roughness: 0.28,
            metalness: 0.18
        })
    );
    group.add(ring);

    const glass = new THREE.Mesh(
        new THREE.CircleGeometry(0.38, 48),
        new THREE.MeshStandardMaterial({
            color: 0x89c7ff,
            roughness: 0.12,
            metalness: 0,
            transparent: true,
            opacity: 0.28,
            side: THREE.DoubleSide,
            depthWrite: false
        })
    );
    glass.position.z = -0.01;
    group.add(glass);

    const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.047, 0.72, 16),
        new THREE.MeshStandardMaterial({
            color: 0x2f3947,
            roughness: 0.34,
            metalness: 0.22
        })
    );
    handle.rotation.z = -0.78;
    handle.position.set(0.42, -0.42, 0);
    group.add(handle);

    const highlight = new THREE.Mesh(
        new THREE.TorusGeometry(0.45, 0.008, 8, 48),
        new THREE.MeshBasicMaterial({
            color: 0x0071e3,
            transparent: true,
            opacity: 0.52
        })
    );
    highlight.position.z = 0.015;
    group.add(highlight);

    markAction(group, ACTIONS.search);
    return group;
}

function buildGrid() {
    const grid = new THREE.GridHelper(7.2, 12, 0xb8c7d9, 0xdfe6ef);
    grid.position.y = -0.05;
    grid.material.transparent = true;
    grid.material.opacity = 0.42;
    return grid;
}

export function WeeklyArchiveScene({latestHref, latestNumber}) {
    const mountRef = useRef(null);
    const router = useRouter();
    const hoveredRef = useRef(null);
    const [hovered, setHovered] = useState(null);

    const setHover = (action) => {
        hoveredRef.current = action;
        setHovered(action);
    };

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        const interactive = [];
        let frameId = null;
        let renderer;

        try {
            renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: false,
                powerPreference: 'high-performance'
            });
        } catch {
            return;
        }

        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setClearColor(0xffffff, 0);
        mount.appendChild(renderer.domElement);

        const archiveGroup = buildArchiveGroup(latestNumber);
        const searchGroup = buildSearchGroup();
        archiveGroup.rotation.set(0.08, -0.34, -0.03);
        searchGroup.rotation.set(-0.2, 0.24, -0.32);
        scene.add(archiveGroup, searchGroup, buildGrid());
        interactive.push(archiveGroup, searchGroup);

        const ambient = new THREE.HemisphereLight(0xffffff, 0xd9e4f2, 2.4);
        const key = new THREE.DirectionalLight(0xffffff, 2.5);
        key.position.set(-3.5, 4.4, 4.8);
        const fill = new THREE.DirectionalLight(0x86c4ff, 0.9);
        fill.position.set(3.5, 2.2, -2.5);
        scene.add(ambient, key, fill);

        const resize = () => {
            const width = mount.clientWidth || 1;
            const height = mount.clientHeight || 1;
            const narrow = width < 720;
            const dpr = Math.min(window.devicePixelRatio || 1, narrow ? 1.25 : 1.5);

            renderer.setPixelRatio(dpr);
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.position.set(0, narrow ? 2.45 : 2.05, narrow ? 7.1 : 6.1);
            camera.lookAt(0, 0.45, 0);
            camera.updateProjectionMatrix();

            archiveGroup.position.set(narrow ? 0.34 : 0.82, archiveGroup.userData.baseY, narrow ? -0.36 : -0.08);
            archiveGroup.scale.setScalar(narrow ? 0.76 : 1);
            searchGroup.position.set(narrow ? -1.02 : -1.55, searchGroup.userData.baseY, narrow ? 0.34 : 0.12);
            searchGroup.scale.setScalar(narrow ? 0.74 : 1);
            renderer.render(scene, camera);
        };

        const updatePointer = (event) => {
            const rect = renderer.domElement.getBoundingClientRect();
            pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        };

        const pick = (event, activate = false) => {
            updatePointer(event);
            raycaster.setFromCamera(pointer, camera);
            const hits = raycaster.intersectObjects(interactive, true);
            const action = hits.length ? findAction(hits[0].object) : null;
            setHover(action);
            renderer.domElement.style.cursor = action ? 'pointer' : 'default';

            if (activate && action === ACTIONS.search) {
                router.push('/search');
            }
            if (activate && action === ACTIONS.latest) {
                router.push(latestHref);
            }
            if (reducedMotion) renderer.render(scene, camera);
        };

        const onPointerMove = (event) => pick(event);
        const onPointerLeave = () => {
            setHover(null);
            renderer.domElement.style.cursor = 'default';
            if (reducedMotion) renderer.render(scene, camera);
        };
        const onClick = (event) => pick(event, true);

        renderer.domElement.addEventListener('pointermove', onPointerMove);
        renderer.domElement.addEventListener('pointerleave', onPointerLeave);
        renderer.domElement.addEventListener('click', onClick);

        const observer = new ResizeObserver(resize);
        observer.observe(mount);
        resize();

        const animate = (time) => {
            const seconds = time * 0.001;
            const hoveredAction = hoveredRef.current;
            const latestLift = hoveredAction === ACTIONS.latest ? 0.12 : 0;
            const searchLift = hoveredAction === ACTIONS.search ? 0.1 : 0;

            archiveGroup.position.y = archiveGroup.userData.baseY + latestLift + Math.sin(seconds * 0.85) * 0.028;
            archiveGroup.rotation.z = -0.03 + Math.sin(seconds * 0.48) * 0.018;
            searchGroup.position.y = searchGroup.userData.baseY + searchLift + Math.sin(seconds * 0.95 + 1.2) * 0.035;
            searchGroup.rotation.z = -0.32 + Math.sin(seconds * 0.55) * 0.035;
            const searchScale = hoveredAction === ACTIONS.search ? 1.08 : 1;
            const archiveScale = hoveredAction === ACTIONS.latest ? 1.04 : 1;
            searchGroup.scale.setScalar((mount.clientWidth < 720 ? 0.74 : 1) * searchScale);
            archiveGroup.scale.setScalar((mount.clientWidth < 720 ? 0.76 : 1) * archiveScale);

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        if (reducedMotion) {
            renderer.render(scene, camera);
        } else {
            frameId = requestAnimationFrame(animate);
        }

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
            observer.disconnect();
            renderer.domElement.removeEventListener('pointermove', onPointerMove);
            renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
            renderer.domElement.removeEventListener('click', onClick);
            scene.traverse((object) => {
                object.geometry?.dispose?.();
                disposeMaterial(object.material);
            });
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, [latestHref, latestNumber, router]);

    return (
        <section className="archive-scene" aria-labelledby="home-title">
            <div ref={mountRef} className="archive-scene__canvas" aria-hidden="true" data-hovered={hovered || ''} />
            <div className="archive-scene__copy">
                <p className="eyebrow">Archive</p>
                <h1 id="home-title">科技爱好者周刊</h1>
                <p>每周技术线索，从这里进入。</p>
            </div>
            <nav className="archive-scene__actions" aria-label="首页入口">
                <Link
                    className={`archive-scene__action${hovered === ACTIONS.search ? ' is-active' : ''}`}
                    href="/search"
                    onPointerEnter={() => setHover(ACTIONS.search)}
                    onPointerLeave={() => setHover(null)}
                >
                    <span aria-hidden="true">⌕</span>
                    搜索
                </Link>
                <Link
                    className={`archive-scene__action${hovered === ACTIONS.latest ? ' is-active' : ''}`}
                    href={latestHref}
                    onPointerEnter={() => setHover(ACTIONS.latest)}
                    onPointerLeave={() => setHover(null)}
                >
                    <span aria-hidden="true">↗</span>
                    第 {latestNumber} 期
                </Link>
            </nav>
        </section>
    );
}
