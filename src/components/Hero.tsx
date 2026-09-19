import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Rocket from 'defeat-icons-react/Rocket';
import Palette from 'defeat-icons-react/Palette';
import Sparkle from 'defeat-icons-react/Sparkle';
import BookOpen from 'defeat-icons-react/BookOpen';
import Box from 'defeat-icons-react/Box';
import Bolt from 'defeat-icons-react/Bolt';
import Code from 'defeat-icons-react/Code';
import { PACKAGE_MANAGERS, FRAMEWORKS } from '../constants/frameworks.js';
import { EASE_OUT } from '../lib/ease.js';
import type { PackageManager, FrameworkId } from '../types.js';

interface HeroProps {
  packageManager: PackageManager;
  onSelectPackageManager: (pm: PackageManager) => void;
  selectedFramework: FrameworkId;
  onSelectFramework: (fw: FrameworkId) => void;
  onCopy: (text: string, title: string, desc?: string) => void;
}

const FRAMEWORK_FILE_META: Record<FrameworkId, { file: string; lang: string }> = {
  react: { file: 'App.tsx', lang: 'TSX' },
  vue: { file: 'App.vue', lang: 'Vue' },
  svelte: { file: 'App.svelte', lang: 'Svelte' },
  solid: { file: 'App.tsx', lang: 'TSX' },
  preact: { file: 'App.tsx', lang: 'TSX' },
  astro: { file: 'index.astro', lang: 'Astro' },
  angular: { file: 'app.component.ts', lang: 'Angular' },
  elements: { file: 'index.html', lang: 'HTML' },
  svg: { file: 'heart.svg', lang: 'SVG' },
  font: { file: 'index.html', lang: 'HTML' },
};

