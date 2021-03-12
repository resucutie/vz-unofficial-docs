# String

Utilities for string manipulation

## Importing

```js
// ES6
import { string } from "@vizality/util"

// Commom JS
const { string } = require("@vizality/util")
```

## Functions

#### `assertString(input)`

Check if input is a string. If not, outputs an error, otherwise do nothing

Example:

```js
string.assertString(true) // Uncaught TypeError: Expected a string but received boolean.
string.assertString("nope") // undefined
```

#### `chunkText(text, numberOfCharacters)`

Divides text by sections of `numberOfCharacters`