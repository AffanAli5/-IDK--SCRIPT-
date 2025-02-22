"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emoji_1 = require("../properties/emoji");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newEmoji",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a emoji instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: emoji_1.EmojiProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return structures_1.Return.success(emoji_1.EmojiProperties[prop](ctx.states?.emoji?.new, sep));
    },
});
//# sourceMappingURL=newEmoji.js.map