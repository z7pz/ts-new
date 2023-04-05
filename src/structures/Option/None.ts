import { IOption, Option } from ".";

export class None<T = any> implements IOption<T> {
	constructor() {}
	unwrap(): T {
		throw Error("Unwrap called on None");
	}
	unwrapOr<V>(v: V): V {
		return v;
	}
	unwrapOrElse<V>(fn: TSNew.Fn<V, []>) {
		return fn();
	}
	isNone(): true {
		return true;
	}
	isSome(): false {
		return false;
	}
	isSomeAnd(_fn: TSNew.Fn<boolean, [any]>): false {
		return false;
	}
	map<R>(_fn: TSNew.Fn<R, [T]>): Option<R> {
		return this as unknown as Option<R>;
	}
	or(or: Option<T>): Option<T> {
		return or;
	}
	*iter(): Generator<never> {
		// nothing to yield
	}
	*[Symbol.iterator](): Generator<never> {
		// nothing to yield
	}
}

export function none() {
	return new None();
}
