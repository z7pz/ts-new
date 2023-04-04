import "./utils"
import "./utils/recommended.d.ts"
let asd = ["test"];

let GOOD = asd.find((v) => v == "test");
//  ^?
let BAD = asd.find((v) => "");
//  ^?
console.log(GOOD, BAD);