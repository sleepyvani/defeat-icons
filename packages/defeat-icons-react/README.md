# defeat-icons-react

3,424 18px duo-fill SVG icon components for React with TypeScript support and tree-shaking.

## Documentation & Demo

Interactive icon explorer: https://defeat-icons.vercel.app/

## Installation

```bash
npm i defeat-icons-react
# or
pnpm add defeat-icons-react
# or
bun add defeat-icons-react
```

## Usage

```jsx
import { Heart, Accessibility } from 'defeat-icons-react';

function App() {
  return (
    <div className="flex gap-4">
      <Heart className="size-6" />
      <Accessibility className="size-6" />
    </div>
  );
}
```

### Direct Subpath Import

```jsx
import Heart from 'defeat-icons-react/Heart';

<Heart className="size-6" />
```
