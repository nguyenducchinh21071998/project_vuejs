#!bin/bash
dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $dir
cd ../public
find . ! -name 'index.php' -type f -exec rm -f {} +
cd ../frontend/vuejs-ts
npm run build
cd ../../public
mv dist/* ../public/
rm -rf dist
mv index.html spa.blade.php
