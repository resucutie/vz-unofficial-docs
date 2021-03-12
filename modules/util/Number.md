# Time

Utilities for number manipulation

## Importing

```js
// ES6
import { number } from "@vizality/util"

// Commom JS
const { number } = require("@vizality/util")
```

## Functions

#### `assertNumber(input)`

Asserts that the input is an number. If not, it throws an error, otherwise, does nothing

```js
number.assertNumber("h") // Uncaught TypeError: Expected an array but received string.
number.assertNumber(4) // undefined
```

#### `getAverage(numbers)`

Get the average of an array of numbers

```js
let numbers = [100000, 101000, 102000, 103000, 104000, 105000, 106000, 107000, 650000, 1000000, 3000000]
$vz.util.number.getAverage(numbers) // 498000
```

#### `getMedian(numbers)`

Get the median of an array of numbers

```js
let numbers = [100000, 101000, 102000, 103000, 104000, 105000, 106000, 107000, 650000, 1000000, 3000000]
$vz.util.number.getMedian(numbers) // 105000
```

###### Median vs Average

This is a quote from the website [thebalance.com](https://www.thebalance.com/). You can see the original post [here](https://www.thebalance.com/median-vs-average-what-the-difference-2682237) if you wanna learn more

> The median of a set of numbers is that number where half the numbers are lower and half the numbers are higher. In the case of real estate, that means that the median is the price where half the homes sold in any given area that month were cheaper, and half were more expensive than the median.
>
> The average of a set of numbers is the total of those numbers divided by the number of items in that set. The median and the average might be close, but they could also significantly different. It all depends on the numbers.2
>
> 
>
> Here's an example. Take a look at these 11 fictional home prices:
>
> 1. $100,000
> 2. $101,000
> 3. $102,000
> 4. $103,000
> 5. $104,000
> 6. $105,000
> 7. $106,000
> 8. $107,000
> 9. $650,000
> 10. $1 million
> 11. $3 million
>
> The median price of these 11 houses is $105,000. That's arrived at because five houses were lower priced and five were higher priced.
>
> The average price of these 11 houses is $498,000. That's what you get if you add up all those prices and divide by 11.

#### `isNumber(input)`

Checks if the input is an number. It returns `true` if input is a number and returns `false` if not

```js
number.isNumber("h") // false
number.isNumber(6) // true
```
