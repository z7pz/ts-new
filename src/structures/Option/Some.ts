import { IOption } from "./IOption";

export class Some<T> implements IOption<T> {
	value: T;
	constructor(value: T) {
		this.value = value;
	}
	isSomeAnd(fn: (v: T) => boolean) {
		return fn(this.value);
	}
	isSome() {
		return true;
	}

	isNone() {
		return false;
	}
	unwrapOr<V>(_: V): T {
		return this.unwrap();
	}
	unwrapOrElse<V>(_: () => V) {
		return this.unwrap();
	}
	unwrap() {
		return this.value;
	}
}

export function some<T>(v: T) {
	return new Some(v);
}
