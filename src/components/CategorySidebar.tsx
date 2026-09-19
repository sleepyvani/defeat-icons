import React from 'react';
import { CATEGORIES } from '../constants/categories.js';
import { CategoryIcon } from './CategoryIcon.js';
import type { CategoryItem } from '../types.js';

interface CategorySidebarProps {
  selectedCategory: CategoryItem;
  onSelectCategory: (cat: CategoryItem) => void;
  categoryCounts: Record<string, number>;
}

export function CategorySidebar({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: CategorySidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-dashed border-zinc-300 bg-white/70 p-4 lg:block">
      <div className="sticky top-16">
        <div className="mb-3 flex items-center justify-between px-2">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Categories
          </span>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-600">
            {CATEGORIES.length - 1}
          </span>
        </div>

        <ul
          data-slot="categories"
          className="max-h-[calc(100vh-160px)] space-y-0.5 overflow-y-auto pr-1 text-sm font-medium"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory.id === cat.id;
            const count = categoryCounts[cat.id] || 0;

            return (
              <li
                key={cat.id}
                className="group/category"
                data-category={cat.dataCategory}
              >
                <button
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`flex h-8 w-full items-center justify-between rounded-md px-2 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-zinc-900 text-white shadow-xs'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-md border ${
                        isSelected
                          ? 'border-zinc-700 bg-zinc-800 text-zinc-200'
                          : 'border-zinc-200/80 bg-zinc-100 text-zinc-500 group-hover/category:text-zinc-700'
                      }`}
                    >
                      <CategoryIcon id={cat.id} className="size-3" />
                    </span>
                    <span className="truncate">{cat.name}</span>
                  </span>
                  <span
                    className={`ml-2 rounded-sm px-1.5 py-0.5 text-[10px] font-mono ${
                      isSelected
                        ? 'bg-zinc-800 text-zinc-200'
                        : 'bg-zinc-100 text-zinc-500 group-hover/category:text-zinc-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
