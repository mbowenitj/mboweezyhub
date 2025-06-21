'use client';
import { JSX, useEffect, useRef, useState } from 'react';

export default function ParallaxLayers() {
  const layersRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Generate shapes on the client only
    const generatedShapes = [...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-white/10"
        style={{
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`
        }}
      />
    ));
    setShapes(generatedShapes);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!layersRef.current) return;
      const scrollY = window.scrollY;
      const layers = layersRef.current.children;

      Array.from(layers).forEach((layer, index) => {
        const speed = 0.2 + index * 0.1;
        const yPos = -scrollY * speed;
        (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={layersRef} className="fixed inset-0 pointer-events-none z-10">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')]"></div>
      <div className="absolute inset-0 overflow-hidden">
        {shapes}
      </div>
    </div>
  );
}
