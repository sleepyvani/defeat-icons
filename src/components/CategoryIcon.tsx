import React, { useState, useEffect } from 'react';
import { CATEGORY_ICON_NAMES } from '../constants/categories.js';
import { componentCache, loadIcon } from '../lib/icon-loader.js';

export function CategoryIcon({ id, className = 'size-3.5' }: { id: string; className?: string }) {
  const iconName = CATEGORY_ICON_NAMES[id] || 'Grid';
  const [Comp, setComp] = useState<React.ComponentType<any> | null>(() => componentCache.get(iconName) || null);

  useEffect(() => {
    if (Comp) return;
    if (componentCache.has(iconName)) {
      setComp(() => componentCache.get(iconName)!);
      return;
    }
    loadIcon(iconName).then((loaded) => {
      if (loaded) {
        setComp(() => loaded);
      }
    });
  }, [iconName, Comp]);

  if (!Comp) {
    return <span className={`${className} inline-block`} />;
  }

  return <Comp className={className} size={13} />;
}
