# $guildBanner
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the guild banner
## Usage
```
$guildBanner
```
---
```
$guildBanner[guild ID;size;extension]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to retrieve the banner | Yes | No
size | Number | The size to use for the image | No | No
extension | String | The extension to use for the image | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildBanner.ts)
    
</summary>
    
```ts
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildBanner",
    version: "1.0.0",
    description: "Returns the guild banner",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the banner",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [g, size, ext]) {
        return Return.success(
            (g ?? ctx.guild)?.bannerURL({
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
        )
    },
})

```
    
</details>