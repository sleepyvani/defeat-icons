import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const iconsMetaPath = path.join(rootDir, 'src', 'icons-meta.json');
const distDir = path.join(rootDir, 'dist');
const packagesDir = path.join(rootDir, 'packages');

const reactPkgDir = path.join(packagesDir, 'defeat-icons-react');
const vuePkgDir = path.join(packagesDir, 'defeat-icons-vue');
const sveltePkgDir = path.join(packagesDir, 'defeat-icons-svelte');
const solidPkgDir = path.join(packagesDir, 'defeat-icons-solid');

const pkgDirs = [reactPkgDir, vuePkgDir, sveltePkgDir, solidPkgDir];
for (const dir of pkgDirs) {
  fs.mkdirSync(dir, { recursive: true });
}

function toSvgAttrs(attrs) {
  const map = {
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    clipRule: 'clip-rule',
    strokeWidth: 'stroke-width',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset'
  };
  const result = {};
  for (const [key, value] of Object.entries(attrs)) {
    result[map[key] || key] = value;
  }
  return result;
}

const reactPackageJson = {
  name: 'defeat-icons-react',
  version: '1.0.0',
  description: '3,424 18px duo-fill SVG icon components for React',
  type: 'module',
  main: './index.js',
  module: './index.js',
  types: './index.d.ts',
  exports: {
    '.': {
      types: './index.d.ts',
      import: './index.js',
      default: './index.js'
    },
    './*': {
      types: './*.d.ts',
      import: './*.js',
      default: './*.js'
    },
    './package.json': './package.json'
  },
  files: [
    '*.js',
    '*.d.ts',
    'README.md'
  ],
  keywords: [
    'react',
    'react-icons',
    'svg',
    'icons',
    'duo-fill',
    'defeat-icons'
  ],
  author: 'vanixjnk',
  homepage: 'https://nucleoapp.com',
  sideEffects: false,
  peerDependencies: {
    react: '>=16.8.0',
    'react-dom': '>=16.8.0'
  },
  publishConfig: {
    access: 'public'
  }
};

const vuePackageJson = {
  name: 'defeat-icons-vue',
  version: '1.0.0',
  description: '3,424 18px duo-fill SVG icon components for Vue 3',
  type: 'module',
  main: './index.js',
  module: './index.js',
  types: './index.d.ts',
  exports: {
    '.': {
      types: './index.d.ts',
      import: './index.js',
      default: './index.js'
    },
    './*': {
      types: './*.d.ts',
      import: './*.js',
      default: './*.js'
    },
    './package.json': './package.json'
  },
  files: [
    '*.js',
    '*.d.ts',
    'README.md'
  ],
  keywords: [
    'vue',
    'vue-icons',
    'svg',
    'icons',
    'duo-fill',
    'defeat-icons'
  ],
  author: 'vanixjnk',
  homepage: 'https://nucleoapp.com',
  sideEffects: false,
  peerDependencies: {
    vue: '>=3.0.0'
  },
  publishConfig: {
    access: 'public'
  }
};

const sveltePackageJson = {
  name: 'defeat-icons-svelte',
  version: '1.0.0',
  description: '3,424 18px duo-fill SVG icon components for Svelte',
  type: 'module',
  main: './index.js',
  module: './index.js',
  types: './index.d.ts',
  svelte: './index.js',
  exports: {
    '.': {
      types: './index.d.ts',
      svelte: './index.js',
      default: './index.js'
    },
    './*.svelte': {
      types: './*.d.ts',
      svelte: './*.svelte',
      default: './*.svelte'
    },
    './*': {
      types: './*.d.ts',
      svelte: './*.svelte',
      default: './*.svelte'
    },
    './package.json': './package.json'
  },
  files: [
    '*.svelte',
    '*.d.ts',
    'index.js',
    'README.md'
  ],
  keywords: [
    'svelte',
    'svelte-icons',
    'svg',
    'icons',
    'duo-fill',
    'defeat-icons'
  ],
  author: 'vanixjnk',
  homepage: 'https://nucleoapp.com',
  sideEffects: false,
  peerDependencies: {
    svelte: '>=3.0.0'
  },
  publishConfig: {
    access: 'public'
  }
};

const solidPackageJson = {
  name: 'defeat-icons-solid',
  version: '1.0.0',
  description: '3,424 18px duo-fill SVG icon components for SolidJS',
  type: 'module',
  main: './index.js',
  module: './index.js',
  types: './index.d.ts',
  exports: {
    '.': {
      types: './index.d.ts',
      import: './index.js',
      default: './index.js'
    },
    './*': {
      types: './*.d.ts',
      import: './*.js',
      default: './*.js'
    },
    './package.json': './package.json'
  },
  files: [
    '*.js',
    '*.d.ts',
    'README.md'
  ],
  keywords: [
    'solid',
    'solid-icons',
    'solidjs',
    'svg',
    'icons',
    'duo-fill',
    'defeat-icons'
  ],
  author: 'vanixjnk',
  homepage: 'https://nucleoapp.com',
  sideEffects: false,
  peerDependencies: {
    'solid-js': '>=1.0.0'
  },
  publishConfig: {
    access: 'public'
  }
};

