#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://DanielLi0206.github.io
# git push -f git@github.com:DanielLi0206/DanielLi0206.github.io.git main

# if you are deploying to https://DanielLi0206.github.io/trident-tech-test
git push -f git@github.com:DanielLi0206/trident-tech-test.git main:gh-pages

cd -