# defeat-icons-svelte

3,424 18px duo-fill SVG icon components for Svelte with TypeScript support and tree-shaking.

## Installation

```bash
npm i defeat-icons-svelte
# or
pnpm add defeat-icons-svelte
# or
bun add defeat-icons-svelte
```

## Usage

```svelte
<script>
  import { Heart, Accessibility } from 'defeat-icons-svelte';
</script>

<div class="flex gap-4">
  <Heart class="size-6" />
  <Accessibility class="size-6" />
</div>
```

### Direct Subpath Import

```svelte
<script>
  import Heart from 'defeat-icons-svelte/Heart.svelte';
</script>

<Heart class="size-6" />
```
