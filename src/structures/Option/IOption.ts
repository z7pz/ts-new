import { None } from "./None";
import { Some } from "./Some";

export interface IOption<T> {
	unwrap(): T;
	unwrapOr<V>(v: V): T | V;
	isNone(): this is None;
	isSome(): this is Some<T>;
}