fs.writeFileSync(path.join(reactPkgDir, 'package.json'), JSON.stringify(reactPackageJson, null, 2) + '\n');
fs.writeFileSync(path.join(vuePkgDir, 'package.json'), JSON.stringify(vuePackageJson, null, 2) + '\n');
fs.writeFileSync(path.join(sveltePkgDir, 'package.json'), JSON.stringify(sveltePackageJson, null, 2) + '\n');
fs.writeFileSync(path.join(solidPkgDir, 'package.json'), JSON.stringify(solidPackageJson, null, 2) + '\n');

const reactReadme = `# defeat-icons-react

3,424 18px duo-fill SVG icon components for React with TypeScript support and tree-shaking.

## Installation

\`\`\`bash
npm i defeat-icons-react
# or
pnpm add defeat-icons-react
# or
bun add defeat-icons-react
\`\`\`

## Usage

\`\`\`jsx
import { Heart, Accessibility } from 'defeat-icons-react';

function App() {
  return (
    <div className="flex gap-4">
      <Heart className="size-6" />
      <Accessibility className="size-6" />
    </div>
  );
}
\`\`\`

### Direct Subpath Import

\`\`\`jsx
import Heart from 'defeat-icons-react/Heart';

<Heart className="size-6" />
\`\`\`
`;

const vueReadme = `# defeat-icons-vue

3,424 18px duo-fill SVG icon components for Vue 3 with TypeScript support and tree-shaking.

## Installation

\`\`\`bash
npm i defeat-icons-vue
# or
pnpm add defeat-icons-vue
# or
bun add defeat-icons-vue
\`\`\`

## Usage

\`\`\`vue
<script setup>
import { Heart, Accessibility } from 'defeat-icons-vue';
</script>

<template>
  <div class="flex gap-4">
    <Heart class="size-6" />
    <Accessibility class="size-6" />
  </div>
</template>
\`\`\`

### Direct Subpath Import

\`\`\`vue
<script setup>
import Heart from 'defeat-icons-vue/Heart';
</script>

<template>
  <Heart class="size-6" />
</template>
\`\`\`
`;

const svelteReadme = `# defeat-icons-svelte

3,424 18px duo-fill SVG icon components for Svelte with TypeScript support and tree-shaking.

## Installation

\`\`\`bash
npm i defeat-icons-svelte
# or
pnpm add defeat-icons-svelte
# or
bun add defeat-icons-svelte
\`\`\`

## Usage

\`\`\`svelte
<script>
  import { Heart, Accessibility } from 'defeat-icons-svelte';
</script>

<div class="flex gap-4">
  <Heart class="size-6" />
  <Accessibility class="size-6" />
</div>
\`\`\`

### Direct Subpath Import

\`\`\`svelte
<script>
  import Heart from 'defeat-icons-svelte/Heart.svelte';
</script>

<Heart class="size-6" />
\`\`\`
`;

const solidReadme = `# defeat-icons-solid

3,424 18px duo-fill SVG icon components for SolidJS with TypeScript support and tree-shaking.

## Installation

\`\`\`bash
npm i defeat-icons-solid
# or
pnpm add defeat-icons-solid
# or
bun add defeat-icons-solid
\`\`\`

## Usage

\`\`\`jsx
import { Heart, Accessibility } from 'defeat-icons-solid';

function App() {
  return (
    <div class="flex gap-4">
      <Heart class="size-6" />
      <Accessibility class="size-6" />
    </div>
  );
}
\`\`\`

### Direct Subpath Import

\`\`\`jsx
import Heart from 'defeat-icons-solid/Heart';

<Heart class="size-6" />
\`\`\`
`;

fs.writeFileSync(path.join(reactPkgDir, 'README.md'), reactReadme);
fs.writeFileSync(path.join(vuePkgDir, 'README.md'), vueReadme);
fs.writeFileSync(path.join(sveltePkgDir, 'README.md'), svelteReadme);
fs.writeFileSync(path.join(solidPkgDir, 'README.md'), solidReadme);

const reactIconBaseJs = `import React from 'react';

export const Icon = ({ size = 18, width, height, title, iconNode = [], children, ...props }) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: width || size,
      height: height || size,
      viewBox: '0 0 18 18',
      ...props
    },
    title ? React.createElement('title', null, title) : null,
    iconNode.map(([tag, attrs], index) => React.createElement(tag, { key: index, ...attrs })),
    children
  );
};
export default Icon;
`;

