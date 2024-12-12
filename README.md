# Tailwind Button Border Bug Reproduction

This project demonstrates a visual bug in Tailwind CSS when using opacity modifiers with border-radius. The issue manifests as artifacts around rounded corners when using opacity values.

## The Bug

When using Tailwind's opacity modifier syntax (e.g., `bg-zinc-800/95`) with rounded corners:

- White artifacts appear around the border radius
- The issue occurs regardless of the border-radius value
- The artifacts are actually the parent background color showing through
- The problem only happens with opacity modifiers
- Using solid hex colors or Tailwind colors without opacity works correctly

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Type check and lint with auto-fix
- `npm run format` - Format all files with Prettier
- `npm run preview` - Preview production build

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/lib` - Utility functions
  - `/contexts` - React contexts
  - `/hooks` - Custom React hooks

## Configuration Files

The project includes configuration for:

- TypeScript (`tsconfig.json`)
- Tailwind CSS (`tailwind.config.js`)
- ESLint (`eslint.config.js`) - Flat config with TypeScript and React support
- Prettier (`.prettierrc.json`) - With Tailwind class sorting
- Vite (`vite.config.ts`)
- PostCSS (`postcss.config.js`)

## Code Style

This project uses:

- ESLint for code linting with TypeScript and React specific rules
- Prettier for code formatting with:
  - Single quotes
  - No semicolons
  - Trailing commas
  - 2 space indentation
  - Tailwind class sorting
  - Consistent bracket spacing

## License

[MIT](./LICENSE) © 2024 Sudharsan
