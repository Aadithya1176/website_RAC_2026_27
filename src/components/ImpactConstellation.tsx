import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NODE_COUNT = 34;
const CONNECT_DISTANCE = 2.6;
const GOLD = 0xe9b44c;

export default function ImpactConstellation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const nodePositions = new Float32Array(NODE_COUNT * 3);
    const velocities: { x: number; y: number } = { x: 0, y: 0 };
    const drift: Float32Array = new Float32Array(NODE_COUNT * 2);

    for (let i = 0; i < NODE_COUNT; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 9;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 3;
      drift[i * 2] = (Math.random() - 0.5) * 0.006;
      drift[i * 2 + 1] = (Math.random() - 0.5) * 0.006;
    }
    void velocities;

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: GOLD,
      size: 0.09,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodes);

    const maxLines = NODE_COUNT * 6;
    const linePositions = new Float32Array(maxLines * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const updateLines = () => {
      const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;
      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      let segIndex = 0;

      for (let i = 0; i < NODE_COUNT && segIndex < maxLines; i++) {
        const xi = posAttr.getX(i);
        const yi = posAttr.getY(i);
        const zi = posAttr.getZ(i);
        for (let j = i + 1; j < NODE_COUNT && segIndex < maxLines; j++) {
          const xj = posAttr.getX(j);
          const yj = posAttr.getY(j);
          const zj = posAttr.getZ(j);
          const dist = Math.hypot(xi - xj, yi - yj, zi - zj);
          if (dist < CONNECT_DISTANCE) {
            linePosAttr.setXYZ(segIndex * 2, xi, yi, zi);
            linePosAttr.setXYZ(segIndex * 2 + 1, xj, yj, zj);
            segIndex++;
          }
        }
      }
      lineGeometry.setDrawRange(0, segIndex * 2);
      linePosAttr.needsUpdate = true;
    };

    updateLines();
    renderer.render(scene, camera);

    if (prefersReducedMotion) {
      return () => {
        nodeGeometry.dispose();
        nodeMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
      };
    }

    let frameId: number;
    const clock = new THREE.Clock();
    const bounds = { x: 4.6, y: 3.6 };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;

      for (let i = 0; i < NODE_COUNT; i++) {
        let x = posAttr.getX(i) + drift[i * 2];
        let y = posAttr.getY(i) + drift[i * 2 + 1];
        if (x > bounds.x || x < -bounds.x) drift[i * 2] *= -1;
        if (y > bounds.y || y < -bounds.y) drift[i * 2 + 1] *= -1;
        x = Math.max(-bounds.x, Math.min(bounds.x, x));
        y = Math.max(-bounds.y, Math.min(bounds.y, y));
        posAttr.setXY(i, x, y);
      }
      posAttr.needsUpdate = true;
      updateLines();

      const elapsed = clock.getElapsedTime();
      scene.rotation.y = Math.sin(elapsed * 0.06) * 0.08;
      renderer.render(scene, camera);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
      } else {
        frameId = requestAnimationFrame(animate);
      }
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    frameId = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
