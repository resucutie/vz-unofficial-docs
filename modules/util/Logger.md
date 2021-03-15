# Color

Utilities for color editing. Performs most of coloring algorithms, and so optimizing developer's time.

## Importing

```js
// ES6
import { logger } from "@vizality/util"

// Commom JS
const { logger } = require("@vizality/util")
```



## Functions

#### `log(options)`

Logs an informational message with a custom style

```js
logger.log({
  labels: [
    { text: 'i like pie', color: '#ff0000' },
    { text: 'hehe', color: '#ffffff' }
  ],
  message: 'I really like pie'
})
```

#### `warn(options)`

Logs an warn message with a custom style

```js
logger.warn({
  labels: [
    { text: 'i like pie', color: '#ff0000' },
    { text: 'hehe', color: '#ffffff' }
  ],
  message: 'I really like pie'
})
```

#### `error(options)`

Logs an error message with a custom style

```js
logger.error({
  labels: [
    { text: 'i like pie', color: '#ff0000' },
    { text: 'hehe', color: '#ffffff' }
  ],
  message: 'I really like pie'
})
```

#### `deprecate(options)`

Logs an deprecate message with a custom style

```js
logger.deprecate({
  labels: [
    { text: 'i like pie', color: '#ff0000' },
    { text: 'hehe', color: '#ffffff' }
  ],
  message: 'I really like pie'
})
```

#### `options` parameters

You've probably seen that all of functions here have the `options` value. Well, `options` is an object with specific parameters, listed in this table:

|    Key    |                        Expected value                        |         Default value         |
| :-------: | :----------------------------------------------------------: | :---------------------------: |
|  `badge`  |               String with an URL for an image                | `'vz-asset://image/logo.png'` |
| `labels`  | Array (object) with labels.<br />Every label should have the `text` and the `color` keys |             `[]`              |
| `message` |                            String                            |                               |

This image shows an example of all parameters in action:

![](https://auser.foundyour.info/da8B673.png)

And with the less information as possible:

![](https://auser-loves.femboy.art/904E44b.png)