# Setup project

```bash
npm init -y
touch .gitignore
# Add git ignore file/directories to the created file
npm i -D typescript ts-node fastify-tsconfig prisma rimraf prettier pretty-quick husky nodemon @types/node @commitlint/{cli,config-conventional}

# Download prettier conf and add its script
wget https://gist.githubusercontent.com/kasir-barati/2bcdeea964f88712eca171adb3fbd979/raw/.prettierrc
wget https://gist.githubusercontent.com/kasir-barati/8b32cf62e69e6f87a6bed899eefe1cb5/raw/.prettierignore
node -e "const { readFileSync, writeFileSync } = require('fs'); const packageJson = JSON.parse(readFileSync('package.json', 'utf-8')); packageJson.scripts = { ...packageJson.scripts, \"format\": \"prettier -w . -u\" }; writeFileSync('package.json', JSON.stringify(packageJson))"
echo '{"extends":["@commitlint/config-conventional"]}' > .commitlintrc.json

# Config husky and add its script
node -e "const { readFileSync, writeFileSync } = require('fs'); const packageJson = JSON.parse(readFileSync('package.json', 'utf-8')); packageJson.scripts = { ...packageJson.scripts, \"postinstall\": \"husky install\" }; writeFileSync('package.json', JSON.stringify(packageJson))"
npx husky install
npx husky add .husky/commit-msg "npx commitlint --edit $1"

touch tsconfig.json
# Add ts configurations in the created tsconfig.json file
node -e "const { readFileSync, writeFileSync } = require('fs'); const packageJson = JSON.parse(readFileSync('package.json', 'utf-8')); packageJson.scripts = { ...packageJson.scripts, \"start:dev\": \"npx nodemon\" }; writeFileSync('package.json', JSON.stringify(packageJson))"
node -e "const { readFileSync, writeFileSync } = require('fs'); const packageJson = JSON.parse(readFileSync('package.json', 'utf-8')); packageJson.scripts = { ...packageJson.scripts, \"build\": \"rimraf ./build && tsc\" }; writeFileSync('package.json', JSON.stringify(packageJson))"

# Config eslint
npm i -D eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
touch .eslintrc .eslintignore
# Add confs in the created files

npm run format
```
