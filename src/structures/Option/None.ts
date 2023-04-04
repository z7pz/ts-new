import { IOption } from ".";

export class None implements IOption<any> {
	constructor() {}
	isSomeAnd(_fn: (v: any) => boolean) {
		return false;
	}
	unwrapOr<V>(v: V): V {
		return v;
	}
	unwrapOrElse<V>(fn: () => V) {
		return fn();
	}
	unwrap() {
		throw Error("None has been triggered");
	}
	isSome() {
		return false;
	}

	isNone() {
		return true;
	}
}

export function none() {
	return new None();
}
