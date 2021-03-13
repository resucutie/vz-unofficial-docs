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

```js
string.assertString(true) // Uncaught TypeError: Expected a string but received boolean.
string.assertString("nope") // undefined
```

#### `chunkText(text, numberOfCharacters)`

Divides text by sections of `numberOfCharacters`. Returns an array

```js
string.chunkText("stuff", 2) // ["st", "uf", "f"]
string.chunkText("stuff", 1) // ["s", "t", "u", "f", "f"]
string.chunkText("stuff", 3) // ["stu", "ff"]
```

#### `getRandomString(length)`

Gets an alphabetical/numeric random character. Returns an string

```js
string.getRandomString(8) // "GI68TEpl"
string.getRandomString(20) // "XdXpqtiJAlG8mpV0HnHa"
string.getRandomString(5) // "iIzQ7"
```

#### `isPlural(text)`

Checks if string is in the plural form

```js
string.isPlural("chair") // false
string.isPlural("chairs") // true
```

#### `isSingular(text)`

Checks if string is in the singular form

```js
string.isSingular("chair") // true
string.isSingular("chairs") // false
```

#### `isString(input)`

Checks if the input is an string. Returns `true` if input is a string and returns `false` if not

````js
string.isString("message logger go brrrr") // true
string.isString(true) // false
string.isString(69) // false
string.isString({no: "pe"}) // false
````

#### `isUrl(text)`

Checks if text is a URL. Returns `true` if yes and `false` if no

```js
string.isUrl("binguscord") // false
string.isUrl("https://imagine-having.homo.services/1f4AAFA.png") // true
string.isUrl("imagine-having.homo.services/1f4AAFA.png") // false. Note that it didn't considered as an URL in this case
```

#### `owoifyText(text)`

\*waises paw* Makes the text cute owo. Wetuwns a-an stwing uwu. And nyow i wannya hug somebody womebody >w<

```js
string.owoifyText("Pillows") // Piwwows
string.owoifyText("Bean bag") // *blushes* Bean b-bag (▰˘v˘▰)
string.owoifyText("Vizality is the best client") // "Vizawity Wizawity is the best cwient"
```

#### `stripDiacritics(text)`

Removes all diacritics from a text.

```js
string.stripDiacritics("à ñ ã ç") // "a n a c"
string.stripDiacritics("wê hávè sómê fãñçy téxt") // "we have some fancy text"
```

#### `toCamelCase(text)`

Removes all spaces and make the first letter of every word uppercase

```js
string.toCamelCase("this is probally a pretty big text and maybe hard to read") // "thisIsProballyAPrettyBigTextAndMaybeHardToRead"
string.toCamelCase("install vizality lol") // "installVizalityLol"
```

#### `toCamelCase(text)`

Removes all spaces and make the first letter of every word uppercase

```js
string.toCamelCase("this is probally a pretty big text and maybe hard to read") // "thisIsProballyAPrettyBigTextAndMaybeHardToRead"
string.toCamelCase("install vizality lol") // "installVizalityLol"
```

#### `toDotCase(text)`

adds.a.dot.for.every.word.returns.a.string

```js
string.toDotCase("minecraft is a nice game") // minecraft.is.a.nice.game
```

#### `toHash(text)`

Encrypts a string into a hash. Returns a string with the hash

```js
string.toHash("bye bye") // "7574707422763958"
string.toHash("this is some nice message btw") // "4551786520029978"
```

#### `toKebabCase(text)`

adds-a-hyphen-for-every-word-returns-a-string

```js
string.toKebabCase("minecraft is a nice game") // "minecraft-is-a-nice-game"
```

#### `toPascalCase(text)`

MakesEveryWordUppercaseAndItAlsoRemovesTheSpacesReturnsAnString

```js
string.toPascalCase("minecraft is a nice game") // "MinecraftIsANiceGame"
```

#### `toPathCase(text)`

makes/text/to/look/like/an/posix/path

```js
string.toPathCase("minecraft is a nice game") // "minecraft/is/a/nice/game"
```

#### `toPlural(text)`

Makes your string in the plural form

```js
string.toPlural("pie") // "pies"
string.toPlural("magazine") // "magazines"
```

#### `toSentenceCase(text)`

Makes the first letter of the string uppercase

```js
string.toSentenceCase("minecraft is a nice game") // "Minecraft is a nice game"
string.toSentenceCase("free roblux 100% no virus") // "Free roblux 100 no virus"
```

#### `toSingular(text)`

Makes your string in the singular form

```js
string.toPlural("pies") // "pie"
string.toPlural("magazines") // "magazine"
```

#### `toSnakeCase(text)`

replaces_all_spaces_by_underlines

```js
string.toSnakeCase("minecraft is a nice game") // "minecraft_is_a_nice_game"
```

#### `toTitleCase(text)`

Makes Only The First Letter Of The Words Uppercased

```js
string.toTitleCase("minecraft is a nice game") // "Minecraft Is A Nice Game"
```



## Deprecated/Non-functional functions

For now, there isn't any deprecated functions



## Removed functions

For now, there isn't any function that got removed



*`Edited at 13/03/2021`*