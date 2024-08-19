/*
    Arrays & Objects - are used to store multiple values in a single variable.
*/

let numbers = [1, true, 3.14, [2, 5], 'five'];

// to print the entire array
// console.log(numbers);

// to print a specific element from the array
// console.log(numbers[3][1]);

// length property
// console.log(numbers.length);

numbers.push(6);

numbers.push(11, 12);

numbers.pop();
numbers.pop();

numbers.unshift(-1, 0);

numbers.shift();
numbers.shift();

numbers.splice(2, 1);

// let index = 0;
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }

for (let index = 0; index < numbers.length; index++ ) {
    console.log(numbers[index]);
}