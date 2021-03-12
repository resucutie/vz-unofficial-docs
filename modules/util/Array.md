# Array

Utilities for arrays, making easy to manipulate them

## Importing

```js
// ES6
import { color } from "@vizality/util"

// Commom JS
const { color } = require("@vizality/util")
```



## Functions

#### `assertArray(input)`<span id="AssertArrayHyperlink"><span>

Asserts that the input is an array. If not, it throws an error, otherwise, nothing

Examples:

```js
$vz.util.array.assertArray(["bruh", "bRuh"]) // returns undefined
$vz.util.array.assertArray("h") // Uncaught TypeError: Expected an array but received string.
```

#### `getRandomItem(array)`

Gets an random item from an array. It uses [lodash's sample function](https://lodash.com/docs/4.17.15#sample) for randomizing

Examples:

```js
$vz.util.array.getRandomItem([0, 2, 4, 8, 16, 32, 64]) // 32
$vz.util.array.getRandomItem([0, 2, 4, 8, 16, 32, 64]) // 16
$vz.util.array.getRandomItem([0, 2, 4, 8, 16, 32, 64]) // 16
$vz.util.array.getRandomItem([0, 2, 4, 8, 16, 32, 64]) // 2
$vz.util.array.getRandomItem([0, 2, 4, 8, 16, 32, 64]) // 0
$vz.util.array.getRandomItem([0, 2, 4, 8, 16, 32, 64]) // 32
```

#### `isArray(input)`

Checks if the input is an array. But instead of outputting an error like what happened in [assertArray](#AssertArrayHyperlink), it returns `true` if input is an array and returns `false` if not

Examples:

````js
$vz.util.array.isArray("message logger go brrrr") // false
$vz.util.array.isArray(["message logger go brrrr", 2, {a: ["no"]}, false]) // true

````

#### `isEmprtArray(input)`

Check if array is empty. Retuns `true` if yes and `false` if no

Examples:

``` js
$vz.util.array.isEmptyArray([]) // true
$vz.util.array.isEmptyArray([0]) // false

//Actual example
if($vz.util.array.isEmptyArray([])) console.error("Array is empty!")
```

#### (async) `toSentence(array [, lastItemConnector = 'and'])`

This function returns an `Promise<string>` joining the array elements with `" and "` or `" or "` behind the elements.

Example:

```js
$vz.util.array.toSentence(["pain", "world"], "or") // Promise<"pain or world">
$vz.util.array.toSentence(["pain", "world"], "and") // Promise<"pain and world">
$vz.util.array.toSentence([0, 1], "or") // Promise<undefined>
```



## Deprecated/Non-functional functions

For now, there isn't any deprecated functions



## Removed functions

For now, there isn't any function that got removed