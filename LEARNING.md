# Learning Notes — Akshat's Portfolio

A reference explaining every React, TypeScript, and tooling concept used in this codebase.
Each section links to the actual file where you can see it live.

---

## 1. nvm + `.nvmrc` — Node Version Management

**What it is:** nvm (Node Version Manager) lets you install and switch between multiple
Node.js versions on one machine. `.nvmrc` is a one-line file that records which version
this project expects.

**Why we use it:** Different projects often need different Node versions. Without nvm you'd
reinstall Node manually every time you switch. With `.nvmrc`, run `nvm use` in the project
folder and you're immediately on the right version.

**In this project:** `.nvmrc` contains `20`. Run `nvm use` any time you open a new terminal
in this folder. Note: on Windows, install nvm-windows from https://github.com/coreybutler/nvm-windows

---

## 2. React Components — The Building Block

**What it is:** A React component is a JavaScript function that returns JSX (HTML-like markup).
The function name must start with a capital letter.

**Why we use it:** Components let you split the UI into independent, reusable pieces.
`Navbar.tsx` and `HeroSection.tsx` each own one part of the page. You can move, edit,
or replace them without touching each other.

**In this project:** `src/components/Navbar.tsx`
```tsx
export default function Navbar() {
  return (
    <nav className="relative z-10">
      ...
    </nav>
  )
}
```

---

## 3. JSX — HTML Inside JavaScript

**What it is:** JSX is a syntax extension that lets you write HTML-like code inside
TypeScript. Vite compiles it to regular JavaScript before the browser sees it.

**Why we use it:** Writing `<h1>Hello</h1>` in your component is clearer than
`React.createElement('h1', null, 'Hello')`.

**Key rules:**
- Use `className` not `class` (`class` is a reserved word in JavaScript)
- Self-closing tags need `/`: `<video />` not `<video>`
- JavaScript expressions go inside `{}`: `<p>{userName}</p>`
- Adjacent elements need one parent wrapper: `<>...</>` (React fragment)

---

## 4. TypeScript Interfaces — Defining Data Shapes

**What it is:** An `interface` describes the shape (properties + types) of an object.
TypeScript checks at compile time that your code matches the shape.

**Why we use it:** Catches mistakes before you run the code. If you write `link.lable`
instead of `link.label`, TypeScript errors immediately.

**In this project:** `src/components/Navbar.tsx`
```ts
interface NavLink {
  label: string
  active?: boolean  // ? means the property is optional
}

const navLinks: NavLink[] = [
  { label: 'Home', active: true },
  { label: 'Studio' },
]
```

---

## 5. `useRef` — Accessing a DOM Element Directly

**What it is:** `useRef` gives you a box that holds a reference to a real DOM element.
Changing it does NOT trigger a re-render.

**Why we use it:** React normally controls the DOM through its virtual DOM. But some
operations (like calling `.play()` on a `<video>`) require reaching into the real DOM.

**In this project:** `src/App.tsx`
```tsx
const videoRef = useRef<HTMLVideoElement>(null)
// ...
<video ref={videoRef} ...>
```
After the component mounts, `videoRef.current` is the actual `<video>` HTML element.
`<HTMLVideoElement>` is the TypeScript type — it tells TS what methods are available on it.

---

## 6. `useEffect` — Running Code After Mount

**What it is:** `useEffect` runs a function after the component appears in the DOM.
The second argument `[]` is the dependency array — an empty array means "run once on mount".

**Why we use it:** You can't call `.play()` during render — the `<video>` element doesn't
exist yet. `useEffect` waits until it does.

**In this project:** `src/App.tsx`
```tsx
useEffect(() => {
  videoRef.current?.play()
}, [])
// []  = run once when the component first appears on screen
// ?.  = optional chaining: only call .play() if videoRef.current is not null
```

---

## 7. Tailwind CSS — Utility-First Styling

**What it is:** Tailwind provides short class names that map to single CSS properties.
You style elements by combining classes in `className`. No separate CSS files needed for layout.

**Why we use it:** Faster to write, and you can see all styles on the element at a glance.
Tailwind v4 is configured via `@tailwindcss/vite` — no `tailwind.config.ts` file.

**Examples from this project:**
| Class | CSS equivalent |
|---|---|
| `flex` | `display: flex` |
| `items-center` | `align-items: center` |
| `px-8` | `padding-left: 2rem; padding-right: 2rem` |
| `text-5xl` | `font-size: 3rem` |
| `z-0` / `z-10` | `z-index: 0` / `z-index: 10` |
| `md:flex` | `@media (min-width: 768px) { display: flex }` |
| `hover:scale-[1.03]` | on hover, scale to 103% |
| `inset-0` | `top:0; right:0; bottom:0; left:0` |

---

## 8. CSS Custom Properties — Design Tokens

**What it is:** CSS variables defined with `--` prefix. shadcn/ui's `@theme inline` block
in `globals.css` tells Tailwind v4 to expose them as utility classes.

**Why we use it:** Change `--background` once in `globals.css` and every component using
`bg-background` updates automatically. This is the foundation of theming.

**In this project:** `src/styles/globals.css`
```css
:root {
  --background: 201 100% 13%; /* deep navy */
  --foreground: 0 0% 100%;    /* white */
}

@theme inline {
  --color-background: hsl(var(--background)); /* → bg-background */
  --color-foreground: hsl(var(--foreground)); /* → text-foreground */
}
```

---

## 9. Component Composition — How App.tsx Wires Everything

**What it is:** Composition means combining small components to build larger ones.
`App.tsx` is the root — it owns the video background and assembles the page.

**Why the video lives in App.tsx:** The `<video>` uses `absolute inset-0` to fill its
nearest `position: relative` ancestor. By placing it in `App.tsx` (the `relative` root),
the video fills the entire viewport — behind the navbar AND the hero content. If the
video were inside `HeroSection`, it would only fill the section area below the navbar.

**In this project:** `src/App.tsx`
```tsx
export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <video className="absolute inset-0 ... z-0" />  {/* behind everything */}
      <Navbar />                                        {/* relative z-10 */}
      <HeroSection />                                   {/* relative z-10 */}
    </div>
  )
}
```

---

## 10. The Liquid Glass Effect — Pure CSS

**What it is:** A CSS class combining `backdrop-filter: blur` (blurs content behind
the element) and a `::before` pseudo-element with a gradient border.

**Why the `::before` trick:** CSS cannot combine `border-image` with `border-radius`.
The workaround: an absolutely-positioned `::before` with `padding: 1.4px` and a
`mask` that cuts away the interior — leaving only the border-width pixels visible with
the gradient.

**In this project:** `.liquid-glass` in `src/styles/globals.css`. Apply to any element:
```tsx
<button className="liquid-glass rounded-full px-6 py-2.5">
  Begin Journey
</button>
```

---

## 11. Vite — Dev Server + Build Tool

**What it is:** Vite serves your source files directly in development (no bundling step),
making it very fast. `npm run build` produces optimised files in `dist/` for production.

**Key commands:**
```bash
npm run dev       # start dev server at localhost:5173 (hot reloads on save)
npm run build     # create production build in dist/
npm run preview   # preview the production build locally
npx tsc --noEmit  # check TypeScript types without building
```
