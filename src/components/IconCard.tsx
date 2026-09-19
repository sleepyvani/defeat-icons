import React, { useState, useEffect, useRef } from 'react';
import { componentCache, loadIcon } from '../lib/icon-loader.js';

interface IconCardProps {
  name: string;
  colorClass: string;
  sizeVal: number;
  onSelect: (name: string) => void;
  onQuickCopy: (name: string, e: React.MouseEvent) => void;
  pkgPath?: string;
}

export const IconCard = React.memo(function IconCard({
  name,
  colorClass,
  sizeVal,
  onSelect,
  onQuickCopy,
  pkgPath,
}: IconCardProps) {
  const [Comp, setComp] = useState<React.ComponentType<any> | null>(() => componentCache.get(name) || null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (Comp) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [Comp]);

  useEffect(() => {
    if (!isVisible || Comp) return;

    let isMounted = true;
    loadIcon(name).then((loaded) => {
      if (isMounted && loaded) {
        setComp(() => loaded);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [isVisible, name, Comp]);

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(name)}
      className="group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white py-4 px-2 shadow-xs hover:border-zinc-400 hover:bg-zinc-50/50 sm:py-6"
    >
      <button
        onClick={(e) => onQuickCopy(name, e)}
        title={`Copy: import { ${name} } from '${pkgPath || 'defeat-icons-react'}'`}
        className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 shadow-xs hover:bg-gray-100 hover:text-zinc-900"
      >
        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>

      <div className="flex h-12 w-12 items-center justify-center">
        {Comp ? (
          <Comp size={sizeVal} className={colorClass || undefined} />
        ) : (
          <div className="size-6 animate-pulse rounded-full bg-gray-200" />
        )}
      </div>

      <span className="mt-2 w-full truncate px-1 text-center text-xs font-medium text-gray-700 sm:text-xs">
        {name}
      </span>
    </div>
  );
});
