import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRESET_THEMES, SIZES } from '../constants/themes.js';
import { CATEGORIES } from '../constants/categories.js';
import { CategoryIcon } from './CategoryIcon.js';
import { EASE_OUT } from '../lib/ease.js';
import type { CategoryItem, IconSize, PresetTheme } from '../types.js';

interface ToolbarProps {
  selectedTheme: PresetTheme;
  onSelectTheme: (theme: PresetTheme) => void;
  search: string;
  onSearchChange: (search: string) => void;
  selectedSize: IconSize;
  onSelectSize: (size: IconSize) => void;
  selectedCategory: CategoryItem;
  onSelectCategory: (cat: CategoryItem) => void;
  displayedCount: number;
  totalFilteredCount: number;
  categoryCounts: Record<string, number>;
}

export function Toolbar({
  selectedTheme,
  onSelectTheme,
  search,
  onSearchChange,
  selectedSize,
  onSelectSize,
  selectedCategory,
  onSelectCategory,
  displayedCount,
  totalFilteredCount,
  categoryCounts,
}: ToolbarProps) {
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState('');
  const mobileSelectRef = useRef<HTMLDivElement | null>(null);
  const categorySearchInputRef = useRef<HTMLInputElement | null>(null);

  const filteredCategories = useMemo(() => {
    if (!categorySearch.trim()) return CATEGORIES;
    const q = categorySearch.toLowerCase().trim();
    return CATEGORIES.filter((cat) => cat.name.toLowerCase().includes(q));
  }, [categorySearch]);

  useEffect(() => {
    if (mobileCategoryOpen) {
      const t = setTimeout(() => {
        categorySearchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(t);
    } else {
      setCategorySearch('');
    }
  }, [mobileCategoryOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileSelectRef.current && !mobileSelectRef.current.contains(e.target as Node)) {
        setMobileCategoryOpen(false);
        setCategorySearch('');
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileCategoryOpen(false);
        setCategorySearch('');
      }
    };
    if (mobileCategoryOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileCategoryOpen]);

  return (
    <div className="border-x border-b border-dashed border-zinc-300 bg-white/70 px-4 py-8 sm:px-10">
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:text-sm">
        Default currentColor or select a theme preset. Click any icon to copy its import snippet.
      </p>

      <div className="mt-5 flex justify-center">
        <div className="flex max-w-5xl flex-wrap items-center justify-center gap-1.5 p-2 sm:p-2.5">
          {PRESET_THEMES.map((theme) => {
            const isActive = selectedTheme.id === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onSelectTheme(theme)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                <span className="relative inline-flex h-4 w-4 items-center shrink-0">
                  <span
                    className="absolute right-0 top-0 size-3 rounded-full z-0"
                    style={{
                      backgroundColor: isActive && theme.id === 'default' ? '#e4e4e7' : theme.hex,
                      opacity: 0.4,
                    }}
                  />
                  <span
                    className={`absolute left-[-2px] top-0 z-10 size-3 rounded-full border ${
                      isActive && theme.id === 'default' ? 'border-zinc-400' : 'border-black/10'
                    }`}
                    style={{
                      backgroundColor: isActive && theme.id === 'default' ? '#e4e4e7' : theme.hex,
                    }}
                  />
                </span>
                <span>{theme.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="group relative w-full max-w-md">
          <svg
            className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-zinc-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search 3,424 icons (Heart, Arrow, User, Box...)"
            className="h-8 w-full rounded-xl border border-zinc-300 bg-white pl-10 pr-10 text-sm text-zinc-900 placeholder-zinc-400 shadow-xs transition-all hover:border-zinc-400 focus:border-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950/15"
          />
          {search && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-zinc-400 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-950/20"
            >
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex h-8 items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1 shadow-xs">
          {SIZES.map((sz) => (
            <button
              key={sz.val}
              type="button"
              onClick={() => onSelectSize(sz)}
              className={`flex h-full items-center justify-center rounded-lg px-3 text-xs font-semibold transition-all ${
                selectedSize.val === sz.val
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {sz.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 px-4 lg:hidden">
        <span className="text-xs font-semibold text-zinc-500 shrink-0">Category:</span>
        <div ref={mobileSelectRef} className="relative w-full max-w-xs">
          <button
            type="button"
            onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
            className={`flex h-8 w-full items-center justify-between gap-2 rounded-xl border bg-white px-2.5 text-xs font-medium text-zinc-900 shadow-xs transition-all hover:border-zinc-400 focus:border-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-950/15 ${
              mobileCategoryOpen
                ? 'border-zinc-950 ring-2 ring-zinc-950/15'
                : 'border-zinc-300'
            }`}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-100 text-zinc-600">
                <CategoryIcon id={selectedCategory.id} className="size-3" />
              </span>
              <span className="font-semibold truncate">{selectedCategory.name}</span>
              <span className="rounded-full border border-zinc-200/80 bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                {categoryCounts[selectedCategory.id] || 0}
              </span>
            </span>
            <svg
              className={`size-3.5 shrink-0 text-zinc-500 transition-transform duration-200 ${mobileCategoryOpen ? 'rotate-180 text-zinc-900' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <AnimatePresence>
            {mobileCategoryOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.98 }}
                transition={{ duration: 0.15, ease: EASE_OUT }}
                className="absolute left-0 top-full z-50 mt-1.5 flex max-h-72 w-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl shadow-zinc-950/10 ring-1 ring-zinc-950/5"
              >
                <div className="flex items-center border-b border-zinc-100 px-2.5 py-1.5">
                  <svg className="size-3.5 shrink-0 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    ref={categorySearchInputRef}
                    type="text"
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    placeholder="Search category..."
                    className="h-6 w-full border-0 bg-transparent px-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-0"
                  />
                  {categorySearch && (
                    <button
                      type="button"
                      onClick={() => setCategorySearch('')}
                      className="rounded-md p-0.5 text-zinc-400 hover:text-zinc-700"
                    >
                      <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="max-h-56 flex-1 overflow-y-auto p-1">
                  {filteredCategories.length === 0 ? (
                    <div className="py-6 text-center text-xs text-zinc-500">
                      No category found.
                    </div>
                  ) : (
                    filteredCategories.map((cat) => {
                      const isSelected = selectedCategory.id === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            onSelectCategory(cat);
                            setMobileCategoryOpen(false);
                            setCategorySearch('');
                          }}
                          className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-xs font-medium transition-colors ${
                            isSelected
                              ? 'bg-zinc-100 font-semibold text-zinc-950'
                              : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-100 text-zinc-600">
                              <CategoryIcon id={cat.id} className="size-3" />
                            </span>
                            <span className="truncate">{cat.name}</span>
                          </span>
                          <span className="flex items-center gap-1.5 shrink-0 ml-2">
                            <span className="rounded-full border border-zinc-200/60 bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                              {categoryCounts[cat.id] || 0}
                            </span>
                            {isSelected ? (
                              <svg className="size-3.5 text-zinc-900 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            ) : (
                              <span className="size-3.5 shrink-0" />
                            )}
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-3 text-center text-xs font-medium text-zinc-500">
        Showing <strong>{displayedCount}</strong> of <strong>{totalFilteredCount}</strong> icons
        {selectedCategory.id !== 'all' && (
          <span> in <strong>{selectedCategory.name}</strong></span>
        )}
        {search && <span> matching "{search}"</span>}
      </div>
    </div>
  );
}
