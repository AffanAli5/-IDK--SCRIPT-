import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$year",
    version: "1.2.0",
    description: "Returns current year",
    unwrap: true,
    execute: function() {
        return Return.success(new Date().getFullYear())
    }
})