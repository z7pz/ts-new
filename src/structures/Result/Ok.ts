import { IOption } from "structures/Option";
import { IResult } from ".";
import { Err } from "./Err";

export class Ok<T> implements IResult<T, undefined> {
	value: T;
	constructor(v: T) {
		this.value = v;
	}
	isOk(): this is Ok<T> {
		throw new Error("Method not implemented.");
	}
	isErr(): this is Err<undefined> {
		throw new Error("Method not implemented.");
	}
	unwrap(): T {
		throw new Error("Method not implemented.");
	}
	ok(): IOption<T> {
		throw new Error("Method not implemented.");
	}
}

export function ok<T>(v: T): Ok<T> {
	return new Ok(v);
}