const reactIconBaseDts = `import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  title?: string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
`;

const vueIconBaseJs = `import { h } from 'vue';

export const Icon = (props, { slots, attrs }) => {
  const size = props.size || attrs.size || 18;
  const width = props.width || attrs.width || size;
  const height = props.height || attrs.height || size;
  const { size: _s, width: _w, height: _h, ...restAttrs } = attrs;
  const children = [
    ...(props.iconNode || []).map(([tag, nodeAttrs]) => h(tag, nodeAttrs)),
    ...(slots.default ? slots.default() : [])
  ];
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width,
      height,
      viewBox: '0 0 18 18',
      ...restAttrs
    },
    children
  );
};
Icon.props = ['size', 'width', 'height', 'iconNode'];
export default Icon;
`;

const vueIconBaseDts = `import { DefineComponent, SVGAttributes } from 'vue';

export interface IconProps extends SVGAttributes {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export declare const Icon: DefineComponent<IconProps>;
export default Icon;
`;

const svelteIconBaseSvelte = `<script>
  export let size = 18;
  export let width = undefined;
  export let height = undefined;
  export let iconNode = [];
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={width || size}
  height={height || size}
  viewBox="0 0 18 18"
  {...$$restProps}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
  <slot />
</svg>
`;

const svelteIconBaseDts = `import { SvelteComponent } from 'svelte';

export interface IconProps extends svelteHTML.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export default class Icon extends SvelteComponent<IconProps> {}
export { Icon };
`;

const solidIconBaseJs = `import { spread, mergeProps, insert, createComponent, Dynamic, template } from 'solid-js/web';
import { splitProps, For } from 'solid-js';

const _tmpl$ = template('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">');

export const Icon = (props) => {
  const [local, rest] = splitProps(props, ['size', 'width', 'height', 'iconNode', 'children']);
  return (() => {
    const el = _tmpl$();
    spread(el, mergeProps({
      width: () => local.width || local.size || 18,
      height: () => local.height || local.size || 18
    }, rest), true, true);
    insert(el, createComponent(For, {
      get each() { return local.iconNode || []; },
      children: ([tag, attrs]) => createComponent(Dynamic, mergeProps({ component: tag }, attrs))
    }));
    if (local.children) {
      insert(el, () => local.children, null);
    }
    return el;
  })();
};
export default Icon;
`;

const solidIconBaseDts = `import { Component, JSX } from 'solid-js';

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export declare const Icon: Component<IconProps>;
export default Icon;
`;

fs.writeFileSync(path.join(reactPkgDir, 'Icon.js'), reactIconBaseJs);
fs.writeFileSync(path.join(reactPkgDir, 'Icon.d.ts'), reactIconBaseDts);

fs.writeFileSync(path.join(vuePkgDir, 'Icon.js'), vueIconBaseJs);
fs.writeFileSync(path.join(vuePkgDir, 'Icon.d.ts'), vueIconBaseDts);

fs.writeFileSync(path.join(sveltePkgDir, 'Icon.svelte'), svelteIconBaseSvelte);
fs.writeFileSync(path.join(sveltePkgDir, 'Icon.d.ts'), svelteIconBaseDts);

fs.writeFileSync(path.join(solidPkgDir, 'Icon.js'), solidIconBaseJs);
fs.writeFileSync(path.join(solidPkgDir, 'Icon.d.ts'), solidIconBaseDts);

