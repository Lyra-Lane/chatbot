# replit.md

## Overview

This is a bilingual (English/Chinese) personal portfolio website for ManYao Li, an AI researcher and statistics student at Beijing Normal University. The project has been converted from a full-stack application to a static website optimized for GitHub Pages hosting, designed to showcase research projects, academic achievements, and professional experience in the field of AI and machine learning.

## Recent Changes (January 2025)

- ✓ Updated profile photo to latest professional headshot
- ✓ Converted from full-stack app to static website for GitHub Pages hosting
- ✓ Removed server dependencies and simplified React app
- ✓ Created GitHub Actions workflow for automatic deployment
- ✓ Added comprehensive README with deployment instructions
- ✓ Populated all content sections with ManYao's actual resume data

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: React Context for language switching, TanStack Query for server state
- **Build Tool**: Vite for development and build processes
- **Language Support**: Custom context-based i18n system for English/Chinese content

### Static Website Architecture
- **Build Tool**: Vite for development and production builds
- **Deployment**: GitHub Pages with GitHub Actions for CI/CD
- **Static Files**: Generated HTML, CSS, JS served directly by GitHub Pages
- **Assets**: Images and documents included in build output

### Key Design Decisions

1. **Monorepo Structure**: Organized with separate `client/`, `server/`, and `shared/` directories for clear separation of concerns
2. **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
3. **Component Architecture**: Composition-based UI using Radix primitives for accessibility and customization
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
5. **Performance**: Vite for fast development and optimized production builds

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling and language toggle
- **Hero Section**: Introduction with profile image and call-to-action
- **About Section**: Education, experience, and skills with animated progress bars
- **Projects Section**: Research projects with categorized badges and external links
- **Awards Section**: Recognition and achievements with type-based color coding
- **Blog Section**: Placeholder for future blog implementation
- **Contact Section**: Contact information with social media links
- **Language Context**: Centralized translation system

### Backend Components
- **Routes**: RESTful API structure (currently minimal implementation)
- **Storage Interface**: Abstracted storage layer for future database integration
- **Error Handling**: Centralized error middleware
- **Development Tools**: Request logging and Vite integration

### Shared Components
- **Schema**: Drizzle ORM schemas with Zod validation
- **Types**: Shared TypeScript interfaces and types

## Data Flow

1. **Static Content**: Portfolio data stored in `portfolioData` object with bilingual content
2. **Language Switching**: Context-based system updates all content simultaneously
3. **Navigation**: Smooth scrolling between sections using scroll-to functionality
4. **Animations**: Intersection Observer API for scroll-triggered animations
5. **Responsive Behavior**: Tailwind classes handle layout changes across breakpoints

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority for component variants
- **Animation**: CSS transitions and transforms with intersection observers
- **Utilities**: clsx for conditional classes, date-fns for date formatting

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database ORM**: Drizzle ORM with PostgreSQL dialect (configured but not actively used)
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions (prepared for future use)

### Development Dependencies
- **Build Tools**: Vite, esbuild, tsx for TypeScript execution
- **Database Tools**: Drizzle Kit for migrations
- **Development**: Hot module replacement and error overlays

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Profile images and documents stored in `attached_assets`

### Production Configuration
- **Environment**: NODE_ENV=production
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Assets**: Static file serving through Express
- **Session**: PostgreSQL-backed sessions for scalability

### Development Workflow
- **Hot Reload**: Vite middleware integrated with Express server
- **TypeScript**: Real-time compilation and type checking
- **Error Handling**: Runtime error overlays and detailed logging

### Database Strategy
- **Current**: In-memory storage for development
- **Future**: PostgreSQL with Drizzle ORM for production
- **Migrations**: Drizzle Kit handles schema changes
- **Connection**: Neon Database serverless PostgreSQL (configured)

The application is designed to be easily deployable to platforms like Vercel, Netlify, or traditional hosting with minimal configuration changes. The modular architecture allows for easy scaling and feature additions as the portfolio grows.