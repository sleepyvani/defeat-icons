import React, { useState, useMemo, useEffect, useCallback } from 'react';
import iconNamesData from './icons-meta.json';
import { CATEGORIES } from './constants/categories.js';
import { PRESET_THEMES, SIZES } from './constants/themes.js';
import { FRAMEWORKS } from './constants/frameworks.js';
import { useAnimatedToastStack, AnimatedToastStack } from './Toast.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Toolbar } from './components/Toolbar.js';
import { CategorySidebar } from './components/CategorySidebar.js';
import { IconGrid } from './components/IconGrid.js';
import { IconModal } from './components/IconModal.js';
import { Footer } from './components/Footer.js';
import type { CategoryItem, FrameworkId, PackageManager } from './types.js';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem>(CATEGORIES[0]);
  const [selectedTheme, setSelectedTheme] = useState(PRESET_THEMES[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[1]);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(96);
  const [packageManager, setPackageManager] = useState<PackageManager>('npm');
  const [selectedFramework, setSelectedFramework] = useState<FrameworkId>('react');

  const { toasts, showToast, dismissToast } = useAnimatedToastStack({
    defaultDuration: 3200,
    limit: 4,
  });

  const activeFramework = useMemo(
    () => FRAMEWORKS.find((f) => f.id === selectedFramework) || FRAMEWORKS[0],
    [selectedFramework]
  );

  const copyToClipboard = useCallback(
    (text: string, title: string, description?: string) => {
      navigator.clipboard.writeText(text);
      showToast({
        title,
        description,
        status: 'success',
      });
    },
    [showToast]
  );

  const categoryCounts = useMemo(() => {
    const icons = iconNamesData as string[];
    const counts: Record<string, number> = {
      all: icons.length,
    };
    CATEGORIES.forEach((cat) => {
      if (!cat.regex) return;
      counts[cat.id] = icons.filter((name) => cat.regex!.test(name)).length;
    });
    return counts;
  }, []);

  const filteredIcons = useMemo(() => {
    let list = iconNamesData as string[];

    if (selectedCategory.regex) {
      list = list.filter((name) => selectedCategory.regex!.test(name));
    }

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((name) => name.toLowerCase().includes(q));
    }

    return list;
  }, [search, selectedCategory]);

  useEffect(() => {
    setVisibleCount(96);
  }, [search, selectedCategory]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 96, filteredIcons.length));
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedCategory(CATEGORIES[0]);
  };

  const displayedIcons = useMemo(() => {
    return filteredIcons.slice(0, visibleCount);
  }, [filteredIcons, visibleCount]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900">
      <main className="container mx-auto max-w-7xl px-4 md:px-6">
        <Header />

        <Hero
          packageManager={packageManager}
          onSelectPackageManager={setPackageManager}
          selectedFramework={selectedFramework}
          onSelectFramework={setSelectedFramework}
          onCopy={copyToClipboard}
        />

        <Toolbar
          selectedTheme={selectedTheme}
          onSelectTheme={setSelectedTheme}
          search={search}
          onSearchChange={setSearch}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          displayedCount={displayedIcons.length}
          totalFilteredCount={filteredIcons.length}
          categoryCounts={categoryCounts}
        />

        <div className="border-x border-b border-dashed border-zinc-300 bg-white/40">
          <div className="flex flex-col lg:flex-row">
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />

            <IconGrid
              displayedIcons={displayedIcons}
              selectedTheme={selectedTheme}
              selectedSize={selectedSize}
              pkgPath={activeFramework.pkgPath}
              search={search}
              selectedCategory={selectedCategory}
              totalFilteredCount={filteredIcons.length}
              visibleCount={visibleCount}
              onSelectIcon={(n) => setSelectedIcon(n)}
              onQuickCopy={(n, e) => {
                e.stopPropagation();
                copyToClipboard(
                  `import { ${n} } from '${activeFramework.pkgPath}';`,
                  'Copied named import',
                  `import { ${n} } from '${activeFramework.pkgPath}'`
                );
              }}
              onClearFilters={handleClearFilters}
              onLoadMore={handleLoadMore}
            />
          </div>
        </div>

        <Footer pkgPath={activeFramework.pkgPath} />
      </main>

      <IconModal
        selectedIcon={selectedIcon}
        selectedTheme={selectedTheme}
        selectedFramework={selectedFramework}
        onSelectFramework={setSelectedFramework}
        onClose={() => setSelectedIcon(null)}
        onCopy={copyToClipboard}
      />

      <AnimatedToastStack
        toasts={toasts}
        onDismiss={dismissToast}
        position="bottom-center"
        fixed
      />
    </div>
  );
}
