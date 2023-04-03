export class Some<T> {
	value: T;
	constructor(value: T) {
		this.value = value;
	}
	isSome(): true {
		return true
	}

	isNone(): false {
		return false
	}
	unwrap() {
		return this.value;
	}
}

export function some<T>(v: T) {
	return new Some(v);
}


