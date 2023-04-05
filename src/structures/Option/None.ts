import { IOption } from ".";

export class None implements IOption<any> {
	constructor() {}

	unwrap() {
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
}

export function none() {
	return new None();
}
