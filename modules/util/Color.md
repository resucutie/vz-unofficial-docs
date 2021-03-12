# Color

Utilities for color editing. Performs most of coloring algorithms, and so optimizing developer's time.

## Importing

```js
// ES6
import { color } from "@vizality/util"

// Commom JS
const { color } = require("@vizality/util")
```



## Functions

#### `blendColors(firstColor, secondColor [, percent = 0.5])`

Finds an color between two colors. Returns a `string` with the hex value

Examples:

```js
$vz.util.color.blendColors("#000000", "#ffffff") // returns "#808080"
$vz.util.color.blendColors("#ff0000", "#ffff00", .75) // returns "#ffbf00"
```



#### `getColorType(color)`

Gets the type of the color. Returns a `string` with 4 possible values: `hex`, `int`, `rgb` and `hsl`

Examples:

```js
$vz.util.color.getColorType("#000000") // returns "hex"
$vz.util.color.getColorType("0, 0, 0") // returns "int"
$vz.util.color.getColorType("rgb(0, 0, 0)") // returns "rgb"
$vz.util.color.getColorType("hsl(0, 0%, 100%)") // returns "hsl"
```



#### `getComplement(color)`

Complements an hex color. Returns a `string` with the corrections

Examples:

```js
$vz.util.color.getComplement("#000") // returns "#000000"
```



#### `getContrastColor(color)`

Check if color is next to white or black, and return a `string`, depending if it's black or not. Here it is a quote from Dustin Perolio explaning the functionality:

> Basically, it returns white or black, depending on the background color. Darker backgrounds will return white, lighter will return black. It's an accessibility thing.

Examples:

```js
$vz.util.color.getContrastColor("#4c7bef") // returns "#fff"
$vz.util.color.getContrastColor("#67c6a1") // returns "#000"
```



#### `getRandomColor([type = "hex"])`

Returns a random color in the hex form (if not specified what type to return)

Example:

```js
$vz.util.color.getRandomColor() // returns "#a04222"
```



#### `rotateHue(color, ammount)`

Applies a hue rotation on the color. The rotation can go from 0º to 360º. Here it is a demonstration:

![Hue circle](https://www.quackit.com/pix/stock/color_wheel_hsl.png)

Examples:

```js
$vz.util.color.rotateHue("#752bba", 180) // returns "#70ba2b"
$vz.util.color.rotateHue("#d6307c", 90) // returns "#cfd630"
$vz.util.color.rotateHue("#205651", 360) // returns "#205651"
```



#### `shadeColor(color, percent)`

Makes a color darker or brighter. Examples:

```js
$vz.util.color.shadeColor("#0ffbe6", 0.5) // returns "#87fdf3"
$vz.util.color.shadeColor("#4a6305", -0.5) // returns "#253203"
$vz.util.color.shadeColor("#9c453c", 1) // returns "#ffffff"
$vz.util.color.shadeColor("#fa5725", -1) // returns "#000000"
```



#### `toHex(color)`

Converts a color (preferably an int, hsl or rgb) to the hex format



#### `toHsl(color)`

Converts a color (preferably an int, hex or rgb) to the hsl format



#### `toInt(color)`

Converts a color (preferably an hsl, hex or rgb) to the int format



#### `toRgb(color)`

Converts a color (preferably an hsl, hex or int) to the rgb format



## Deprecated/Non-functional functions

#### `saturateColor(color, ammount)`

Makes a color more darker or brighter.



## Removed functions

For now, there isn't any function that got removed