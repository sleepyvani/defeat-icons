import React from 'react';

interface FooterProps {
  pkgPath: string;
}

export function Footer({ pkgPath }: FooterProps) {
  return (
    <footer className="border-x border-b border-dashed border-zinc-300 bg-white/80 py-8 text-center text-xs text-zinc-500">
      <p>
        Defeat Icons — Packaged by <strong>vanixjnk</strong>.
      </p>
      <p className="mt-1 text-zinc-400">
        Single standard import format:{' '}
        <code className="rounded border border-zinc-200 bg-zinc-100/90 px-1.5 py-0.5 font-mono text-xs">
          <span className="text-purple-700 font-bold">import</span>
          <span className="text-zinc-600 font-medium"> {'{ '}</span>
          <span className="text-blue-700 font-bold">IconName</span>
          <span className="text-zinc-600 font-medium">{' }'} </span>
          <span className="text-purple-700 font-bold">from</span>
          <span className="text-emerald-700 font-semibold"> '{pkgPath}'</span>
        </code>.
      </p>
    </footer>
  );
}
