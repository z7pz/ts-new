/// <reference path="./utils.d.ts" />
interface Array<T> {
	find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): TSNew.Option<T>;
}

 interface ReadonlyArray<T> {
	find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): TSNew.Option<T>;
}
