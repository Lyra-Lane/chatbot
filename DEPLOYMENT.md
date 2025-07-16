# GitHub Pages Deployment Guide

This guide explains how to deploy ManYao Li's portfolio website to GitHub Pages.

## Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `manyao-li-portfolio` or `your-username.github.io` for a user site
3. Set it to Public (required for GitHub Pages on free accounts)

### 2. Upload Files
1. Download all files from this Replit project
2. Upload them to your GitHub repository (you can use GitHub's web interface or git commands)

### 3. Enable GitHub Pages
1. Go to your repository Settings
2. Click on "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow file `.github/workflows/deploy.yml` will handle the rest

### 4. Wait for Deployment
- The GitHub Action will automatically run when you push to the main branch
- Check the "Actions" tab to see deployment progress
- Your site will be available at `https://your-username.github.io/repository-name`

## Manual Build (Alternative)

If you prefer to build manually:

```bash
# Install dependencies
npm install

# Build the website
npx vite build

# The built files will be in 'dist/public'
# Upload these files to your GitHub Pages branch
```

## Customizing Your Website

### Update Personal Information
Edit `client/src/data/portfolio-data.ts` to change:
- Name and title
- Education details
- Work experience
- Research projects
- Awards and achievements
- Contact information

### Change Profile Photo
1. Add your photo to the `attached_assets/` folder
2. Update the import in `client/src/components/hero-section.tsx`

### Modify Content Language
All content supports English and Chinese. Update both versions in the data file:

```typescript
title: {
  en: "Your English Title",
  zh: "您的中文标题"
}
```

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Ensure all import paths are correct
- Verify image files are properly referenced

### GitHub Actions Error
- Check the Actions tab for error details
- Ensure repository has Pages enabled
- Verify the workflow file is in `.github/workflows/`

### Site Not Loading
- Check that the repository is public
- Verify Pages is enabled in repository settings
- Allow a few minutes for changes to propagate

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the root with your domain name
2. Configure DNS records with your domain provider
3. Enable HTTPS in repository Pages settings

## Support

If you need help with deployment:
1. Check GitHub Pages documentation
2. Review the Actions logs for specific errors
3. Ensure all files are uploaded correctly

Your portfolio website will showcase your AI research and academic achievements professionally!