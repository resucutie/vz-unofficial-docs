# ContextMenu

Context Menu component mostly used when you right click something

![](https://auser.foundyour.info/95C8Ed9.png)

## Importing

```jsx
import { ContextMenu } from "@vizality/components"
```



## Example

```jsx
<span
    onContextMenu={e => {
        contextMenu.openContextMenu(e, () => {
    		return <ContextMenu.Menu onClose={contextMenu.closeContextMenu}>
				<ContextMenu.Item
        			id="example"
					label="Example"
					action={() => {
						console.log("epic")
					}}
				/>
		        <ContextMenu.Item
    	    		id="example-dangerous"
					label="Dangerous Example"
					color="colorDanger"
					action={() => {
						console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
					}}
				/>
			</ContextMenu.Menu>
		})
    }}
> Stfu </span>
```



## Children

#### `ContextMenu.Menu`

Displays the context menu by itself

###### Parameters

| Parameter |                    Description                     | Expected value |       Default value       |
| :-------: | :------------------------------------------------: | :------------: | :-----------------------: |
| onClose?  |     An action that it will be done when closed     |    Function    | (closes the context menu) |
|  navId?   | The ID of the context menu. Use when really needed |     String     |                           |

#### `ContextMenu.Item`

Displays an clickable item

```jsx
<ContextMenu.Item
    id="memes"
	label="Memes are cool"
    action={() => console.log("Memes are epic")}
/>
```



###### Parameters

| Parameter |                     Description                      |                        Expected value                        | Default value |
| :-------: | :--------------------------------------------------: | :----------------------------------------------------------: | :-----------: |
|    id     |                  The ID of the item                  |                            String                            |               |
|   label   |                 The text of the item                 |                  String \| React Component                   |               |
|  action?  | An action that the context menu will do when clicked | Function([SyntheticEvent](https://pt-br.reactjs.org/docs/events.html)) |               |
|   icon?   |             The icon of the context menu             |                 Function()<React Component>                  |               |
| disabled? |          Makes the context menu unclickable          |                           Boolean                            |     false     |
|  color?   |                The color of the item                 |   [Check all possible values here](#color-possible-values)   |               |

###### Sub context menus

The children of the context menu will be the sub context menu of it.

```jsx
<ContextMenu.Item id="example"
	label="Sub context menu"
>
	<ContextMenu.Item id="example2"
		label="I'm inside a context menu!"
	/>
</ContextMenu.Item>
<ContextMenu.Item id="example25"
	label="The context menu up has an subcontext menu"
/>
```

![](https://auser-have-some.viruses-to.download/04BEa44.png)

###### `color` possible values

As it is known for now, `color` can have two values. Both of them are strings

| Possible values |                           Preview                            |
| :-------------: | :----------------------------------------------------------: |
| `"colorDanger"` |   ![](https://message-logger.is-bannable.xyz/4da0A0c.png)    |
| `"colorBrand"`  | ![](https://auser-have-some.viruses-to.download/AC3eFfc.png) |



#### `ContextMenu.CheckboxItem`

Displays an check box item. Variation of [`ContextMenu.Item`](#contextmenuitem)

```jsx
<ContextMenu.CheckboxItem
    id='owo'
	label='>w<'
	checked={true}
	action={() => {
        console.log("T-thanks for c-checking me >w<")
	}}
/>
```



###### Parameters

| Parameter |                     Description                      |                        Expected value                        | Default value |
| :-------: | :--------------------------------------------------: | :----------------------------------------------------------: | :-----------: |
|    id     |                  The ID of the item                  |                            String                            |               |
|   label   |                 The text of the item                 |                  String \| React Component                   |               |
| checked?  |           Shows if the checkbox is checked           |                           Boolean                            |     false     |
|  action?  | An action that the context menu will do when clicked | Function([SyntheticEvent](https://pt-br.reactjs.org/docs/events.html)) |               |
|   icon?   |             The icon of the context menu             |                 Function()<React Component>                  |               |
| disabled? |          Makes the context menu unclickable          |                           Boolean                            |     false     |
|  color?   |                The color of the item                 |   [Check all possible values here](#color-possible-values)   |               |

#### `ContextMenu.ControlItem`

Needs more studying. Variation of [`ContextMenu.Item`](#contextmenuitem)

#### `ContextMenu.RadioItem`

Displays an radio item. Variation of [`ContextMenu.Item`](#contextmenuitem)

(needs more studying)

#### `ContextMenu.Group`

Makes groups of items

```jsx
<ContextMenu.Group
	label="NaN is weird btw"
>
    <ContextMenu.Item
	    id="nan"
		label="Not an Number is a number"
	/>
</ContextMenu.Group>
```

![](https://guys.i-hacked.financial/80FEBff.png)

###### Parameters

| Parameter |      Description      |      Expected value       |
| :-------: | :-------------------: | :-----------------------: |
|   label   | The text of the group | String \| React Component |

#### `ContextMenu.Separator`

Separator for context menu items

```jsx
<ContextMenu.Separator />
```



## Deprecated/Non-functional functions

For now, there isn't any function that got deprecated



## Removed functions

For now, there isn't any function that got removed



*`Edited at 03/04/2021`*

