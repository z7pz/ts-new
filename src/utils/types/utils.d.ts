declare namespace TSNew {
	type Option<T> = import("../../structures/Option").Option<T>;
	type Fn<T, Args extends unknown[] = unknown[]> = (...args: Args) => T;
}
