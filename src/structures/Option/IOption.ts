import { None } from "./None";
import { Some } from "./Some";

export interface IOption<T> {
	unwrap(): T;
	unwrapOr<V>(v: V): T | V;
	unwrapOrElse<V>(fn: () => V): V | T;
	isNone(): this is None;
	isSome(): this is Some<T>;
	isSomeAnd(fn: (v: T) => boolean): this is Some<T>;
}