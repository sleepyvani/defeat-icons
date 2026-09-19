import type { PresetTheme, IconSize } from '../types.js';

export const PRESET_THEMES: PresetTheme[] = [
  { id: 'default', name: 'Default', colorClass: '', hex: '#18181b' },
  { id: 'slate', name: 'Slate', colorClass: 'text-slate-600', hex: '#475569' },
  { id: 'zinc', name: 'Zinc Gray', colorClass: 'text-zinc-500', hex: '#71717a' },
  { id: 'blue', name: 'Ocean Blue', colorClass: 'text-blue-600', hex: '#2563eb' },
  { id: 'sky', name: 'Sky Blue', colorClass: 'text-sky-500', hex: '#0ea5e9' },
  { id: 'cyan', name: 'Aqua Cyan', colorClass: 'text-cyan-600', hex: '#0891b2' },
  { id: 'teal', name: 'Deep Teal', colorClass: 'text-teal-600', hex: '#0d9488' },
  { id: 'emerald', name: 'Emerald', colorClass: 'text-emerald-600', hex: '#059669' },
  { id: 'green', name: 'Fresh Green', colorClass: 'text-green-600', hex: '#16a34a' },
  { id: 'lime', name: 'Electric Lime', colorClass: 'text-lime-600', hex: '#65a30d' },
  { id: 'yellow', name: 'Sun Yellow', colorClass: 'text-yellow-500', hex: '#eab308' },
  { id: 'amber', name: 'Warm Amber', colorClass: 'text-amber-600', hex: '#d97706' },
  { id: 'orange', name: 'Vibrant Orange', colorClass: 'text-orange-600', hex: '#ea580c' },
  { id: 'red', name: 'Crimson Red', colorClass: 'text-red-600', hex: '#dc2626' },
  { id: 'rose', name: 'Rose Red', colorClass: 'text-rose-600', hex: '#e11d48' },
  { id: 'pink', name: 'Hot Pink', colorClass: 'text-pink-600', hex: '#db2777' },
  { id: 'fuchsia', name: 'Fuchsia', colorClass: 'text-fuchsia-600', hex: '#c026d3' },
  { id: 'purple', name: 'Royal Purple', colorClass: 'text-purple-600', hex: '#9333ea' },
  { id: 'violet', name: 'Purple Violet', colorClass: 'text-violet-600', hex: '#7c3aed' },
  { id: 'indigo', name: 'Electric Indigo', colorClass: 'text-indigo-600', hex: '#4f46e5' },
];

export const SIZES: IconSize[] = [
  { label: '18px', val: 18 },
  { label: '24px', val: 24 },
  { label: '32px', val: 32 },
  { label: '40px', val: 40 },
];
