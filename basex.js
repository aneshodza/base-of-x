process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

if (process.argv.length !== 4) {
    console.log("You have to pass exactly one param, the decimal number you want to convert and its new base")
    return 1;
}
let number = process.argv[2];
let base = process.argv[3];

let result = []
let done = false

while(!done) {
    result.push(number%base)
    number = Math.floor(number/base)
    if (number === 0) {
        done = true
    }
}

console.log(result.reverse())
