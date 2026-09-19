import type React from 'react';

export interface CategoryItem {
  id: string;
  dataCategory?: string;
  name: string;
  regex: RegExp | null;
}

export interface PresetTheme {
  id: string;
  name: string;
  colorClass: string;
  hex: string;
}

export interface IconSize {
  label: string;
  val: number;
}

export type PackageManager = 'pnpm' | 'npm' | 'bun';

export interface PackageManagerOption {
  id: PackageManager;
  name: string;
  cmd: string;
  Icon: React.ComponentType<{ size?: number | string; className?: string }>;
  render: (pkgName?: string) => React.ReactNode;
}

export type FrameworkId =
  | 'react'
  | 'vue'
  | 'svelte'
  | 'solid'
  | 'preact'
  | 'astro'
  | 'angular'
  | 'elements'
  | 'svg'
  | 'font';

export interface FrameworkOption {
  id: FrameworkId;
  name: string;
  pkgPath: string;
  IconComponent: React.ComponentType<{ size?: number | string; className?: string }>;
  snippet: string;
  lineCount: number;
  renderCode: () => React.ReactNode;
}
