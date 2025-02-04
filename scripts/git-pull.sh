#!/bin/sh

echo "Pulling from github" git config --global --add safe.directory /app
git remote set-url origin https://${GH_TOKEN}@github.com/${PUBLIC_GH_REPO}.git
git fetch origin main
git reset --hard origin/main
