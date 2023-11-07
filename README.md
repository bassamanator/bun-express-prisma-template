# Express API Starter with Typescript

Original template found here: https://github.com/w3cj/express-api-starter.git. I've heavily modified it so that you can have an excellent development experience.

## How to use this template

1. You need `bun` package manager installed on your system https://bun.sh/.
2. Some of the scripts make use of Node Version Manager (`nvm`) https://github.com/nvm-sh/nvm. If you don't want to install it, just search for `nvm` in this repo and adjust.

## Utilities

This repo has [prisma](https://prisma.io) integrated for you.

### API Server utilities

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Development utilities

- [typescript](https://www.npmjs.com/package/typescript)
  - TypeScript is a language for application-scale JavaScript.
- [ts-node](https://www.npmjs.com/package/ts-node)
  - TypeScript execution and REPL for node.js, with source map and native ESM support.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [typescript-eslint](https://typescript-eslint.io/)
  - Tooling which enables ESLint to support TypeScript.
  - [eslint-plugin-typescript-sort-keys](https://github.com/infctr/eslint-plugin-typescript-sort-keys)
- [jest](https://www.npmjs.com/package/jest)
  - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.
- [prettier](https://prettier.io/)
  - An opinionated code formatter
  - [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
- [husky](https://typicode.github.io/husky/)
  - Husky improves your commits and more 🐶 woof!
  - You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push.
- [lint-staged](https://github.com/lint-staged/lint-staged)
  - Run linters against staged git files and don't let 💩 slip into your code base!

## Setup

- You can use this script after you first clone this repo to get things up and running.
- You can use this script to get a `production` server up and running.

```sh
bun run full-start
```

This script will do the following for you:

```sh
bun run clean # delete node_modules/
bun install
bun run prisma-generate # generate prisma client
bun run build
bun run start
```

## Production

```sh
bun run start
```

## Development

```sh
bun run dev
```

## Lint

```sh
bun run lint
```

## Test

```sh
bun run test
```
