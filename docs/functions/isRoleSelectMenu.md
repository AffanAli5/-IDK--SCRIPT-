# $isRoleSelectMenu
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether the context is a role select menu
## Usage
```
$isRoleSelectMenu
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isRoleSelectMenu.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isRoleSelectMenu",
    version: "1.0.0",
    description: "Returns whether the context is a role select menu",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.interaction?.isRoleSelectMenu()))
    },
})

```
    
</details>