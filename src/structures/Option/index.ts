import { type Some, some } from "./Some";
import { type None, none } from "./None";
export class Option<T> {
	protected readonly value: Some<T> | None;
	constructor(v: T | undefined | null) {
		if (v != undefined || v != null) {
			this.value = some(v);
		} else {
			this.value = none();
		}
	}
	unwrap() {
		return this.value.unwrap() as Exclude<
			ReturnType<typeof this.value.unwrap>,
			void
		>;
	}

	unwrapOr(v: T): T {
		return this.unwrapOr(v);
	}
	isSome(): this is Some<T> {
		return this.value.isSome();
	}
	isNone(): this is None {
		return this.value.isNone();
	}
}
