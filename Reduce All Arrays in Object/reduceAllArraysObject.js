"use strict";

const object = {

    "attr1": 1,
    "attr2": 2,
    "attr3": [
        3, 4, 5, [6, 7, 8, [10, 11, [12, 13, 14]]]
    ],
    "attr4": [{
        "subattr4.1": [15, 16, 17, [18, 19, [20]]]
    }],
    "attr5": [{
        "subattr5.1": [21, 22, [23,24], 25, [26, [27, 28], 29, [30]]]
    }]
};

const isObject = (obj) => obj instanceof Object;
const objectValues = (obj) => Object.values(obj);
const flattenObj = (obj) => objectValues(obj).reduce((pre, pos) => pre.concat(isObject(pos) ? flattenObj(pos) : pos), [])
const sum = (obj) => flattenObj(obj).reduce((pre, pos) => pre + pos);

console.log(flattenObj(object));
console.log(sum(object));
