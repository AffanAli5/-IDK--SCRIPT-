import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isNumber",
    version: "1.0.0",
    description: "Whether the number is valid",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(_, [n]) {
        return Return.success(!!n && !isNaN(Number(n)))
    },
})
