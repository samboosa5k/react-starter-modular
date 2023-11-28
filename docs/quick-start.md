# Quick Start

## Table of Contents

- [Prerequisites](#prerequisites)
- [Running the app](#running-the-app)
- [Adding new apps](#adding-new-apps)

## Prerequisites

- [Node.js](https://nodejs.org/en/) >= 14.0.0
- [npm](https://www.npmjs.com/) >= 6.0.0

## Running the app

```bash
$ git clone
$ cd react-starter
$ npm install
$ npm run start:app
```

## Adding new apps

- Verify that `webpack.plugin.js` has the `APP_PATH` environment variable.
- Add a script to `package.json`
- Point to the correct `APP_PATH`.

```json
{
  "scripts": {
    "start:app2": "cross-env NODE_ENV=development APP_PATH=./apps/App2.tsx webpack serve --config webpack.config.dev.js"
  }
}
```

