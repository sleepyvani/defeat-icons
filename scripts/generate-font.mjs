import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const packagesDir = path.join(rootDir, 'packages');
const svgDir = path.join(packagesDir, 'defeat-icons-svg', 'svg');
const fontPkgDir = path.join(packagesDir, 'defeat-icons-font');
const fontsOutDir = path.join(fontPkgDir, 'fonts');
const tempSvgDir = path.join(rootDir, 'dist-font-svgs');

fs.mkdirSync(fontPkgDir, { recursive: true });
fs.mkdirSync(fontsOutDir, { recursive: true });
fs.mkdirSync(tempSvgDir, { recursive: true });

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

console.log('Preparing SVG glyphs for font compilation...');
const svgFiles = fs.readdirSync(svgDir).filter((f) => f.endsWith('.svg'));

for (const file of svgFiles) {
  const iconName = file.replace(/\.svg$/, '');
  const kebabName = toKebabCase(iconName);
  const srcPath = path.join(svgDir, file);
  const destPath = path.join(tempSvgDir, kebabName + '.svg');
  fs.copyFileSync(srcPath, destPath);
}

console.log('Compiling web fonts via fantasticon for ' + svgFiles.length + ' icons...');

try {
  execSync(
    `npx --yes fantasticon "${tempSvgDir}" -o "${fontsOutDir}" -n defeat-icons -t woff2 ttf -g css json -p df --font-height 1000 --normalize true`,
    { stdio: 'inherit', cwd: rootDir }
  );
} catch (err) {
  console.error('Error running fantasticon:', err);
  process.exit(1);
} finally {
  fs.rmSync(tempSvgDir, { recursive: true, force: true });
}

let generatedCss = fs.readFileSync(path.join(fontsOutDir, 'defeat-icons.css'), 'utf8');

const updatedCss = `@font-face {
  font-family: "defeat-icons";
  src: url("./fonts/defeat-icons.woff2") format("woff2"),
       url("./fonts/defeat-icons.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.df,
i[class^="df-"],
i[class*=" df-"] {
  font-family: "defeat-icons" !important;
  font-style: normal;
  font-weight: normal !important;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  speak: never;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

` + generatedCss.replace(/@font-face\s*\{[\s\S]*?\}\s*/, '').replace(/i\[class\^="df-"\][\s\S]*?\}\s*/, '');

fs.writeFileSync(path.join(fontPkgDir, 'defeat-icons.css'), updatedCss);

const minifiedCss = updatedCss
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([:;{}])\s*/g, '$1')
  .trim();

fs.writeFileSync(path.join(fontPkgDir, 'defeat-icons.min.css'), minifiedCss);

const fontPackageJson = {
  name: 'defeat-icons-font',
  version: '1.0.0',
  description: '3,424 18px duo-fill Web Icon Font and CSS utilities',
  main: './defeat-icons.css',
  style: './defeat-icons.css',
  exports: {
    '.': './defeat-icons.css',
    './css': './defeat-icons.css',
    './min': './defeat-icons.min.css',
    './fonts/*': './fonts/*',
    './package.json': './package.json'
  },
  files: [
    'fonts',
    'defeat-icons.css',
    'defeat-icons.min.css',
    'README.md'
  ],
  keywords: [
    'icon-font',
    'webfont',
    'woff2',
    'ttf',
    'css',
    'icons',
    'defeat-icons'
  ],
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

fs.writeFileSync(path.join(fontPkgDir, 'package.json'), JSON.stringify(fontPackageJson, null, 2) + '\n');

const fontReadme = `# defeat-icons-font

3,424 18px duo-fill Web Icon Font and CSS utilities.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

\`\`\`bash
npm i defeat-icons-font
# or
pnpm add defeat-icons-font
# or
bun add defeat-icons-font
\`\`\`

## Usage

### Via CDN (Zero Build Step)

\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/defeat-icons-font/defeat-icons.min.css" />

<i class="df df-heart"></i>
<i class="df df-accessibility" style="font-size: 24px; color: #3b82f6;"></i>
\`\`\`

### Via NPM Bundler

\`\`\`javascript
import 'defeat-icons-font/defeat-icons.css';
\`\`\`

\`\`\`html
<i class="df df-heart"></i>
\`\`\`
`;

fs.writeFileSync(path.join(fontPkgDir, 'README.md'), fontReadme);

console.log('Successfully generated defeat-icons-font package in packages/defeat-icons-font.');
