declare namespace TSNew {
	type Option<T> = import("../../structures/Option").IOption<T>;
	type Fn<T, Args extends unknown[] = unknown[]> = (...args: Args) => T;
}
