# $osUptime
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the operating system uptime (seconds)
## Usage
```
$osUptime
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/osUptime.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"
import os from "node:os"

export default new NativeFunction({
    name: "$osUptime",
    version: "1.0.7",
    description: "Returns the operating system uptime (seconds)",
    unwrap: false,
    execute() {
        return Return.success(os.uptime())
    },
})

```
    
</details>