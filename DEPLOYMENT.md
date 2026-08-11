# Deployment Guide — pujagupta-editorial

## Overview

This guide walks you through rebuilding and redeploying the site to GitHub Pages. It's designed to be simple and repeatable — no deep technical knowledge required.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) — [download here](https://nodejs.org/)
- **Git** — [download here](https://git-scm.com/)
- A text editor (VS Code, Sublime, etc.)

## Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/ahoro8188-a11y/pujagupta-editorial.git
cd pujagupta-editorial
```

## Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This may take a few minutes. Once complete, you'll have a `node_modules` folder.

## Step 3: Make Your Changes

Edit files as needed:
- **Content changes**: Update text in `client/src/lib/content.ts`
- **Page changes**: Edit files in `client/src/pages/`
- **Styling changes**: Update `client/src/index.css`
- **Component changes**: Modify files in `client/src/components/`

## Step 4: Test Locally

Before deploying, test your changes on your computer:

```bash
npm run dev
```

Your browser will open to `http://localhost:5173`. Explore the site and verify everything looks correct.

**Checklist:**
- [ ] Pages load without errors
- [ ] Links work
- [ ] Images display correctly
- [ ] Animations play smoothly
- [ ] Mobile view looks good (resize your browser)

When done testing, press `Ctrl+C` in the terminal to stop the local server.

## Step 5: Build for Production

Create an optimized version for deployment:

```bash
npm run build
```

This creates a `dist` folder with the compiled site. This is what gets deployed.

## Step 6: Deploy to GitHub Pages

Push your changes to GitHub:

```bash
git add .
git commit -m "Update: [describe your changes here]"
git push origin main
```

The deployment workflow will run automatically. Check the status:
1. Go to https://github.com/ahoro8188-a11y/pujagupta-editorial
2. Click the **Actions** tab
3. Look for your recent commit in the list
4. Wait for the green checkmark (✓) — your site is live!

## Step 7: Verify Live Deployment

Once the workflow completes:
1. Visit https://ahoro8188-a11y.github.io/pujagupta-editorial/
2. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Verify your changes appear

## Common Issues & Fixes

### ❌ "npm: command not found"
**Fix:** Node.js isn't installed. Download and install it from https://nodejs.org/

### ❌ Site doesn't update after deployment
**Fix:** Clear your browser cache:
- Chrome: Ctrl+Shift+Delete → Clear browsing data → "All time"
- Safari: Develop menu → Empty Web Inspector Caches
- Firefox: Ctrl+Shift+Delete → Clear Everything → Select "All"

### ❌ Build fails with errors
**Fix:** Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Local server won't start
**Fix:** Check that port 5173 isn't in use. Try:
```bash
npm run dev -- --port 3000
```
Then visit `http://localhost:3000`

## Workflow Overview

The site uses GitHub Actions to automatically deploy when you push changes:

```
You make changes
        ↓
  git push
        ↓
GitHub Actions runs build
        ↓
Site deployed to GitHub Pages
        ↓
Live at ahoro8188-a11y.github.io/pujagupta-editorial
```

You don't need to do anything special — just push, and the automation handles the rest.

## Rollback (Undo Changes)

If something breaks and you need to revert to the previous version:

```bash
git log --oneline
```

Find the commit before your changes, then:

```bash
git revert [commit-hash]
git push origin main
```

GitHub will automatically rebuild with the previous version.

## Quick Reference

| Task | Command |
|------|----------|
| Clone repo | `git clone https://github.com/ahoro8188-a11y/pujagupta-editorial.git` |
| Install dependencies | `npm install` |
| Test locally | `npm run dev` |
| Build for production | `npm run build` |
| Deploy | `git add . && git commit -m "message" && git push origin main` |
| Check deployment status | Visit GitHub Actions tab |
| View live site | https://ahoro8188-a11y.github.io/pujagupta-editorial/ |

## Need Help?

If you run into problems:
1. Check the error message in your terminal
2. Refer to the "Common Issues" section above
3. Check the GitHub Actions logs for deployment errors
4. Reach out to your developer

## Best Practices

✅ **Do:**
- Test locally before pushing
- Write clear commit messages
- Pull latest changes before making edits: `git pull origin main`
- Commit small, focused changes

❌ **Don't:**
- Push directly without testing
- Commit large amounts of unrelated changes at once
- Edit files directly on GitHub (use your computer instead)

---

**Last updated:** 2026-08-11
