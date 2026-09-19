import type React from 'react';
import { CATEGORY_ICON_NAMES } from '../constants/categories.js';

export const iconModules = import.meta.glob<{ default: React.ComponentType<any>; [key: string]: any }>(
  ['../../dist/components/*.js', '!../../dist/components/index.js', '!../../dist/components/Icon.js']
);

export const componentCache = new Map<string, React.ComponentType<any>>();

export async function loadIcon(name: string): Promise<React.ComponentType<any> | null> {
  if (componentCache.has(name)) {
    return componentCache.get(name)!;
  }
  const path = `../../dist/components/${name}.js`;
  if (iconModules[path]) {
    try {
      const mod = await iconModules[path]();
      const loaded = (mod[name] || mod.default) as React.ComponentType<any>;
      if (loaded) {
        componentCache.set(name, loaded);
        return loaded;
      }
    } catch (err) {
      console.error(`Error loading icon ${name}:`, err);
    }
  }
  return null;
}

Object.values(CATEGORY_ICON_NAMES).forEach((name) => {
  const path = `../../dist/components/${name}.js`;
  if (iconModules[path]) {
    iconModules[path]().then((mod) => {
      const loaded = mod.default || (mod as any)[name];
      if (loaded) componentCache.set(name, loaded);
    });
  }
});
