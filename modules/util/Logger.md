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

|   Key   |     Description     |      Expected value      |         Default value         |
| :-----: | :-----------------: | :----------------------: | :---------------------------: |
| badge?  |  URL of the badge   |          String          | `'vz-asset://image/logo.png'` |
| labels? | List of all labels. | Array<[labels](#labels)> |             `[]`              |
| message | Message of the text |          String          |                               |

This image shows an example of all parameters in action:

![](https://auser.foundyour.info/da8B673.png)

And with the less information as possible:

![](https://auser-loves.femboy.art/904E44b.png)

###### labels

You've notices that there is some "badges" on the logger. Those are called labels, and you can check all possible values here:

|  Key   |        Description        |  Expected value   | Default value |
| :----: | :-----------------------: | :---------------: | :-----------: |
|  text  | Text to show on the label |      String       |               |
| color? |    Color of the label     | String (hex code) | Random color  |



## Deprecated/Non-functional functions

For now, there isn't any deprecated functions



## Removed functions

For now, there isn't any function that got removed



*`Edited at 19/03/2021`*