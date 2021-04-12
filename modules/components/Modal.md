# Modal

Modal is discord's component to render modals. It is different from [`@vizality/modal`](../modal.md), that launches an modal instead



## Importing

```jsx
import { Modal } from "@vizality/components"
```



## Example

```jsx
import { open } from "@vizality/modal"
import { Modal, FormTitle, Button } from "@vizality/components"

modal.open(() => <Modal size={Modal.Sizes.SMALL}>
	<Modal.Header>
		<FormTitle tag="h4">Bruh</FormTitle>
		<Modal.CloseButton onClick={modal.close}/>
	</Modal.Header>
	<Modal.Content>
		<div>hi</div>
	</Modal.Content>
	<Modal.Footer>
		<Button
			size={Button.Sizes.MEDIUM}
			color={Button.Colors.BRAND}
			look={Button.Looks.FILLED}
			onClick={modal.close}
		>epic</Button>
	</Modal.Footer>
</Modal>)
```



## Owned value 

When summoned an `Modal` as its original form, it will have this look as default:

![](https://auser-does-some.shitposting.org/cBFd3Ec.png)

The default size is `SMALL` if it wasn't applied anything in the `size` propriety

Speaking of propriets, the only containing propriety is the `size` one



## Children

#### `Modal.CloseButton`

A close button. Nothing special. Also it doesn't have any functions

![](https://auser.foundyour.info/EfE1Fd7.png)

Example with an closing functionality

```jsx
<Modal.CloseButton onClick={modal.close}/>
```

#### `Modal.Header`

The header of the modal

![](https://auser.ipgrabber.link/EeaAde4.png)

```jsx
<Modal.Header>
	<FormTitle tag="h4">Bruh</FormTitle>
	<Modal.CloseButton onClick={modal.close}/>
</Modal.Header>
```

#### `Modal.Content`

The content of the modal

![](https://message-logger.is-bannable.xyz/fF291f5.png)

```jsx
<Modal.Content>
	<div>hi</div>
</Modal.Content>
```

#### `Modal.Footer`

The footer of the modal

![](https://auser.ipgrabber.link/715EEE5.png)

```jsx
<Modal.Footer>
	<Button
		size={Button.Sizes.MEDIUM}
		color={Button.Colors.BRAND}
		look={Button.Looks.FILLED}
		onClick={modal.close}
	>epic</Button>
</Modal.Footer>
```

#### `Modal.Sizes`

Object with all sizes of the modal

Here it is a table with all possible sizes:

|  Value   |                          Result                          |
| :------: | :------------------------------------------------------: |
| `SMALL`  |        ![](https://imagine.pxl.black/ABeCCf1.png)        |
| `MEDIUM` | ![](https://auser-does-some.shitposting.org/61Ce6a6.png) |
| `LARGE`  |        ![](https://imagine.pxl.black/57c8ae7.png)        |



## Deprecated/Non-functional functions

For now, there isn't any function that got deprecated



## Removed functions

For now, there isn't any function that got removed



*`Edited at 11/04/2021`*

