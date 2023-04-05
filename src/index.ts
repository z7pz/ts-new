import "./utils";
let asd = ["test"];

let GOOD = asd.find((v) => v == "test");
//  ^?
let BAD = asd.find((v) => "");
//  ^?
console.log(
	GOOD.unwrap(),
	BAD.unwrapOrElse(() => {
		console.log("hello from UnwrapOrElse")
		return "test"
	});
);
