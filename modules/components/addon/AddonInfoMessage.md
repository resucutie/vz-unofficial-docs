# AddonInfoMessage

Renders a message regarding an addon, including the addon icon and name. Typically used in informational toast notifications and modal alerts.

![](C:\Users\WhoDo\AppData\Roaming\Typora\typora-user-images\image-20210519204247126.png)

## Importing

```js
import { AddonInfoMessage } from '@vizality/components/addon';
```

## Example

```jsx
import React, { memo } from 'react';

import { AddonInfoMessage } from '@vizality/components/addon';

export default memo(() => {
  return (
    <AddonInfoMessage
      message='How would you rate the following plugin?'
      addon={vizality.manager.plugins.get('addon-installer')}
    />
  );
});
```

## Parameters

### `message`

Message text

**Type:** `string|React.Component|function(): React.ReactElement`

### `addon`

I recommend getting addons via `vizality.manager['plugins' || 'themes'].get()`.

**Type:** `object`

### `iconSize`

Addon icon size (in pixels)

**Type:** `string`
**Default Value:** `'20'`



`Edited at 19/5/2021`
