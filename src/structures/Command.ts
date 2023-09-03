import { ClientEvents } from "discord.js"
import { Compiler, IExtendedCompilationResult } from "../core/Compiler"

export type CommandType = keyof ClientEvents

export interface ICommand {
    name?: string
    type: CommandType
    code: string
    guildOnly?: boolean
    unprefixed?: boolean
    aliases?: string[]
    [x: PropertyKey]: unknown
}

export interface ICompiledCommand {
    name?: IExtendedCompilationResult
    code: IExtendedCompilationResult
}

export class Command {
    public readonly compiled: ICompiledCommand

    public constructor(public readonly data: ICommand, public unloadable = false) {
        this.compiled = {
            name: Compiler.compile(data.name),
            code: Compiler.compile(data.code)
        }
    }

    public get name() {
        return this.data.name
    }

    public get type() {
        return this.data.type
    }
}