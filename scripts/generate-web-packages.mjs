import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const iconsMetaPath = path.join(rootDir, 'src', 'icons-meta.json');
const distDir = path.join(rootDir, 'dist');
const packagesDir = path.join(rootDir, 'packages');

const svgPkgDir = path.join(packagesDir, 'defeat-icons-svg');
const preactPkgDir = path.join(packagesDir, 'defeat-icons-preact');
const astroPkgDir = path.join(packagesDir, 'defeat-icons-astro');
const elementsPkgDir = path.join(packagesDir, 'defeat-icons-elements');
const angularPkgDir = path.join(packagesDir, 'defeat-icons-angular');

const svgFilesDir = path.join(svgPkgDir, 'svg');
const preactIconsDir = path.join(preactPkgDir, 'icons');
const astroIconsDir = path.join(astroPkgDir, 'icons');
const elementsIconsDir = path.join(elementsPkgDir, 'icons');
const angularIconsDir = path.join(angularPkgDir, 'icons');

const allDirs = [
  svgPkgDir,
  svgFilesDir,
  preactPkgDir,
  preactIconsDir,
  astroPkgDir,
  astroIconsDir,
  elementsPkgDir,
  elementsIconsDir,
  angularPkgDir,
  angularIconsDir
];

for (const dir of allDirs) {
  fs.mkdirSync(dir, { recursive: true });
}

const pkgVersion = '1.0.0';

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
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

