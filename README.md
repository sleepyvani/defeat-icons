# Defeat Icons

3,424 18px duo-fill SVG icon components distributed as standalone packages for React, Vue 3, Svelte, and SolidJS with full TypeScript support and tree-shaking.

Based on the icon design from Nucleo (https://nucleoapp.com). For commercial usage and to support the original creators, consider purchasing an official license directly from Nucleo.

---

## Packages

| Framework | Package | Installation |
| :--- | :--- | :--- |
| **React** | `defeat-icons-react` | `npm i defeat-icons-react` |
| **Vue 3** | `defeat-icons-vue` | `npm i defeat-icons-vue` |
| **Svelte** | `defeat-icons-svelte` | `npm i defeat-icons-svelte` |
| **SolidJS** | `defeat-icons-solid` | `npm i defeat-icons-solid` |

---

## React

```bash
npm i defeat-icons-react
```

### Usage

```jsx
import { Accessibility, Heart, ArrowRight } from 'defeat-icons-react';

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <Accessibility />
      <Heart className="w-8 h-8 text-rose-500" />
      <ArrowRight className="w-5 h-5 text-indigo-500" />
    </div>
  );
}
```

### Subpath Import

```jsx
import Heart from 'defeat-icons-react/Heart';

<Heart className="w-6 h-6" />
```

---

## Vue 3

```bash
npm i defeat-icons-vue
```

### Usage

```vue
<script setup>
import { Accessibility, Heart, ArrowRight } from 'defeat-icons-vue';
</script>

<template>
  <div class="flex items-center gap-4">
    <Accessibility />
    <Heart class="w-8 h-8 text-rose-500" />
    <ArrowRight class="w-5 h-5 text-indigo-500" />
  </div>
</template>
```

### Subpath Import

```vue
<script setup>
import Heart from 'defeat-icons-vue/Heart';
</script>

<template>
  <Heart class="w-6 h-6" />
</template>
```

---

## Svelte

```bash
npm i defeat-icons-svelte
```

### Usage

```svelte
<script>
  import { Accessibility, Heart, ArrowRight } from 'defeat-icons-svelte';
</script>

<div class="flex items-center gap-4">
  <Accessibility />
  <Heart class="w-8 h-8 text-rose-500" />
  <ArrowRight class="w-5 h-5 text-indigo-500" />
</div>
```

### Subpath Import

```svelte
<script>
  import Heart from 'defeat-icons-svelte/Heart.svelte';
</script>

<Heart class="w-6 h-6" />
```

---

## SolidJS

```bash
npm i defeat-icons-solid
```

### Usage

```jsx
import { Accessibility, Heart, ArrowRight } from 'defeat-icons-solid';

export default function App() {
  return (
    <div class="flex items-center gap-4">
      <Accessibility />
      <Heart class="w-8 h-8 text-rose-500" />
      <ArrowRight class="w-5 h-5 text-indigo-500" />
    </div>
  );
}
```

### Subpath Import

```jsx
import Heart from 'defeat-icons-solid/Heart';

<Heart class="w-6 h-6" />
```

---

## Tree-Shaking and Performance

Every package is configured with `"sideEffects": false` and standard ESM export maps. Bundlers (Vite, Webpack, Next.js, Rollup, SvelteKit) will only include the specific icons imported in the application bundle.

