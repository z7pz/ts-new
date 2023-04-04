import { type Some, some } from "./Some";
import { type None, none } from "./None";

export interface IOption<T> {
	unwrap(): T;
	unwrapOr<V>(v: V): T | V;
	unwrapOrElse<V>(fn: () => V): V | T;
	isNone(): this is None;
	isSome(): this is Some<T>;
	isSomeAnd(fn: (v: T) => boolean): this is Some<T>;
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

	unwrap() {
		return this.value.unwrap() as Exclude<
			ReturnType<typeof this.value.unwrap>,
			void
		>;
	}

	unwrapOr<V>(v: V): T | V {
		return this.value.unwrapOr(v);
	}
	unwrapOrElse<V>(fn: () => V): T | V {
		return this.value.unwrapOrElse(fn);
	}
	isSome(): this is Some<T> {
		return this.value.isSome();
	}
	isNone(): this is None {
		return this.value.isNone();
	}
	isSomeAnd(fn: (v: T) => boolean): this is Some<T> {
		return this.value.isSomeAnd(fn);
	}
}


export {
	Some,
	None
}