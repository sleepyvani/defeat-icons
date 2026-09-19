import React from 'react';
import { IconCard } from './IconCard.js';
import type { CategoryItem, IconSize, PresetTheme } from '../types.js';

interface IconGridProps {
  displayedIcons: string[];
  selectedTheme: PresetTheme;
  selectedSize: IconSize;
  pkgPath: string;
  search: string;
  selectedCategory: CategoryItem;
  totalFilteredCount: number;
  visibleCount: number;
  onSelectIcon: (name: string) => void;
  onQuickCopy: (name: string, e: React.MouseEvent) => void;
  onClearFilters: () => void;
  onLoadMore: () => void;
}

export function IconGrid({
  displayedIcons,
  selectedTheme,
  selectedSize,
  pkgPath,
  search,
  selectedCategory,
  totalFilteredCount,
  visibleCount,
  onSelectIcon,
  onQuickCopy,
  onClearFilters,
  onLoadMore,
}: IconGridProps) {
  return (
    <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
      {displayedIcons.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-6">
          {displayedIcons.map((name) => (
            <IconCard
              key={name}
              name={name}
              colorClass={selectedTheme.colorClass}
              sizeVal={selectedSize.val}
              pkgPath={pkgPath}
              onSelect={onSelectIcon}
              onQuickCopy={onQuickCopy}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400">
            <svg
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <p className="mt-4 text-base font-semibold text-zinc-800">
            No icons found matching "{search}"
            {selectedCategory.id !== 'all' && ` in ${selectedCategory.name}`}
          </p>
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-3 text-xs font-semibold text-zinc-900 hover:underline"
          >
            Clear search & filters
          </button>
        </div>
      )}

      {visibleCount < totalFilteredCount && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={onLoadMore}
            className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-800 shadow-xs hover:border-zinc-400 hover:bg-zinc-50"
          >
            <span>Load next 96 icons ({totalFilteredCount - visibleCount} remaining)</span>
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
