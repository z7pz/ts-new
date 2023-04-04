import { IOption } from "./IOption";
import { Some } from "./Some";

export class None implements IOption<any> {
	constructor() {}
	isSomeAnd(_fn: (v: any) => boolean): this is Some<any> {
		return false
	}
	unwrapOr<V>(v: V): V {
		return v;
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
