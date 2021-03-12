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

```js
color.blendColors("#000000", "#ffffff") // "#808080"
color.blendColors("#ff0000", "#ffff00", .75) // "#ffbf00"
```



#### `getColorType(color)`

Gets the type of the color. Returns a `string` with 4 possible values: `hex`, `int`, `rgb` and `hsl`

```js
color.getColorType("#000000") // "hex"
color.getColorType("0, 0, 0") // "int"
color.getColorType("rgb(0, 0, 0)") // "rgb"
color.getColorType("hsl(0, 0%, 100%)") // "hsl"
```



#### `getComplement(color)`

Complements an hex color. Returns a `string` with the corrections

```js
color.getComplement("#000") // "#000000"
```



#### `getContrastColor(color)`

Check if color is next to white or black, and return a `string`, depending if it's black or not. Here it is a quote from Dustin Perolio explaining the functionality:

> Basically, it returns white or black, depending on the background color. Darker backgrounds will return white, lighter will return black. It's an accessibility thing.

```js
color.getContrastColor("#4c7bef") // "#fff"
color.getContrastColor("#67c6a1") // "#000"
```



#### `getRandomColor([type = "hex"])`

Returns a random color in the hex form (if not specified what type to return)

```js
color.getRandomColor() // "#a04222"
```



#### `rotateHue(color, ammount)`

Applies a hue rotation on the color. The rotation can go from 0º to 360º. Here it is a demonstration:

![Hue circle](https://www.quackit.com/pix/stock/color_wheel_hsl.png)

```js
color.rotateHue("#752bba", 180) // "#70ba2b"
color.rotateHue("#d6307c", 90) // "#cfd630"
color.rotateHue("#205651", 360) // "#205651"
```



#### `shadeColor(color, percent)`

Makes a color darker or brighter.

```js
color.shadeColor("#0ffbe6", 0.5) // "#87fdf3"
color.shadeColor("#4a6305", -0.5) // "#253203"
color.shadeColor("#9c453c", 1) // "#ffffff"
color.shadeColor("#fa5725", -1) // "#000000"
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