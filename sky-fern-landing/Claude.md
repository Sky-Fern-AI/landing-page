# Claude.md - Sky Fern AI Landing Page

## Project Overview
This is a modern, animated research-focused landing page for Sky Fern AI's user research community. The page is designed to gather user insights and build a co-creation community for developing meeting productivity tools.

## Key Commands

### Development
```bash
npm run dev          # Start development server at http://localhost:5173
npm run build        # Build for production
npm run build:ci     # CI build with linting
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Project Structure
```
src/
├── components/
│   ├── layout/
│   │   └── HeaderResearch.tsx      # Research-focused navigation
│   ├── sections/
│   │   ├── HeroResearch.tsx        # Hero with co-creation messaging
│   │   ├── ResearchForm.tsx        # Comprehensive user research form
│   │   ├── WhyParticipate.tsx      # Benefits of joining research
│   │   ├── OurApproach.tsx         # Development process explanation
│   │   └── FooterResearch.tsx      # Research community footer
│   └── ui/
│       ├── Button.tsx              # Reusable button component
│       ├── Input.tsx               # Form input with validation
│       └── Select.tsx              # Form select with validation
```

## Design System

### Color Palette
- **Primary**: Deep sky blue (#1976D2)
- **Secondary**: Light sky blue (#64B5F6)  
- **Accent**: Bright cyan (#00BCD4)
- **Supporting**: Cloud white (#F8FAFC), Light gray (#F1F5F9)
- **Text**: Charcoal (#374151), Medium gray (#6B7280)

### Key Design Elements
- Organic, cloud-inspired shapes and animations
- Rounded corners (12px-24px) throughout
- Soft shadows and gradients
- Cloud-drift, gentle-float, and soft-pulse animations
- Mobile-first responsive design

## Contact Information
- **Primary Contact**: contact@skyfernai.com
- **Research Community**: Currently in development phase
- **Purpose**: User research and co-creation community building

## Development Notes

### Recent Changes
- Complete redesign from product-focused to research-focused approach
- Color scheme updated from green to sky blue theme  
- Added comprehensive research participation form
- Implemented organic design with cloud-like animations
- Updated all contact emails to contact@skyfernai.com

### Form Fields (ResearchForm.tsx)
- Name, email, role, company size
- Meeting frustration (text area)
- Weekly follow-up time spent
- Current meeting tools (multi-select)
- Interview participation interest

### Key Features
- Research form immediately visible (above the fold)
- Co-creation messaging throughout
- Community-focused value propositions
- Transparent development process explanation
- Mobile-optimized user research experience

### Build Configuration
- Uses Vite with relative paths (`base: './'`)
- Tailwind CSS with custom sky blue palette
- Framer Motion for organic animations
- React Hook Form + Zod validation
- Production build optimized for deployment
- **CI/CD**: Automated deployment to Cloudflare Pages via GitHub Actions
- **Auto-deploy**: Pushes to main branch trigger production deployment

### Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios maintained