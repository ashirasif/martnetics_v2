# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Martnetics V2 is a T3 Stack application built with Next.js that serves as a 3D portfolio/showcase website for a design house. The application features:

- **3D interactive experiences** using React Three Fiber and Three.js
- **Scroll-based page navigation** with 9 distinct sections
- **tRPC** for type-safe API routing
- **Prisma** with SQLite database
- **Tailwind CSS** for styling with custom configurations
- **React Spring** for smooth animations and transitions

## Common Development Commands

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push database schema changes
npm run postinstall  # Generate Prisma client (runs automatically after install)

# Code Quality
npm run lint         # Run ESLint
```

## Architecture Overview

### Core Application Structure

The application follows a **single-page scroll-based navigation** system where all content is managed through scroll position rather than traditional routing:

- **Main page**: `src/pages/index.tsx` - Contains all 9 sections with scroll-based state management
- **Scroll system**: Uses a custom scroll handler that maps scroll position to page sections (0-1 range)
- **3D Scene**: Managed through `src/components/3d/Scene.tsx` with synchronized camera movements

### Key Components

#### 3D Components (`src/components/3d/`)
- **Scene.tsx**: Main 3D scene coordinator with camera positioning and section-based rendering
- **Watch.tsx**: Interactive 3D watch model showcase
- **Frames.tsx**: 3D frame elements for visual structure
- **introText3d.tsx**: 3D text elements for introduction sections

#### UI Components (`src/components/`)
- **navbar.tsx**: Navigation component for direct section access
- **pageDots.tsx**: Visual indicators for current section
- **introText.tsx**: Introduction text content
- **projects.tsx**: Projects showcase section
- **contact.tsx**: Contact information section
- **testimonial.tsx**: Customer testimonials
- **form.tsx**: Contact form

### State Management

The application uses **React state** with custom scroll handling:

- **`m` state**: Primary scroll position value (0-1 range)
- **`currentPage` state**: Derived from scroll position (1-9)
- **Spring animations**: Use `@react-spring/web` for smooth section transitions
- **Mobile detection**: Custom mobile device detection for responsive behavior

### Database & API

- **Prisma**: SQLite database with single `Example` model
- **tRPC**: Type-safe API with routers in `src/server/api/routers/`
- **Environment variables**: Managed through `src/env.mjs` with validation

### Styling System

- **Tailwind CSS**: With custom color scheme and animations
- **Custom animations**: Scroll-down animation in `tailwind.config.ts`
- **Color scheme**: Dark theme with section-specific background colors
- **Roboto Mono**: Custom font family for branding

### 3D Assets

All 3D models are stored in `public/` as GLTF/BIN files:
- `watch.gltf/bin`: Interactive watch model
- `frame.gltf/bin`: Frame elements
- `logo3d.gltf/bin`: 3D logo

## Development Notes

### Scroll System
The application uses a non-standard scroll system where:
- Scroll is captured and mapped to a 0-1 range
- Each section occupies 1/9 of the scroll range
- Mobile uses swipe gestures, desktop uses wheel events
- Camera positions are pre-defined per section in `Scene.tsx`

### Performance Optimization
- **React Three Fiber**: Uses `PerformanceMonitor` for adaptive DPR
- **Lazy loading**: 3D components render based on scroll position
- **Suspense boundaries**: Loading states for 3D assets

### TypeScript Configuration
- **Path aliases**: `~/*` maps to `src/*`
- **Strict mode**: Enabled with `noUncheckedIndexedAccess`
- **Next.js 13**: App directory structure not used (pages directory only)

## Environment Setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL`
2. Run `npm install` to install dependencies
3. Run `npm run db:push` to initialize database
4. Run `npm run dev` to start development server

The application expects to run with a SQLite database file at `./db.sqlite` by default.