export function Hero({
  packageManager,
  onSelectPackageManager,
  selectedFramework,
  onSelectFramework,
  onCopy,
}: HeroProps) {
  const [isNucleoHovered, setIsNucleoHovered] = useState(false);
  const nucleoHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNucleoMouseEnter = () => {
    if (nucleoHoverTimeoutRef.current) {
      clearTimeout(nucleoHoverTimeoutRef.current);
      nucleoHoverTimeoutRef.current = null;
    }
    setIsNucleoHovered(true);
  };

  const handleNucleoMouseLeave = () => {
    nucleoHoverTimeoutRef.current = setTimeout(() => {
      setIsNucleoHovered(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (nucleoHoverTimeoutRef.current) {
        clearTimeout(nucleoHoverTimeoutRef.current);
      }
    };
  }, []);

  const activePm = PACKAGE_MANAGERS.find((p) => p.id === packageManager) || PACKAGE_MANAGERS[0];
  const activeFramework = FRAMEWORKS.find((f) => f.id === selectedFramework) || FRAMEWORKS[0];
  const currentInstallCmd = `${activePm.id === 'npm' ? 'npm i' : `${activePm.id} add`} ${activeFramework.pkgPath}`;

  return (
    <div className="border-x border-b border-dashed border-zinc-300 bg-white/50 px-4 py-12 sm:px-12 sm:py-20 lg:px-20">
      <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
        3,424 duo-fill icons from{' '}
        <span
          className="relative inline-block"
          onMouseEnter={handleNucleoMouseEnter}
          onMouseLeave={handleNucleoMouseLeave}
        >
          <a
            href="https://nucleoapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 underline decoration-dashed underline-offset-4 hover:text-black"
          >
            Nucleo
          </a>

          <AnimatePresence>
            {isNucleoHovered && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="absolute left-1/2 top-full z-50 mt-3 w-84 max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-2xl shadow-zinc-950/20 ring-1 ring-zinc-950/5"
                onMouseEnter={handleNucleoMouseEnter}
                onMouseLeave={handleNucleoMouseLeave}
              >
                <div className="flex items-center justify-between border-b border-zinc-200/80 bg-zinc-100/90 px-3.5 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-rose-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="rounded-md bg-white px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-600 shadow-xs border border-zinc-200">
                    nucleoapp.com
                  </span>
                  <div className="w-11" />
                </div>

                <div className="relative overflow-hidden bg-zinc-950">
                  <img
                    src="https://nucleoapp.com/assets/img/open-graph-icons.png"
                    alt="Nucleo App Open Graph"
                    className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3.5 flex items-center gap-2">
                    <img
                      src="https://nucleoapp.com/assets/img/favicons/favicon-32x32.png"
                      alt="Nucleo Logo"
                      className="size-7 rounded-md bg-white p-0.5 shadow-sm"
                    />
                    <span className="text-xs font-bold text-white drop-shadow-sm">
                      Nucleo
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs leading-relaxed text-zinc-600">
                    A library of 30,000+ icons and an icon manager app for Mac and Windows. Organize, customize, and export icons easily.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                      30,000+ Icons
                    </span>
                    <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                      Mac & Windows
                    </span>
                    <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
                      SVG & React
                    </span>
                  </div>

                  <div className="mt-3.5 flex flex-col gap-1.5 border-t border-zinc-100 pt-3">
                    <a
                      href="https://nucleoapp.com/pricing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-zinc-900 py-2 px-3 text-xs font-semibold text-white shadow-xs hover:bg-black transition-colors"
                    >
                      <span>Buy Official License</span>
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href="https://nucleoapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                    >
                      <span>Visit nucleoapp.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </span>
        {', ready to use across 10 modern frameworks and web formats!'}
      </h2>

      <p className="mx-auto mt-3.5 max-w-2xl text-center text-xs leading-relaxed text-zinc-500 sm:text-sm">
        Please consider{' '}
        <a
          href="https://nucleoapp.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-zinc-900 underline decoration-dashed underline-offset-4 hover:text-black transition-colors"
        >
          purchasing an official license from Nucleo
        </a>{' '}
        for commercial use and to support the original creators.
      </p>

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:gap-10 lg:gap-14">
        <div className="flex flex-1 min-w-0 flex-col gap-3.5">
          <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xs">
            <div className="flex items-center justify-between border-b border-zinc-200/80 bg-zinc-100/75 px-3.5 py-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[11px] font-medium text-zinc-500">terminal</span>
              </div>

              <div className="flex items-center gap-0.5 rounded-lg bg-zinc-200/70 p-0.5">
                {PACKAGE_MANAGERS.map((pm) => {
                  const active = packageManager === pm.id;
                  const Icon = pm.Icon;
                  return (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => onSelectPackageManager(pm.id)}
                      className={`flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold transition-all ${
                        active
                          ? 'bg-white text-zinc-950 shadow-xs ring-1 ring-zinc-900/5'
                          : 'text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-950'
                      }`}
                    >
                      <Icon size={13} className="shrink-0" />
                      <span>{pm.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 bg-zinc-50/60 px-4 py-3">
              <div className="flex min-w-0 items-center gap-2.5 overflow-x-auto font-mono text-xs sm:text-[13px] text-zinc-800">
                <span className="select-none font-bold text-zinc-400">$</span>
                <code className="whitespace-nowrap">{activePm.render(activeFramework.pkgPath)}</code>
              </div>

              <button
                type="button"
                onClick={() =>
                  onCopy(
                    currentInstallCmd,
                    `${activePm.name} install command copied`,
                    currentInstallCmd
                  )
                }
                title={`Copy: ${currentInstallCmd}`}
                aria-label="Copy install command"
                className="flex size-6 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 shadow-xs hover:bg-gray-100 hover:text-zinc-900"
              >
                <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-1 min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xs">
            <div className="grid grid-cols-5 gap-1 border-b border-zinc-200/80 bg-zinc-100/75 p-1.5">
              {FRAMEWORKS.map((fw) => {
                const active = fw.id === selectedFramework;
                const FwIcon = fw.IconComponent;
                return (
                  <button
                    key={fw.id}
                    type="button"
                    onClick={() => onSelectFramework(fw.id)}
                    className={`flex items-center justify-center gap-1.5 rounded-lg px-1 py-1.5 text-xs font-semibold transition-all ${
                      active
                        ? 'bg-white text-zinc-950 shadow-xs ring-1 ring-zinc-900/5'
                        : 'text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-950'
                    }`}
                  >
                    <FwIcon size={14} className="shrink-0" />
                    <span className="truncate">{fw.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between border-b border-zinc-200/60 bg-zinc-50/60 px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-medium text-zinc-700">
                  {FRAMEWORK_FILE_META[selectedFramework].file}
                </span>
                <span className="rounded bg-zinc-200/70 px-1.5 py-0.5 font-mono text-[10px] font-medium text-zinc-500">
                  {FRAMEWORK_FILE_META[selectedFramework].lang}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  onCopy(
                    activeFramework.snippet,
                    `${activeFramework.name} code copied`,
                    `${activeFramework.name} code example ready to paste`
                  )
                }
                title={`Copy ${activeFramework.name} code`}
                aria-label={`Copy ${activeFramework.name} code`}
                className="flex size-6 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 shadow-xs hover:bg-gray-100 hover:text-zinc-900"
              >
                <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>

            <div className="flex-1 min-w-0 overflow-x-auto p-4 font-mono text-[13px] leading-relaxed bg-zinc-50/30">
              <div className="flex">
                <div className="select-none pr-3.5 text-right font-mono text-[13px] text-zinc-400 border-r border-zinc-200/80 flex flex-col shrink-0">
                  {Array.from({ length: activeFramework.lineCount }).map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                {activeFramework.renderCode()}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 min-w-0 flex-col justify-center space-y-3.5 text-sm text-zinc-700 sm:text-base">
          <p className="flex items-center gap-2 text-lg font-bold text-zinc-900 sm:text-xl">
            <Rocket size={20} className="text-zinc-500 shrink-0" />
            Getting Started
          </p>
          <ul className="space-y-2.5 text-sm sm:text-[15px]">
            <li className="flex items-center gap-2.5">
              <Code size={18} className="text-zinc-500 shrink-0" />
              <span>
                <strong>
                  {activeFramework.id === 'elements' || activeFramework.id === 'font'
                    ? 'Package import:'
                    : activeFramework.id === 'svg'
                      ? 'Asset import:'
                      : 'Multi-framework imports:'}
                </strong>{' '}
                <code className="rounded border border-zinc-200 bg-zinc-100/90 px-1.5 py-0.5 font-mono text-xs">
                  {activeFramework.id === 'elements' ? (
                    <>
                      <span className="text-purple-700 font-bold">import</span>
                      <span className="text-emerald-700 font-semibold"> 'defeat-icons-elements'</span>
                    </>
                  ) : activeFramework.id === 'font' ? (
                    <>
                      <span className="text-purple-700 font-bold">import</span>
                      <span className="text-emerald-700 font-semibold"> 'defeat-icons-font/defeat-icons.css'</span>
                    </>
                  ) : activeFramework.id === 'svg' ? (
                    <>
                      <span className="text-purple-700 font-bold">import</span>
                      <span className="text-blue-700 font-bold"> heart</span>
                      <span className="text-purple-700 font-bold"> from</span>
                      <span className="text-emerald-700 font-semibold"> 'defeat-icons-svg/heart.svg'</span>
                    </>
                  ) : activeFramework.id === 'angular' ? (
                    <>
                      <span className="text-purple-700 font-bold">import</span>
                      <span className="text-zinc-600 font-medium"> {'{ '}</span>
                      <span className="text-blue-700 font-bold">DefeatIconHeart</span>
                      <span className="text-zinc-600 font-medium">{' }'} </span>
                      <span className="text-purple-700 font-bold">from</span>
                      <span className="text-emerald-700 font-semibold"> 'defeat-icons-angular'</span>
                    </>
                  ) : (
                    <>
                      <span className="text-purple-700 font-bold">import</span>
                      <span className="text-zinc-600 font-medium"> {'{ '}</span>
                      <span className="text-blue-700 font-bold">Heart</span>
                      <span className="text-zinc-600 font-medium">{' }'} </span>
                      <span className="text-purple-700 font-bold">from</span>
                      <span className="text-emerald-700 font-semibold"> '{activeFramework.pkgPath}'</span>
                    </>
                  )}
                </code>.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Palette size={18} className="text-zinc-500 shrink-0" />
              <span>
                <strong>Natural default colors:</strong> inherits <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-xs">currentColor</code> automatically, customizable via <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-xs">{activeFramework.id === 'react' ? 'className' : 'class'}</code>.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Sparkle size={18} className="text-zinc-500 shrink-0" />
              <span>
                <strong>Clean icon names:</strong> no <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-xs">Icon</code> or <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-xs">FillDuo18</code> affixes (Heart, Bell, User, Star...).
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <BookOpen size={18} className="text-zinc-500 shrink-0" />
              <span>
                <strong>Complete TypeScript support:</strong> full type declarations and IntelliSense across all 3,424 icons.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Box size={18} className="text-zinc-500 shrink-0" />
              <span>
                <strong>100% Tree-shakable & modular:</strong> bundlers automatically drop unused icons with zero runtime overhead.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Bolt size={18} className="text-zinc-500 shrink-0" />
              <span>
                <strong>Clean & lightweight:</strong> completely removed account-check code and proprietary restrictions.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}