async function run() {
  const iconNames = JSON.parse(fs.readFileSync(iconsMetaPath, 'utf8'));
  console.log('Generating 4 packages for ' + iconNames.length + ' icons...');

  const reactIndexLines = ["export { Icon } from './Icon.js';"];
  const reactIndexDtsLines = ["export type { IconProps } from './Icon.js';", "export { Icon } from './Icon.js';"];

  const vueIndexLines = ["export { Icon } from './Icon.js';"];
  const vueIndexDtsLines = ["export type { IconProps } from './Icon.js';", "export { Icon } from './Icon.js';"];

  const svelteIndexLines = [];
  const svelteIndexDtsLines = ["export type { IconProps } from './Icon.d.ts';", "export { default as Icon } from './Icon.svelte';"];

  const solidIndexLines = ["export { Icon } from './Icon.js';"];
  const solidIndexDtsLines = ["export type { IconProps } from './Icon.js';", "export { Icon } from './Icon.js';"];

  for (const name of iconNames) {
    const componentPath = path.join(distDir, 'components', name + '.js');
    const mod = await import(componentPath);
    const compFn = mod[name] || mod.default;
    const tree = compFn({});
    const rawChildren = Array.isArray(tree.props.children) ? tree.props.children : [tree.props.children];

    const reactNodes = [];
    const standardNodes = [];

    for (const child of rawChildren) {
      if (!child || !child.type) continue;
      const tag = child.type;
      const attrs = { ...child.props };
      delete attrs.children;
      delete attrs.key;
      reactNodes.push([tag, attrs]);
      standardNodes.push([tag, toSvgAttrs(attrs)]);
    }

    const reactNodeStr = JSON.stringify(reactNodes);
    const standardNodeStr = JSON.stringify(standardNodes);

    fs.writeFileSync(
      path.join(reactPkgDir, name + '.js'),
      "import React from 'react';\nimport { Icon } from './Icon.js';\n\nconst iconNode = " + reactNodeStr + ";\n\nexport const " + name + " = (props) => React.createElement(Icon, { iconNode, ...props });\nexport default " + name + ";\n"
    );
    fs.writeFileSync(
      path.join(reactPkgDir, name + '.d.ts'),
      "import React from 'react';\nimport { IconProps } from './Icon.js';\n\nexport declare const " + name + ": React.FC<IconProps>;\nexport default " + name + ";\n"
    );
    reactIndexLines.push("export { " + name + " } from './" + name + ".js';");
    reactIndexDtsLines.push("export { " + name + " } from './" + name + ".js';");

    fs.writeFileSync(
      path.join(vuePkgDir, name + '.js'),
      "import { h } from 'vue';\nimport Icon from './Icon.js';\n\nconst iconNode = " + standardNodeStr + ";\n\nexport const " + name + " = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);\n" + name + ".props = ['size', 'width', 'height'];\nexport default " + name + ";\n"
    );
    fs.writeFileSync(
      path.join(vuePkgDir, name + '.d.ts'),
      "import { DefineComponent } from 'vue';\nimport { IconProps } from './Icon.js';\n\nexport declare const " + name + ": DefineComponent<IconProps>;\nexport default " + name + ";\n"
    );
    vueIndexLines.push("export { " + name + " } from './" + name + ".js';");
    vueIndexDtsLines.push("export { " + name + " } from './" + name + ".js';");

    fs.writeFileSync(
      path.join(sveltePkgDir, name + '.svelte'),
      "<script>\n  import Icon from './Icon.svelte';\n  const iconNode = " + standardNodeStr + ";\n</script>\n\n<Icon {...$$props} {iconNode}>\n  <slot />\n</Icon>\n"
    );
    fs.writeFileSync(
      path.join(sveltePkgDir, name + '.d.ts'),
      "import { SvelteComponent } from 'svelte';\nimport { IconProps } from './Icon.d.ts';\n\nexport default class " + name + " extends SvelteComponent<IconProps> {}\nexport { " + name + " };\n"
    );
    svelteIndexLines.push("export { default as " + name + " } from './" + name + ".svelte';");
    svelteIndexDtsLines.push("export { default as " + name + " } from './" + name + ".svelte';");

    fs.writeFileSync(
      path.join(solidPkgDir, name + '.js'),
      "import { createComponent, mergeProps } from 'solid-js/web';\nimport Icon from './Icon.js';\n\nconst iconNode = " + standardNodeStr + ";\n\nexport const " + name + " = (props) => createComponent(Icon, mergeProps(props, { iconNode }));\nexport default " + name + ";\n"
    );
    fs.writeFileSync(
      path.join(solidPkgDir, name + '.d.ts'),
      "import { Component } from 'solid-js';\nimport { IconProps } from './Icon.js';\n\nexport declare const " + name + ": Component<IconProps>;\nexport default " + name + ";\n"
    );
    solidIndexLines.push("export { " + name + " } from './" + name + ".js';");
    solidIndexDtsLines.push("export { " + name + " } from './" + name + ".js';");
  }

  fs.writeFileSync(path.join(reactPkgDir, 'index.js'), reactIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(reactPkgDir, 'index.d.ts'), reactIndexDtsLines.join('\n') + '\n');

  fs.writeFileSync(path.join(vuePkgDir, 'index.js'), vueIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(vuePkgDir, 'index.d.ts'), vueIndexDtsLines.join('\n') + '\n');

  fs.writeFileSync(path.join(sveltePkgDir, 'index.js'), svelteIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(sveltePkgDir, 'index.d.ts'), svelteIndexDtsLines.join('\n') + '\n');

  fs.writeFileSync(path.join(solidPkgDir, 'index.js'), solidIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(solidPkgDir, 'index.d.ts'), solidIndexDtsLines.join('\n') + '\n');

  console.log('Successfully generated 4 packages in packages/ with ' + (iconNames.length * 4) + ' components.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
