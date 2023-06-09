import { IOption } from "structures/Option";
import { Err, err } from "./Err";
import { type Ok, ok } from "./Ok";
export interface IResult<T, E> {
	isOk(): this is Ok<T>;
	isErr(): this is Err<E>;
	unwrap(): T;
	ok(): IOption<T>;
}

export class Result<T, E> implements IResult<T, E> {
	protected readonly value: Err<E> | Ok<T>;
	constructor(fn: TSNew.Fn<T>) {
		try {
			this.value = ok(fn());
		} catch (e: unknown) {
			// FIXME
			this.value = err(e as E);
		}
	}
	isOk(): this is Ok<T> {
		throw new Error("Method not implemented.");
	}
	isErr(): this is Err<E> {
		throw new Error("Method not implemented.");
	}
	unwrap(): T {
		throw new Error("Method not implemented.");
	}
	ok(): IOption<T> {
		throw new Error("Method not implemented.");
	}
	
}

export  function result<T>(fn: TSNew.Fn<T>) {
	return new Result(fn);
}