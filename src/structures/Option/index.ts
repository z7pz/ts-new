import { type Some, some } from "./Some";
import { type None, none } from "./None";

export interface IOption<T> {
	unwrap(): T;
	unwrapOr<V>(v: V): T | V;
	unwrapOrElse<V>(fn: TSNew.Fn<T, []>): V | T;
	isNone(): this is None;
	isSome(): this is Some<T>;
	isSomeAnd(fn: TSNew.Fn<boolean, [T]>): this is Some<T>;
	map<R>(fn: TSNew.Fn<R, [T]>): IOption<R>;
	or(or: IOption<T>): IOption<T>;
	iter(): Generator<T>;
	[Symbol.iterator](): Generator<T>;
}

export function Option<T>(v: T | undefined | null): IOption<T> {
	if (v != undefined || v != null) {
		return some(v);
	} else {
		return none();
	}
}

export { Some, None };