function renderAttrString(attrs) {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${String(v).replace(/"/g, '&quot;')}"`)
    .join(' ');
}

const svgPackageJson = {
  name: 'defeat-icons-svg',
  version: pkgVersion,
  description: '3,424 optimized 18px duo-fill SVG icon files',
  type: 'module',
  main: './index.js',
  types: './index.d.ts',
  exports: {
    '.': {
      types: './index.d.ts',
      import: './index.js',
      default: './index.js'
    },
    './svg/*': './svg/*.svg',
    './*': './svg/*.svg',
    './package.json': './package.json'
  },
  files: ['svg', 'index.js', 'index.d.ts', 'README.md'],
  keywords: ['svg', 'icons', 'duo-fill', 'defeat-icons'],
  author: 'vanixjnk',
  homepage: 'https://defeat-icons.vercel.app/',
  repository: {
    type: 'git',
    url: 'git+https://github.com/sleepyvani/defeat-icons.git'
  },
  bugs: {
    url: 'https://github.com/sleepyvani/defeat-icons/issues'
  },
  sideEffects: false,
  publishConfig: {
    access: 'public'
  }
};

const preactPackageJson = {
  name: 'defeat-icons-preact',
  version: pkgVersion,
  description: '3,424 18px duo-fill SVG icon components for Preact',
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
    './icons/*': {
      types: './icons/*.d.ts',
      import: './icons/*.js',
      default: './icons/*.js'
    },
    './*': {
      types: './icons/*.d.ts',
      import: './icons/*.js',
      default: './icons/*.js'
    },
    './package.json': './package.json'
  },
  files: ['index.js', 'index.d.ts', 'Icon.js', 'Icon.d.ts', 'icons', 'README.md'],
  keywords: ['preact', 'preact-icons', 'svg', 'icons', 'duo-fill', 'defeat-icons'],
  author: 'vanixjnk',
  homepage: 'https://defeat-icons.vercel.app/',
  repository: {
    type: 'git',
    url: 'git+https://github.com/sleepyvani/defeat-icons.git'
  },
  bugs: {
    url: 'https://github.com/sleepyvani/defeat-icons/issues'
  },
  sideEffects: false,
  peerDependencies: {
    preact: '>=10.0.0'
  },
  publishConfig: {
    access: 'public'
  }
};

const astroPackageJson = {
  name: 'defeat-icons-astro',
  version: pkgVersion,
  description: '3,424 18px duo-fill SVG icon components for Astro',
  type: 'module',
  main: './index.js',
  types: './index.d.ts',
  exports: {
    '.': {
      types: './index.d.ts',
      import: './index.js',
      default: './index.js'
    },
    './icons/*': './icons/*.astro',
    './*': './icons/*.astro',
    './package.json': './package.json'
  },
  files: ['index.js', 'index.d.ts', 'icons', 'README.md'],
  keywords: ['astro', 'astro-components', 'svg', 'icons', 'duo-fill', 'defeat-icons'],
  author: 'vanixjnk',
  homepage: 'https://defeat-icons.vercel.app/',
  repository: {
    type: 'git',
    url: 'git+https://github.com/sleepyvani/defeat-icons.git'
  },
  bugs: {
    url: 'https://github.com/sleepyvani/defeat-icons/issues'
  },
  sideEffects: false,
  publishConfig: {
    access: 'public'
  }
};

const elementsPackageJson = {
  name: 'defeat-icons-elements',
  version: pkgVersion,
  description: '3,424 18px duo-fill SVG icon Custom Elements for universal web use',
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
    './defeat-icon': {
      types: './defeat-icon.d.ts',
      import: './defeat-icon.js',
      default: './defeat-icon.js'
    },
    './defeat-icon.js': {
      types: './defeat-icon.d.ts',
      import: './defeat-icon.js',
      default: './defeat-icon.js'
    },
    './icons/*': {
      types: './icons/*.d.ts',
      import: './icons/*.js',
      default: './icons/*.js'
    },
    './*': {
      types: './icons/*.d.ts',
      import: './icons/*.js',
      default: './icons/*.js'
    },
    './package.json': './package.json'
  },
  files: ['defeat-icon.js', 'defeat-icon.d.ts', 'index.js', 'index.d.ts', 'icons', 'README.md'],
  keywords: ['web-components', 'custom-elements', 'svg', 'icons', 'duo-fill', 'defeat-icons'],
  author: 'vanixjnk',
  homepage: 'https://defeat-icons.vercel.app/',
  repository: {
    type: 'git',
    url: 'git+https://github.com/sleepyvani/defeat-icons.git'
  },
  bugs: {
    url: 'https://github.com/sleepyvani/defeat-icons/issues'
  },
  sideEffects: false,
  publishConfig: {
    access: 'public'
  }
};

const angularPackageJson = {
  name: 'defeat-icons-angular',
  version: pkgVersion,
  description: '3,424 18px duo-fill SVG icon components and definitions for Angular',
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
    './icons/*': {
      types: './icons/*.d.ts',
      import: './icons/*.js',
      default: './icons/*.js'
    },
    './*': {
      types: './icons/*.d.ts',
      import: './icons/*.js',
      default: './icons/*.js'
    },
    './package.json': './package.json'
  },
  files: ['index.js', 'index.d.ts', 'icons', 'README.md'],
  keywords: ['angular', 'angular-icons', 'svg', 'icons', 'duo-fill', 'defeat-icons'],
  author: 'vanixjnk',
  homepage: 'https://defeat-icons.vercel.app/',
  repository: {
    type: 'git',
    url: 'git+https://github.com/sleepyvani/defeat-icons.git'
  },
  bugs: {
    url: 'https://github.com/sleepyvani/defeat-icons/issues'
  },
  sideEffects: false,
  peerDependencies: {
    '@angular/core': '>=15.0.0'
  },
  publishConfig: {
    access: 'public'
  }
};

fs.writeFileSync(path.join(svgPkgDir, 'package.json'), JSON.stringify(svgPackageJson, null, 2) + '\n');
fs.writeFileSync(path.join(preactPkgDir, 'package.json'), JSON.stringify(preactPackageJson, null, 2) + '\n');
fs.writeFileSync(path.join(astroPkgDir, 'package.json'), JSON.stringify(astroPackageJson, null, 2) + '\n');
fs.writeFileSync(path.join(elementsPkgDir, 'package.json'), JSON.stringify(elementsPackageJson, null, 2) + '\n');
fs.writeFileSync(path.join(angularPkgDir, 'package.json'), JSON.stringify(angularPackageJson, null, 2) + '\n');

const svgReadme = `# defeat-icons-svg

3,424 optimized 18px duo-fill SVG icon files.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

\`\`\`bash
npm i defeat-icons-svg
# or
pnpm add defeat-icons-svg
# or
bun add defeat-icons-svg
\`\`\`

## Usage

### Direct SVG Path Import
\`\`\`javascript
import heartSvg from 'defeat-icons-svg/svg/Heart.svg';
import heartDirect from 'defeat-icons-svg/Heart.svg';
\`\`\`

### Raw SVG String Dictionary
\`\`\`javascript
import { icons, Heart } from 'defeat-icons-svg';

console.log(Heart);
\`\`\`
`;

const preactReadme = `# defeat-icons-preact

3,424 18px duo-fill SVG icon components for Preact.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

\`\`\`bash
npm i defeat-icons-preact
# or
pnpm add defeat-icons-preact
# or
bun add defeat-icons-preact
\`\`\`

## Usage

\`\`\`jsx
import { Heart, Accessibility } from 'defeat-icons-preact';

function App() {
  return (
    <div class="flex gap-4">
      <Heart size={24} />
      <Accessibility size={24} />
    </div>
  );
}
\`\`\`

### Direct Subpath Import

\`\`\`jsx
import Heart from 'defeat-icons-preact/Heart';

<Heart size={24} />
\`\`\`
`;

const astroReadme = `# defeat-icons-astro

3,424 18px duo-fill SVG icon components for Astro with zero client JavaScript runtime.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

\`\`\`bash
npm i defeat-icons-astro
# or
pnpm add defeat-icons-astro
# or
bun add defeat-icons-astro
\`\`\`

## Usage

\`\`\`astro
---
import { Heart, Accessibility } from 'defeat-icons-astro';
---

<div class="flex gap-4">
  <Heart size={24} color="#e11d48" />
  <Accessibility size={24} />
</div>
\`\`\`

### Direct Subpath Import

\`\`\`astro
---
import Heart from 'defeat-icons-astro/Heart.astro';
---

<Heart size={24} />
\`\`\`
`;

const elementsReadme = `# defeat-icons-elements

3,424 18px duo-fill SVG icon Custom Elements for universal web use across vanilla HTML, CMS, WordPress, and any JavaScript framework.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

\`\`\`bash
npm i defeat-icons-elements
# or
pnpm add defeat-icons-elements
# or
bun add defeat-icons-elements
\`\`\`

## Usage

### Via CDN (Zero Build Step)

\`\`\`html
<script type="module" src="https://unpkg.com/defeat-icons-elements/defeat-icon.js"></script>

<defeat-icon name="Heart" size="24" color="#e11d48"></defeat-icon>
\`\`\`

### Via NPM Bundler

\`\`\`javascript
import 'defeat-icons-elements';
\`\`\`

\`\`\`html
<defeat-icon name="Heart" size="24"></defeat-icon>
\`\`\`
`;

const angularReadme = `# defeat-icons-angular

3,424 18px duo-fill SVG icon components and definitions for Angular 15+.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

\`\`\`bash
npm i defeat-icons-angular
# or
pnpm add defeat-icons-angular
# or
bun add defeat-icons-angular
\`\`\`

## Usage

\`\`\`typescript
import { Component } from '@angular/core';
import { DefeatIconHeart } from 'defeat-icons-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefeatIconHeart],
  template: '<df-icon-heart [size]="24" color="#e11d48"></df-icon-heart>'
})
export class AppComponent {}
\`\`\`
`;

fs.writeFileSync(path.join(svgPkgDir, 'README.md'), svgReadme);
fs.writeFileSync(path.join(preactPkgDir, 'README.md'), preactReadme);
fs.writeFileSync(path.join(astroPkgDir, 'README.md'), astroReadme);
fs.writeFileSync(path.join(elementsPkgDir, 'README.md'), elementsReadme);
fs.writeFileSync(path.join(angularPkgDir, 'README.md'), angularReadme);

const preactIconBaseJs = `import { h } from 'preact';

export const Icon = (props) => {
  const {
    size = 18,
    width = size,
    height = size,
    iconNode = [],
    children,
    ...rest
  } = props;

  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width,
      height,
      viewBox: '0 0 18 18',
      ...rest
    },
    iconNode.map(([tag, attrs]) => h(tag, attrs)),
    children
  );
};
export default Icon;
`;

const preactIconBaseDts = `import { JSX, FunctionComponent } from 'preact';

export interface IconProps extends JSX.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export declare const Icon: FunctionComponent<IconProps>;
export default Icon;
`;

fs.writeFileSync(path.join(preactPkgDir, 'Icon.js'), preactIconBaseJs);
fs.writeFileSync(path.join(preactPkgDir, 'Icon.d.ts'), preactIconBaseDts);

const elementsBaseJs = `export const iconRegistry = new Map();

export function registerIcon(name, innerSvg) {
  iconRegistry.set(name.toLowerCase(), innerSvg);
  iconRegistry.set(name, innerSvg);
}

const BaseElement = typeof HTMLElement !== 'undefined' ? HTMLElement : class {};

export class DefeatIcon extends BaseElement {
  static get observedAttributes() {
    return ['name', 'size', 'width', 'height', 'color'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');
    if (!name) {
      this.innerHTML = '';
      return;
    }
    const inner = iconRegistry.get(name) || iconRegistry.get(name.toLowerCase());
    if (!inner) {
      return;
    }
    const size = this.getAttribute('size') || '18';
    const width = this.getAttribute('width') || size;
    const height = this.getAttribute('height') || size;
    const color = this.getAttribute('color') || 'currentColor';
    const className = this.getAttribute('class') || '';

    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 18 18" fill="' + color + '" class="' + className + '" style="display:inline-block;vertical-align:middle;">' + inner + '</svg>';
  }
}

if (typeof window !== 'undefined' && window.customElements && !window.customElements.get('defeat-icon')) {
  window.customElements.define('defeat-icon', DefeatIcon);
}

export default DefeatIcon;
`;

const elementsBaseDts = `export declare const iconRegistry: Map<string, string>;
export declare function registerIcon(name: string, innerSvg: string): void;
export declare class DefeatIcon extends HTMLElement {
  static get observedAttributes(): string[];
  connectedCallback(): void;
  attributeChangedCallback(): void;
  render(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    'defeat-icon': DefeatIcon;
  }
}
export default DefeatIcon;
`;

fs.writeFileSync(path.join(elementsPkgDir, 'defeat-icon.js'), elementsBaseJs);
fs.writeFileSync(path.join(elementsPkgDir, 'defeat-icon.d.ts'), elementsBaseDts);

async function run() {
  const iconNames = JSON.parse(fs.readFileSync(iconsMetaPath, 'utf8'));
  console.log('Generating 5 packages for ' + iconNames.length + ' icons...');

  const svgIndexExports = [];
  const svgIndexDtsLines = ['export declare const icons: Record<string, string>;'];

  const preactIndexLines = ["export { Icon } from './Icon.js';"];
  const preactIndexDtsLines = ["export type { IconProps } from './Icon.js';", "export { Icon } from './Icon.js';"];

  const astroIndexLines = [];
  const astroIndexDtsLines = ["export interface IconProps { size?: number | string; width?: number | string; height?: number | string; color?: string; class?: string; [key: string]: any; }"];

  const elementsIndexLines = ["import { registerIcon } from './defeat-icon.js';", "export { DefeatIcon, registerIcon, iconRegistry } from './defeat-icon.js';"];
  const elementsIndexDtsLines = ["export { DefeatIcon, registerIcon, iconRegistry } from './defeat-icon.d.ts';"];

  const angularIndexLines = [];
  const angularIndexDtsLines = [];

  for (const name of iconNames) {
    const componentPath = path.join(distDir, 'components', name + '.js');
    const mod = await import(componentPath);
    const compFn = mod[name] || mod.default;
    const tree = compFn({});
    const rawChildren = Array.isArray(tree.props.children) ? tree.props.children : [tree.props.children];

    const preactNodes = [];
    const standardNodes = [];
    const innerSvgParts = [];

    for (const child of rawChildren) {
      if (!child || !child.type) continue;
      const tag = child.type;
      const attrs = { ...child.props };
      delete attrs.children;
      delete attrs.key;
      preactNodes.push([tag, attrs]);
      const standardAttrs = toSvgAttrs(attrs);
      standardNodes.push([tag, standardAttrs]);
      innerSvgParts.push('<' + tag + ' ' + renderAttrString(standardAttrs) + ' />');
    }

    const preactNodeStr = JSON.stringify(preactNodes);
    const innerSvgStr = innerSvgParts.join('');
    const fullSvgStr = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">' + innerSvgStr + '</svg>';
    const kebabName = toKebabCase(name);

    fs.writeFileSync(path.join(svgFilesDir, name + '.svg'), fullSvgStr + '\n');
    svgIndexExports.push(name + ': ' + JSON.stringify(fullSvgStr));
    svgIndexDtsLines.push('export declare const ' + name + ': string;');

    fs.writeFileSync(
      path.join(preactIconsDir, name + '.js'),
      "import { h } from 'preact';\nimport { Icon } from '../Icon.js';\n\nconst iconNode = " + preactNodeStr + ";\n\nexport const " + name + " = (props) => h(Icon, { iconNode, ...props });\nexport default " + name + ";\n"
    );
    fs.writeFileSync(
      path.join(preactIconsDir, name + '.d.ts'),
      "import { FunctionComponent } from 'preact';\nimport { IconProps } from '../Icon.js';\n\nexport declare const " + name + ": FunctionComponent<IconProps>;\nexport default " + name + ";\n"
    );
    preactIndexLines.push("export { " + name + " } from './icons/" + name + ".js';");
    preactIndexDtsLines.push("export { " + name + " } from './icons/" + name + ".js';");

    const astroComponentContent = `---
interface Props {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  class?: string;
  [key: string]: any;
}

const {
  size = 18,
  width = size,
  height = size,
  color = "currentColor",
  class: className,
  ...rest
} = Astro.props;
---
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={width}
  height={height}
  viewBox="0 0 18 18"
  fill={color}
  class={className}
  {...rest}
>
  ${innerSvgParts.join('\n  ')}
</svg>
`;
    fs.writeFileSync(path.join(astroIconsDir, name + '.astro'), astroComponentContent);
    fs.writeFileSync(
      path.join(astroIconsDir, name + '.d.ts'),
      "export interface IconProps {\n  size?: number | string;\n  width?: number | string;\n  height?: number | string;\n  color?: string;\n  class?: string;\n  [key: string]: any;\n}\ndeclare const " + name + ": (props: IconProps) => any;\nexport default " + name + ";\nexport { " + name + " };\n"
    );
    astroIndexLines.push("export { default as " + name + " } from './icons/" + name + ".astro';");
    astroIndexDtsLines.push("export { default as " + name + " } from './icons/" + name + ".astro';");

    fs.writeFileSync(
      path.join(elementsIconsDir, name + '.js'),
      "import { registerIcon } from '../defeat-icon.js';\n\nexport const name = " + JSON.stringify(name) + ";\nexport const innerSvg = " + JSON.stringify(innerSvgStr) + ";\nregisterIcon(name, innerSvg);\nexport default innerSvg;\n"
    );
    fs.writeFileSync(
      path.join(elementsIconsDir, name + '.d.ts'),
      "export declare const name: string;\nexport declare const innerSvg: string;\ndeclare const _default: string;\nexport default _default;\n"
    );
    elementsIndexLines.push("registerIcon(" + JSON.stringify(name) + ", " + JSON.stringify(innerSvgStr) + ");");

    const angularComponentContent = `import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export class DefeatIcon${name} {
  size = 18;
  color = 'currentColor';
}

DefeatIcon${name}.decorators = [
  {
    type: Component,
    args: [{
      selector: 'df-icon-${kebabName}',
      standalone: true,
      template: '<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width || size" [attr.height]="height || size" viewBox="0 0 18 18" [attr.fill]="color" [class]="class">${innerSvgStr.replace(/'/g, "\\'")}</svg>',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }
];

DefeatIcon${name}.propDecorators = {
  size: [{ type: Input }],
  width: [{ type: Input }],
  height: [{ type: Input }],
  color: [{ type: Input }],
  class: [{ type: Input }]
};

export const ${name} = DefeatIcon${name};
export const data${name} = ${JSON.stringify(fullSvgStr)};
export default DefeatIcon${name};
`;

    fs.writeFileSync(path.join(angularIconsDir, name + '.js'), angularComponentContent);
    fs.writeFileSync(
      path.join(angularIconsDir, name + '.d.ts'),
      "export declare class DefeatIcon" + name + " {\n  size: number | string;\n  width?: number | string;\n  height?: number | string;\n  color: string;\n  class: string;\n}\nexport declare const " + name + ": typeof DefeatIcon" + name + ";\nexport declare const data" + name + ": string;\nexport default DefeatIcon" + name + ";\n"
    );
    angularIndexLines.push("export { DefeatIcon" + name + ", " + name + ", data" + name + " } from './icons/" + name + ".js';");
    angularIndexDtsLines.push("export { DefeatIcon" + name + ", " + name + ", data" + name + " } from './icons/" + name + ".js';");
  }

  const svgIndexJs = 'export const icons = {\n  ' + svgIndexExports.join(',\n  ') + '\n};\n\n' +
    iconNames.map((n) => 'export const ' + n + ' = icons.' + n + ';').join('\n') +
    '\n\nexport default icons;\n';
  fs.writeFileSync(path.join(svgPkgDir, 'index.js'), svgIndexJs);
  fs.writeFileSync(path.join(svgPkgDir, 'index.d.ts'), svgIndexDtsLines.join('\n') + '\nexport default icons;\n');

  fs.writeFileSync(path.join(preactPkgDir, 'index.js'), preactIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(preactPkgDir, 'index.d.ts'), preactIndexDtsLines.join('\n') + '\n');

  fs.writeFileSync(path.join(astroPkgDir, 'index.js'), astroIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(astroPkgDir, 'index.d.ts'), astroIndexDtsLines.join('\n') + '\n');

  fs.writeFileSync(path.join(elementsPkgDir, 'index.js'), elementsIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(elementsPkgDir, 'index.d.ts'), elementsIndexDtsLines.join('\n') + '\n');

  fs.writeFileSync(path.join(angularPkgDir, 'index.js'), angularIndexLines.join('\n') + '\n');
  fs.writeFileSync(path.join(angularPkgDir, 'index.d.ts'), angularIndexDtsLines.join('\n') + '\n');

  console.log('Successfully generated 5 packages in packages/: svg, preact, astro, elements, angular.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
