import { IOption, Option } from ".";

export class Some<T> implements IOption<T> {
	value: T;
	constructor(value: T) {
		this.value = value;
	}
	unwrap(): T {
		return this.value;
	}
	unwrapOr<V>(_: V): T {
		return this.unwrap();
	}
	unwrapOrElse<V>(_: TSNew.Fn<V, []>): T {
		return this.unwrap();
	}
	isNone(): false {
		return false;
	}
	isSome(): true {
		return true;
	}
	isSomeAnd(fn: TSNew.Fn<boolean, [T]>): this is Some<T> {
		return fn(this.value);
	}
	map<R>(fn: TSNew.Fn<R, [T]>): Option<R> {
		return new Option(fn(this.value));
	}
	or(_or: Option<T>): Option<T> {
		return this as unknown as Option<T>;
	}
}

export function some<T>(v: T) {
	return new Some(v);
}
