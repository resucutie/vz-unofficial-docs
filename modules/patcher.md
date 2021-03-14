# Patcher

Patches discord's function to modify the behavior of it



## Functions

#### `getPatchesByCaller([caller = $vz.util.file.getCaller()])`

Returns any patches under the specified patchId.

###### Importing

```js
// ES6
import { getPatchesByCaller } from "@vizality/patcher";

// Commom JS
const { getPatchesByCaller } = require("@vizality/patcher");
```

###### Example

```js
getPatchesByCaller('plugin-installer');
```

#### `patch(id, moduleToPatch, func, patchFunction, type = 'after', { failSave = true } = {})`

The method used to patch a function in a module.

###### Importing

```js
// ES6
import { patch } from "@vizality/patcher";

// Commom JS
const { patch } = require("@vizality/patcher");
```

###### Usage

```js
patch("patchId", module, "functionName", (args, res) => {
	/* Code */
});
```

###### Examples

```jsx
import { ContextMenu } from "@vizality/components"
const MessageContextMenu = getModule(m => m?.default?.displayName === "MessageContextMenu");
patch("example-message-context-menu", MessageContextMenu, "default", (args, res) => {
	res.props.children.push(
		<ContextMenu.Group>
			<ContextMenu.Item
				label="Test Item"
				id="test-item"
				action={() => console.log("Hello!")}
			/>
        </ContextMenu.Group>
    )
});
```

```js
patch("example-message-send", getModule("sendMessage"), "sendMessage", (args, res) => {
	args[1].content = "hi!";
});
```

###### Values

|    Strings    |                         Explanation                          |           Available/Expected values            |   Default value   |
| :-----------: | :----------------------------------------------------------: | :--------------------------------------------: | :---------------: |
|      id       | The ID of the patch, so Vizality can unpatch when the plugin is disabled |                     String                     |                   |
| moduleToPatch |                     The module to patch                      | Object, specifically one gotten from getModule |                   |
|     func      |                  The function name to patch                  |                     String                     |                   |
| patchFunction |                      The code to insert                      |              Function (args, res)              |                   |
|     type      | If it should patch before or after the function is initiated |                     String                     | "before", "after" |
| { failSave }  | According to Strencher, if any patch throws more than 5 errors, that option will unpatch automatically to prevent crash loops |                     Object                     |       true        |

###### Notes

* patchFunction returns `res` or `args`. Automatically Vizality does that

#### `patches`

Returns all patches. (only use for debugging purposes)

```js
$vz.patcher.patches
```

#### `unpatchAll(caller)`

The method used to unpatch all patches by a patchId.

###### Importing

```js
// ES6
import { unatchAll } from "@vizality/patcher";

// Commom JS
const { unpatchAll } = require("@vizality/patcher");
```

###### Examples

```js
unpatchAll("example-message-context-menu");
```

```js
unpatchAll("example-message-send");
```



## Deprecated/Non-functional functions

`unpatch(caller)`

The method used to unpatch a patch by its patchId.

###### Importing

```js
// ES6
import { unatch } from "@vizality/patcher";

// Commom JS
const { unpatch } = require("@vizality/patcher");
```

###### Examples

```js
unpatch("example-message-context-menu");
```

###### Notes

* That was deprecated because Vizality now automatically unpatches all patches when a plugin is disabled
* It is now an alias to unpatchAll



## Removed functions

For now, there isn't any function that got removed



*`Edited at 13/03/2021`*