#!/bin/bash
# Deploy to GitHub Pages (user or org site: https://<username>.github.io/pujagupta-editorial/)
# Usage: bash deploy.sh
set -e
BASE_PATH="/pujagupta-editorial/" pnpm build:gh
pnpm deploy:gh
echo ""
echo "Deployed! Your site will be live at:"
echo "  https://ahoro8188-a11y.github.io/pujagupta-editorial/"
