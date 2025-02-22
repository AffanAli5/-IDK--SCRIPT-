# $pow
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Exponentially multiply multiple numbers
## Usage
```
$pow[...numbers]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
numbers | Number | Numbers to power by | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/pow.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$pow",
    version: "1.0.0",
    description: "Exponentially multiply multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to power by",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return Return.success(numbers.reduce((x, y) => x ** y))
    },
})

```
    
</details>