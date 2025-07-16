# ManYao Li - Personal Portfolio Website

A bilingual (English/Chinese) academic portfolio website showcasing AI research, statistics expertise, and NLP projects.

## GitHub Pages Deployment

This website is designed to be hosted on GitHub Pages. Follow these steps to deploy:

### Option 1: Using GitHub Actions (Recommended)

1. **Create a new repository** on GitHub for your portfolio
2. **Upload all files** from this project to your repository
3. **Create `.github/workflows/deploy.yml`** with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build website
      run: npx vite build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

4. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/ (root)`

### Option 2: Manual Build and Deploy

1. **Build the website locally**:
```bash
npm install
npx vite build
```

2. **Upload the `dist/public` folder contents** to your GitHub repository's `gh-pages` branch

3. **Enable GitHub Pages** in repository settings pointing to the `gh-pages` branch

## Features

- ✅ Bilingual content (English/Chinese)
- ✅ Responsive design for all devices
- ✅ Professional academic layout
- ✅ Research projects showcase
- ✅ Awards and achievements timeline
- ✅ Blog section for insights
- ✅ Contact information with social links
- ✅ Smooth animations and transitions

## Customization

### Updating Content

All content is stored in `client/src/data/portfolio-data.ts`. Update this file to:
- Change personal information
- Add new projects or research
- Update awards and achievements
- Modify blog posts
- Update contact details

### Updating Profile Photo

Replace the image file in `attached_assets/` and update the import in `client/src/components/hero-section.tsx`.

### Language Content

The website supports English and Chinese. All text content in `portfolio-data.ts` has both versions:

```typescript
title: {
  en: "English Title",
  zh: "中文标题"
}
```

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Hosting**: GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.