# Sky Fern AI - Research Community Landing Page

A modern, animated research-focused landing page for Sky Fern AI's user research community. Designed to gather user insights and build a co-creation community for developing meeting productivity tools. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Research-Focused**: Designed to gather user insights and build research community
- **Organic Design**: Soft, cloud-inspired elements with rounded corners and flowing animations
- **Sky Blue Theme**: Modern sky blue color palette with gradients and soft shadows
- **Responsive**: Fully responsive design optimized for mobile-first user research
- **Form Validation**: Comprehensive research form with React Hook Form and Zod validation
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML and keyboard navigation

## 🎨 Design System

### Color Palette
- **Primary**: Deep sky blue (#1976D2)
- **Secondary**: Light sky blue (#64B5F6)
- **Accent**: Bright cyan (#00BCD4)
- **Supporting**: Soft cloud white (#F8FAFC), light gray (#F1F5F9)
- **Text**: Charcoal (#374151), medium gray (#6B7280)

### Typography
- **Font**: Inter (modern sans-serif)
- **Clear hierarchy** with responsive sizing

## 📋 Sections

1. **Hero Research** - Research-focused headline with co-creation messaging and cloud animations
2. **Research Form** - Comprehensive user research form with meeting challenge questions
3. **Why Participate** - Benefits of joining the research community with statistics
4. **Our Approach** - User-driven development process explanation with development flow
5. **Footer Research** - Research community info, development phase messaging, and contact

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd sky-fern-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint
- **`npm run lint:fix`** - Fix ESLint issues automatically

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Header.tsx          # Navigation with sticky behavior
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── ProblemSolution.tsx # Problem/solution showcase
│   │   ├── Features.tsx        # Features grid with animations
│   │   ├── TargetAudience.tsx  # User segments with hover effects
│   │   ├── SocialProof.tsx     # Testimonials and metrics
│   │   ├── BetaSignup.tsx      # Form with validation
│   │   └── Footer.tsx          # Footer with links
│   └── ui/
│       ├── Button.tsx          # Reusable button component
│       ├── Input.tsx           # Form input with validation
│       └── Select.tsx          # Form select with validation
├── types/
│   └── index.ts                # TypeScript type definitions
├── hooks/                      # Custom React hooks (future use)
├── utils/                      # Utility functions (future use)
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
└── index.css                   # Global styles and Tailwind config
```

## 🎯 Key Features Implementation

### Smooth Scroll Navigation
- Sticky header with background blur on scroll
- Smooth scrolling to sections with offset calculation
- Mobile-responsive navigation with slide-out menu

### Form Validation
- Real-time validation with visual feedback
- Schema validation using Zod
- Success state with animated confirmation
- Accessibility-compliant error handling

### Animations
- Staggered animations for section reveals
- Hover effects on interactive elements
- Loading states and micro-interactions
- Performance-optimized using transform and opacity

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Flexible grid layouts and typography scaling
- Touch-friendly interactive elements

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-optimized interface elements
- Optimized images and assets
- Fast loading times on mobile networks

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management for interactive elements
- High contrast text and sufficient color contrast ratios
- Screen reader friendly content

## 🔧 Customization

### Colors
Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  forest: { /* custom forest green shades */ },
  sage: { /* custom sage green shades */ },
  lime: { /* custom lime green shades */ },
}
```

### Content
Update content in individual component files:
- Hero messaging in `Hero.tsx`
- Features in `Features.tsx`
- Form fields in `BetaSignup.tsx`

### Animations
Adjust animation timing and easing in component files or create new variants.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain optimized static files ready for deployment.

### Testing the Production Build Locally
```bash
npm run preview
```
This serves the production build at `http://localhost:4173`

**Note**: The build is configured with `base: './'` to ensure assets load correctly when serving from any directory or hosting provider.

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your Git repository to Netlify for auto-deployment

## 🧪 Testing

While not included in the current setup, recommended testing approaches:
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright or Cypress
- **Visual Tests**: Chromatic or Percy

## 📈 Performance Optimizations

- **Code splitting**: Components are optimized for lazy loading
- **Image optimization**: Use WebP format and proper sizing
- **CSS optimization**: PurgeCSS removes unused styles
- **Bundle analysis**: Use `npm run build` and analyze output

## 🔧 Troubleshooting

### Blank Screen After Build
If you see a blank screen when opening `dist/index.html` directly:

1. **Use the preview command**: `npm run preview`
2. **Or serve via HTTP**: Use a local server like `python -m http.server 8000` in the `dist` directory
3. **Check console errors**: Open browser dev tools to see any JavaScript errors

The build uses relative paths (`./assets/`) which work in most hosting environments but may have issues when opened directly from the file system.

### Development vs Production Differences
- **Development**: `npm run dev` - Uses Vite's dev server with HMR
- **Production Preview**: `npm run preview` - Serves the actual built files
- **Build**: `npm run build` - Creates optimized static files in `dist/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For support and questions:
- Email: hello@skyfern.ai
- GitHub Issues: [Create an issue](repository-url/issues)

---

**Built with ❤️ for better meetings**

*Generated with Claude Code*