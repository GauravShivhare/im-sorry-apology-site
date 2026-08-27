# 🤝 Contributing to I'm Sorry — Apology Site

Thank you for your interest in contributing to this project! We welcome contributions from everyone. This guide will help you get started.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)
- [Reporting Issues](#reporting-issues)

---

## 💬 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

---

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** v18 or higher
- **pnpm** v10.4.1 or higher
- Git installed and configured
- GitHub account

### Check Your Versions

```bash
node --version    # Should be v18+
pnpm --version    # Should be 10.4.1+
git --version     # Should be installed
```

---

## 🛠️ Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub (click the fork button)
# Then clone your fork
git clone https://github.com/YOUR-USERNAME/im-sorry-apology-site.git
cd im-sorry-apology-site

# Add upstream remote
git remote add upstream https://github.com/GauravShivhare/im-sorry-apology-site.git
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### 4. Verify TypeScript Setup

```bash
pnpm check
```

This ensures no TypeScript errors.

---

## 📁 Project Structure

```
client/                          # Frontend application
├── src/
│   ├── components/              # Reusable React components
│   │   ├── ui/                  # UI library components (Radix UI + Custom)
│   │   ├── ErrorBoundary.tsx    # Error handling component
│   │   └── ManusDialog.tsx      # Dialog component
│   ├── pages/                   # Page components (multi-page flow)
│   │   └── Home.tsx             # Main pages: Welcome, Acknowledgment, LittleThings, FromHeart, Letter
│   ├── lib/                     # Utility functions
│   │   └── utils.ts             # Helper utilities (cn, etc.)
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles (Tailwind)
├── index.html                   # HTML entry point
└── [config files]

server/                          # Backend service (Express.js)
└── index.ts                     # Server entry point

shared/                          # Shared code between client and server
└── [shared utilities]

vite.config.ts                   # Vite configuration
tsconfig.json                    # TypeScript configuration
package.json                     # Dependencies and scripts
```

---

## 🎨 Design System

### Colors (From Design Guide)

- **Bandage Coral**: `#E87578` — Primary apology accent
- **Warm Ivory**: Base color for paper-like surfaces
- **Lavender**: Reflection and secondary accent
- **Peach**: Warmth and connection
- **Deep Plum**: `#2d204d` (theme-color) — Opening DM backdrop

### Typography

- **Headings**: Caveat font (handwritten intimacy)
- **Body**: Nunito (rounded clarity)
- **Special**: Fraunces serif (apology title contrast)

### Components Structure

All UI components are built on **Radix UI** primitives with **TailwindCSS** styling.

---

## 💻 Making Changes

### 1. Create a Feature Branch

```bash
# Update main branch first
git fetch upstream
git checkout main
git merge upstream/main

# Create a feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Keep commits small and focused
- Write meaningful commit messages
- Add comments for complex logic
- Follow TypeScript strict mode

### 3. Keep Formatting Clean

```bash
# Format code with Prettier
pnpm format

# Check TypeScript
pnpm check
```

---

## 🧪 Testing

Before submitting your PR:

```bash
pnpm check        # Type checking
pnpm dev          # Manual testing
pnpm build        # Production build
pnpm preview      # Preview production
```

---

## 📤 Submitting Changes

1. Push to your fork: `git push origin feature/your-feature-name`
2. Open a Pull Request with clear description
3. Link any related issues: `Fixes #123`
4. Wait for review and address feedback

---

## 📝 Style Guide

### TypeScript/React

```typescript
// Use hooks, functional components
const MyComponent = ({ title, onClick }: Props) => {
  const [state, setState] = useState(false);
  
  return (
    <div className="flex items-center gap-2">
      <h1>{title}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
};
```

### CSS / Tailwind

- Use Tailwind utilities
- Mobile-first approach
- Consistent spacing

---

## 🐛 Reporting Issues

**Bug Report:**
- Clear title with [BUG]
- Steps to reproduce
- Expected vs actual behavior
- Screenshots

**Feature Request:**
- Clear title with [FEATURE]
- Use case and motivation
- Examples (optional)

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com)

---

## 🙏 Thank You!

Your contributions make this project better. We appreciate your time and effort!

**Happy coding!** ❤️

---

**Maintainer:** [@GauravShivhare](https://github.com/GauravShivhare)
