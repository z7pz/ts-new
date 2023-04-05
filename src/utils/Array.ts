import "./types/Array";
import { Option } from "../structures/Option";

let find = Array.prototype.find
Array.prototype.find = function<T>(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any) {
	let call = find.call(this, predicate, thisArg)
	return new Option(call);
}