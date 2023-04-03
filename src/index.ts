import "./utils"
let asd = ["test"];

let GOOD = asd.find((v) => v == "test");
let BAD = asd.find((v) => v == "");
console.log(GOOD, BAD);