const double = (x) => x + x; // 매개변수 1개인 경우 괄호 생략 가능
console.log(double(2));

const add = (a, b) => a + b;
console.log(add(1, 2));

// const printArguments = () => {
//     console.log(arguments);
// }
// printArguments(1, 2, 3);

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3));

setTimeout(() => {
    console.log("화살표 함수!");
}, 10)
