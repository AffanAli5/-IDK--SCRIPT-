import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiGuildID",
    version: "1.0.0",
    description: "Returns the emoji guild id",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to return its guild id",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        emoji ?? ctx.emoji
        return Return.success(emoji?.guild.id)
    },
})
