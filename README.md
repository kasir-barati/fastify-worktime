# Setup project

```bash
npm init -y
touch .gitignore
# Add git ignore file/directories to the created file
npm i -D typescript ts-node fastify-tsconfig pino-pretty prisma rimraf prettier pretty-quick husky nodemon @types/node @commitlint/{cli,config-conventional}
npx prisma init --datasource-provider postgresql

# Download prettier conf and add its script
wget https://gist.githubusercontent.com/kasir-barati/2bcdeea964f88712eca171adb3fbd979/raw/.prettierrc
wget https://gist.githubusercontent.com/kasir-barati/8b32cf62e69e6f87a6bed899eefe1cb5/raw/.prettierignore
npm pkg set scripts.format="prettier -w . -u"
echo '{"extends":["@commitlint/config-conventional"]}' > .commitlintrc.json

# Config husky and add its script
npm pkg set scripts.prepare="husky install"
npx husky install
npx husky add .husky/commit-msg "npx commitlint --edit $1"
npx husky add .husky/pre-commit "npm run pretty-quick --staged && yarn format:prisma && npm run lint"

touch tsconfig.json
# Add ts configurations in the created tsconfig.json file
npm pkg set scripts.start\:dev"="npx nodemon"
npm pkg set scripts.build="rimraf ./build && tsc"

# Config eslint
npm i -D eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
touch .eslintrc .eslintignore
# Add confs in the created files

npm i fastify fastify-zod zod zod-to-json-schema fastify-jwt fastify-swagger axios @prisma/client @fastify/env @fastify/autoload argon2

# Configure Jest for fastify project
npm install -D jest ts-jest @types/jest
my-touch tests/tsconfig.test.json
echo "test('OK', () => { expect(2).toEqual(2) });" > tests/user.test.ts
npm pkg set scripts.test="jest"
npx ts-jest config:init

npm run format
```

# Start app

```bash
npm ci
# To generate soly types
npx prisma generate
# To generate new migration
npx prisma migrate dev --name name of the migration
# To run the postgres container
docker-compose up -d
npm run start:dev
curl --location --request POST 'http://127.0.0.1:3000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Kasir",
    "email": "kasir.barati@gmail.com",
    "password": "realy long password without complexity is better than complex passwords from security point of view"
}'
```
