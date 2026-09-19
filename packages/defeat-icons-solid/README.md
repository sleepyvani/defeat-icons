# defeat-icons-solid

3,424 18px duo-fill SVG icon components for SolidJS with TypeScript support and tree-shaking.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

```bash
npm i defeat-icons-solid
# or
pnpm add defeat-icons-solid
# or
bun add defeat-icons-solid
```

## Usage

```jsx
import { Heart, Accessibility } from 'defeat-icons-solid';

function App() {
  return (
    <div class="flex gap-4">
      <Heart class="size-6" />
      <Accessibility class="size-6" />
    </div>
  );
}
```

### Direct Subpath Import

```jsx
import Heart from 'defeat-icons-solid/Heart';

<Heart class="size-6" />
```
