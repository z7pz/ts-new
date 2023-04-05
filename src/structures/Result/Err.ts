import { Option } from "structures/Option";
import { IResult } from ".";
import { Ok } from "./Ok";

export class Err<E> implements IResult<undefined, E> {
	protected readonly err: E;
	constructor(v: E) {
		this.err = v;
	}
	isOk(): this is Ok<undefined> {
		throw new Error("Method not implemented.");
	}
	isErr(): this is any {
		throw new Error("Method not implemented.");
	}
	unwrap(): undefined {
		throw new Error("Method not implemented.");
	}
	ok(): Option<undefined> {
		throw new Error("Method not implemented.");
	}
}

export function err<E>(v: E): Err<E> {
	return new Err(v);
}
