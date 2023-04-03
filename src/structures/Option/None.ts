
export class None {
	constructor() {
	}
	unwrap() {
		throw Error("None has been triggered")
	}
	isSome(): false {
		return false;
	}

	isNone(): true {
		return true;
	}
}

export function none() {
	return new None;
}

