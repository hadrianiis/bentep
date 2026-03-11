# Bentep

A modern Next.js application built with TypeScript, Tailwind CSS, and clean code principles.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint + Prettier** for code quality
- **Clean Code Architecture** with organized folder structure
- **Reusable UI Components** with proper TypeScript interfaces
- **Utility Functions** for common operations

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
│   └── ui/          # Base UI components (Button, Card, etc.)
├── hooks/           # Custom React hooks
├── services/        # API calls and external services
├── store/           # State management
├── utils/           # Helper functions and constants
└── assets/          # Images, fonts, and other static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd bentep
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🎨 Code Quality

This project follows clean code principles:

- **No unused code** - ESLint catches unused imports and variables
- **TypeScript strict mode** - No `any` types unless absolutely necessary
- **Consistent formatting** - Prettier ensures consistent code style
- **Modular architecture** - Clear separation of concerns
- **Reusable components** - UI components with proper TypeScript interfaces

## 🧩 Components

### Button Component

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

### Card Component

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>
```

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
