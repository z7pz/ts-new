import "./utils";

let asd = ["test"];
let GOOD = asd.shift();
//  ^?
let BAD = asd.find((v) => "");
//  ^?

console.log("10".parse());
console.log(
	GOOD.unwrap(),
	BAD.unwrapOrElse(() => {
		console.log("hello from UnwrapOrElse")
		return "test"
	})
);
