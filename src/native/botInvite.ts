import { OAuth2Scopes, PermissionFlagsBits, PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botInvite",
    version: "1.0.0",
    description: "Returns a bot's invite link",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "perms",
            description: "The perms for the invite link",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [perms]) {
        return Return.success(
            ctx.client.generateInvite({
                scopes: [OAuth2Scopes.Bot],
                permissions: (perms as PermissionsString[]) || ["Administrator"],
            })
        )
    },
})
