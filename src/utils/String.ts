import "./types/String";

import { Option } from "../structures";

// TODO: return `Result` instead of `Option`
String.prototype.parse = function() {
	let res = parseInt(this);	
	if(isNaN(res)) return Option(null as unknown as number);
	return Option(res);
}