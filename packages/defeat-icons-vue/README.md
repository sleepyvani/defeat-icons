# defeat-icons-vue

3,424 18px duo-fill SVG icon components for Vue 3 with TypeScript support and tree-shaking.

## Installation

```bash
npm i defeat-icons-vue
# or
pnpm add defeat-icons-vue
# or
bun add defeat-icons-vue
```

## Usage

```vue
<script setup>
import { Heart, Accessibility } from 'defeat-icons-vue';
</script>

<template>
  <div class="flex gap-4">
    <Heart class="size-6" />
    <Accessibility class="size-6" />
  </div>
</template>
```

### Direct Subpath Import

```vue
<script setup>
import Heart from 'defeat-icons-vue/Heart';
</script>

<template>
  <Heart class="size-6" />
</template>
```
