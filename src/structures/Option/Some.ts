import { IOption } from "./IOption";

export class Some<T> implements IOption<T> {
	value: T;
	constructor(value: T) {
		this.value = value;
	}
	isSomeAnd(fn: (v: T) => boolean): this is Some<T> {
		return fn(this.value);
	}
	isSome(): true {
		return true
	}

	isNone(): false {
		return false
	}
	unwrapOr<V>(_: V): T {
		return this.value;
	}
	unwrap() {
		return this.value;
	}
}

export function some<T>(v: T) {
	return new Some(v);
}


