import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EASE_OUT, SPRING_PANEL } from '../lib/ease.js';
import { FRAMEWORKS } from '../constants/frameworks.js';
import { loadIcon } from '../lib/icon-loader.js';
import Box from 'defeat-icons-react/Box';
import type { FrameworkId, PresetTheme } from '../types.js';

interface IconModalProps {
  selectedIcon: string | null;
  selectedTheme: PresetTheme;
  selectedFramework: FrameworkId;
  onSelectFramework: (fw: FrameworkId) => void;
  onClose: () => void;
  onCopy: (text: string, title: string, code: string) => void;
}

export function IconModal({
  selectedIcon,
  selectedTheme,
  selectedFramework,
  onSelectFramework,
  onClose,
  onCopy,
}: IconModalProps) {
  const [detailComp, setDetailComp] = useState<React.ComponentType<any> | null>(null);

  const activeFramework =
    FRAMEWORKS.find((fw) => fw.id === selectedFramework) || FRAMEWORKS[0];

  useEffect(() => {
    if (!selectedIcon) {
      setDetailComp(null);
      return;
    }

    let isMounted = true;
    loadIcon(selectedIcon).then((loaded) => {
      if (isMounted) {
        setDetailComp(() => loaded);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [selectedIcon]);

  return (
    <AnimatePresence>
      {selectedIcon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.94, y: 14, filter: 'blur(6px)' }}
            transition={SPRING_PANEL}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200">
                  {detailComp ? (
                    React.createElement(detailComp, {
                      size: 28,
                      className: selectedTheme.colorClass,
                    })
                  ) : (
                    <span className="size-6 animate-pulse rounded-full bg-zinc-200" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">{selectedIcon}</h3>
                  <span className="text-xs text-zinc-500 font-mono">18px Nucleo Duo Fill</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="flex size-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-4">
              <span className="text-xs font-semibold text-zinc-600">Preview across sizes:</span>
              <div className="mt-3 flex items-center justify-around gap-4">
                {[18, 24, 32, 40].map((sz) => (
                  <div key={sz} className="flex flex-col items-center gap-1.5">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-white shadow-xs border border-zinc-200">
                      {detailComp &&
                        React.createElement(detailComp, {
                          size: sz,
                          className: selectedTheme.colorClass,
                        })}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">{sz}px</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-1 rounded-lg bg-zinc-200/70 p-1">
                {FRAMEWORKS.map((fw) => {
                  const active = fw.id === selectedFramework;
                  const FwIcon = fw.IconComponent;
                  return (
                    <button
                      key={fw.id}
                      type="button"
                      onClick={() => onSelectFramework(fw.id)}
                      className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-1 text-xs font-semibold transition-all ${
                        active
                          ? 'bg-white text-zinc-950 shadow-xs ring-1 ring-zinc-900/5'
                          : 'text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-950'
                      }`}
                    >
                      <FwIcon size={14} className="shrink-0" />
                      <span>{fw.name}</span>
                    </button>
                  );
                })}
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-800">
                  <span className="flex items-center gap-1.5">
                    <Box size={14} className="text-zinc-700 shrink-0" />
                    {activeFramework.name} Named Import:
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onCopy(
                        `import { ${selectedIcon} } from '${activeFramework.pkgPath}';`,
                        'Copied named import',
                        `import { ${selectedIcon} } from '${activeFramework.pkgPath}'`
                      )
                    }
                    className="rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:border-zinc-500 hover:text-zinc-950"
                  >
                    Copy
                  </button>
                </div>
                <div className="mt-1.5 rounded-lg border border-zinc-200 bg-zinc-50 p-2.5 font-mono text-xs text-zinc-900">
                  <code>
                    <span className="text-purple-700 font-bold">import</span>
                    <span className="text-zinc-600 font-medium"> {'{ '}</span>
                    <span className="text-blue-700 font-bold">{selectedIcon}</span>
                    <span className="text-zinc-600 font-medium">{' }'} </span>
                    <span className="text-purple-700 font-bold">from</span>
                    <span className="text-emerald-700 font-semibold"> '{activeFramework.pkgPath}'</span>
                    <span className="text-zinc-600 font-medium">;</span>
                  </code>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-zinc-800">
                  <span className="flex items-center gap-1.5">
                    <activeFramework.IconComponent size={14} className="text-zinc-700 shrink-0" />
                    {activeFramework.name} Component Usage:
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const isClass = activeFramework.id !== 'react';
                      const attr = isClass ? 'class' : 'className';
                      const usageCode = selectedTheme.colorClass
                        ? `<${selectedIcon} ${attr}="size-6 ${selectedTheme.colorClass}" />`
                        : `<${selectedIcon} ${attr}="size-6" />`;
                      onCopy(usageCode, `${activeFramework.name} snippet copied`, usageCode);
                    }}
                    className="rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:border-zinc-500 hover:text-zinc-950"
                  >
                    Copy
                  </button>
                </div>
                <div className="mt-1.5 rounded-lg border border-zinc-200 bg-zinc-50 p-2.5 font-mono text-xs text-zinc-900">
                  <code>
                    <span className="text-zinc-600 font-medium">&lt;</span>
                    <span className="text-blue-700 font-bold">{selectedIcon}</span>{' '}
                    <span className="text-amber-700 font-semibold">
                      {activeFramework.id === 'react' ? 'className' : 'class'}
                    </span>
                    <span className="text-zinc-600 font-medium">=</span>
                    <span className="text-emerald-700 font-semibold">
                      {selectedTheme.colorClass ? `"size-6 ${selectedTheme.colorClass}"` : '"size-6"'}
                    </span>
                    <span className="text-zinc-600 font-medium"> /&gt;</span>
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-zinc-900 px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-zinc-800"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
