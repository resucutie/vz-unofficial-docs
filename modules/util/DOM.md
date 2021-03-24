# DOM

Utilities for DOM manipulation



## Functions

#### `createElement(type, props)`

Creates an DOM element. Different from [Document.createElement()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement), you can set properties on creating

`type` is the DOM element name to create

`props` is an object that contains all props to add

```js
dom.createElement("button", {disabled: "disabled", pov: "yis"}) // <button disabled></button>
dom.createElement("button", {disabled: "disabled", pov: "yis"}).pov // yis
```

#### `getCssCustomProperty(varName, element = document.documentElement)`

Get an CSS variable's value

`varName` is variable's name

`element` is an DOM component case you wanna check the properties inside an specific element

```js
dom.getCssCustomProperty("header-primary") // "#fff"
```

#### `getElementDimensions(node)`

Get an element's dimensions

`node` is an DOM component

```js
dom.getElementDimensions(document.querySelector('.akaBadge-1M-1Gw')) // {width: 44, height: 16}
```

#### `getRealElement(element)`

Get an element if it was updated

`element` is the DOM component

```js
const element = document.querySelector('#message-tts')
console.log(element) // <div class="item-1tOPte labelContainer-1BLJti colorDefault-2K3EoJ" role="menuitem" id="message-tts" tabindex="-1">…</div>
// (this is where you hover the context menu element)
await time.sleep(3e3)
dom.getRealElement(element) // <div class="item-1tOPte labelContainer-1BLJti colorDefault-2K3EoJ focused-3afm-j" role="menuitem" id="message-tts" tabindex="-1">…</div>
```

#### `joinClassNames(...items)`

Join class names

`items` is the array of elements to join

```js
dom.joinClassNames(["no", "bruh", "yes"]) // "no bruh yes"
```

#### `injectShadowStyles(shadowRootElement, insertBeforeSelector, styles)`

*to be written*

#### `setCssCustomProperty(varName, value, element = document.documentElement)`

Create/set an CSS variable

`varName` is variable's name

`value` is the variable's value

`element` is an DOM component case you wanna check the properties inside an specific element

```js
dom.setCssCustomProperty("header-primary", "#aaa")
```

#### (async) `waitForElement(querySelector, all = false)`

Wait for a element to spawn

`querySelector` is an CSS selector

`all` sets if it should return all elements found

```js
await dom.waitForElement('.akaBadge-1M-1Gw') // <div class="akaBadge-1M-1Gw textBadge-1iylP6 base-PmTxvP baseShapeRound-1Mm1YW">AKA</div>
```



## Deprecated/Non-functional functions

#### `captureElement(selector)`

According to one of Vizality's comments on code, it isn't working on Windows

#### `injectScript()`

It should inject an script. It doesn't have any logic for now

#### `injectStylesheet()`

It should inject CSS code. It doesn't have any logic for now



## Removed functions

For now, there isn't any function that got removed



*`Edited at 19/03/2021`*