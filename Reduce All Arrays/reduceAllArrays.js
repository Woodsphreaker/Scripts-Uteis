"use strict";

const arr = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7, [8, 9, [10, 11, [12, 13], 14, 15, 16, [17, [18, [19, [20]]]]]]]
];

// Metodo 1
const flatten1 = list => list.reduce((pre, pos) => pre.concat(Array.isArray(pos)
    ? flatten1(pos)
    : pos), []);

// Metodo 2
const flatten2 = list => list.toString().split(",").map(Number);

console.log(flatten1(arr));
console.log(flatten2(arr));
