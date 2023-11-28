# Configuration

## Table of Contents

- [Aliases](#aliases)
- [Environment Variables](#environment-variables)
- [Adding new apps](#adding-new-apps)
- [Declaration Files](#declaration-files)
- [Modules](#modules)
- [Namespaces](#namespaces)

## Aliases

Aliases must be defined in two files:

- `webpack.aliases.js`
- `tsconfig.json`

## Environment Variables

Environment variables can be added in:

- `webpack.plugins.js`

```js
const { DefinePlugin } = require('webpack')

module.exports = [
    new DefinePlugin({
        'process.env.APP_PATH': JSON.stringify(process.env.APP_PATH),
    })
]
```

## Declaration Files

### Modules

The following module declarations allow importing into `tsx/ts` files:

- svg `svgmodule.d.ts`
- jpg `jpgmodule.d.ts`
- png `pngmodule.d.ts`

Example:

```tsx
import tommy from '@assets/tommy_portret.png';

const DogPhoto = () => {
    return (
        <img src={tommy} alt='Tommy' />
    );
};
```

### Namespaces

The following declaration allows access to the `process` global variable:

- process `process.d.ts`

Example:

```ts
const APP_PATH = process.env.APP_PATH
```
