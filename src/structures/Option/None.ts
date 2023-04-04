import { IOption } from "./IOption";

export class None implements IOption<any> {
	constructor() {}
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
