import "./utils"
import "./utils/types/recommended"
let asd = ["test"];

let GOOD = asd.find((v) => v == "test");
//  ^?
let BAD = asd.find((v) => "");
//  ^?
console.log(GOOD.unwrap(), BAD.unwrapOr("test"));