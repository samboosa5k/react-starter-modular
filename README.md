# React Starter

This starter kit is a boilerplate for React, Typescript, GSAP and Styled-Components.

The folder `apps` is at the same level as `src`, and allows smaller front-end apps to be developed separately.

## Prerequisites

- [Node.js](https://nodejs.org/en/) >= 14.0.0
- [npm](https://www.npmjs.com/) >= 6.0.0

## Quick Start

For starting `apps/App.tsx`:

```bash
$ git clone
$ cd react-starter
$ npm install
$ npm run start:app
```

For adding/starting new apps, make sure to modify the `package.json` file to point to the correct `APP_PATH`.

```json
{
  "scripts": {
    "start:app2": "cross-env NODE_ENV=development APP_PATH=./apps/App2.tsx webpack serve --config webpack.config.dev.js"
  }
}
```

## Features

### Libraries

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Gsap](https://greensock.com/gsap/)
- [Webpack](https://webpack.js.org/)

### Configuration

- TS aliases
- Prettier
- Eslint

### Miscellaneous

- svg module declaration
- jpg module declaration
- png module declaration
- process.env declaration

## Contributors

- [Jasper](https://github.com/samboosa5k) - Maintainer of this repository

## Resources

- [Codesbiome](https://github.com/codesbiome) - Author of the original boilerplate
- [Boilerplate Template](https://github.com/codesbiome/react-webpack-typescript-2023) - The repo where the 2022 version
  of the boilerplate was.
