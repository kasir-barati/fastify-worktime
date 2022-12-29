# Setup project

```bash
npm init -y
touch .gitignore
# Add git ignore file/directories to the created file
npm i -D prettier husky @commitlint/{cli,config-conventional}

# Download prettier conf and add its script
wget https://gist.githubusercontent.com/kasir-barati/2bcdeea964f88712eca171adb3fbd979/raw/.prettierrc
wget https://gist.githubusercontent.com/kasir-barati/8b32cf62e69e6f87a6bed899eefe1cb5/raw/.prettierignore
node -e "const { readFileSync, writeFileSync } = require('fs'); const packageJson = JSON.parse(readFileSync('package.json', 'utf-8')); packageJson.scripts = { ...packageJson.scripts, \"format\": \"prettier -w . -u\" }; writeFileSync('package.json', JSON.stringify(packageJson))"
echo '{"extends":["@commitlint/config-conventional"]}' > .commitlintrc.json

# Config husky and add its script
node -e "const { readFileSync, writeFileSync } = require('fs'); const packageJson = JSON.parse(readFileSync('package.json', 'utf-8')); packageJson.scripts = { ...packageJson.scripts, \"postinstall\": \"husky install\" }; writeFileSync('package.json', JSON.stringify(packageJson))"
npx husky install
npx husky add .husky/commit-msg "npx commitlint --edit $1"

npm run format
```
