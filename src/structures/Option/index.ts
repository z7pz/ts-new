import { type Some, some } from "./Some";
import { type None, none } from "./None";

export interface IOption<T> {
	unwrap(): T;
	unwrapOr<V>(v: V): T | V;
	unwrapOrElse<V>(fn: TSNew.Fn<T, []>): V | T;
	isNone(): this is None;
	isSome(): this is Some<T>;
	isSomeAnd(fn: TSNew.Fn<boolean, [T]>): this is Some<T>;
	map<R>(fn: TSNew.Fn<R, [T]>): Option<R>;
	or(or: Option<T>): Option<T>;
}

export class Option<T> implements IOption<T> {
	protected readonly value: Some<T> | None;
	constructor(v: T | undefined | null) {
		if (v != undefined || v != null) {
			this.value = some(v);
		} else {
			this.value = none();
		}
	}

	unwrap(): T {
		return this.value.unwrap() as Exclude<
			ReturnType<typeof this.value.unwrap>,
			void
		>;
	}

	unwrapOr<V>(v: V): T | V {
		return this.value.unwrapOr(v);
	}
	unwrapOrElse<V>(fn: TSNew.Fn<V, []>): T | V {
		return this.value.unwrapOrElse(fn);
	}
	isNone(): this is None {
		return this.value.isNone();
	}
	isSome(): this is Some<T> {
		return this.value.isSome();
	}
	isSomeAnd(fn: TSNew.Fn<boolean, [T]>): this is Some<T> {
		return this.value.isSomeAnd(fn);
	}
	map<R>(fn: TSNew.Fn<R, [T]>): Option<R> {
		return this.value.map(fn);
	}
	or(or: Option<T>): Option<T> {
		return this.value.or(or);
	}
}

export { Some, None };
