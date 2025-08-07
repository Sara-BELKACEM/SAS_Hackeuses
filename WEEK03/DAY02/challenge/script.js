// // EX01
// const input = [1, 2, 3, 4, 5];
// const output = input.map(num => num ** 2); //Math.pow(num, 2)
// console.log(output); // [1, 4, 9, 16, 25]

// EX02
// const input = [1, 2, 3, 4, 5, 6];
// const output = input.filter(num => num % 2 === 0);
// console.log(output); // [2, 4, 6]

// // EX03
// const input = [1, 2, 3, 4, 5];
// const output = input.reduce((acc , curr) => acc + curr , 0);
// console.log(output); // 15

// // EX04
// const input = [1, 2, 3, 4, 5, 6];
// const output = input.filter(num => num % 2 ===0).map(num => num ** 2); //Math.pow(num, 2);
// console.log(output); // [4, 16, 36]

// // EX05
// const input = [1, 5, 2, 8, 3];
// const output = input.reduce((acc , curr) => acc > curr ? acc : curr, input[0]);
// // const output = input.reduce((acc, curr) => Math.max(acc, curr), input[0]);
// console.log(output); // 8

// // EX06
// const input = [1, -4, 12, 0, -3, 29, -150];
// const output = input.filter(num => num > 0).reduce((acc , curr) => acc + curr, 0);
// console.log(output); // 42

// // EX07
// const input = [12, 46, 32, 64];
// const tri = [...input].sort((a, b) => a - b) 
// const sum = input.reduce((acc , curr) => acc + curr , 0);
// const mean = sum / input.length;
// const mid1 = tri[(tri.length / 2) - 1];
// const mid2 = tri[tri.length / 2];
// const mediane = (mid1 + mid2) / 2;
// const output = [{ mean: mean, median: mediane }];
// console.log(output); // [{ mean: 38.5, median: 39 }]

// EX08
const input = "George Raymond Richard Martin";
const output = input.split(" ").map(name => name[0].toUpperCase()).join("");
console.log(output); // GRRM

// EX09
