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
        "subattr5.1": [21, 22, [23, 24], 25, [26, [27, 28], 29, [30]]]
    }],
    "attr6": "valor1",
    "attr7": [{
        "attr7.1": "valor2",
        "attr7.2": [{
            "attr7.2.1": "valor3",
            "attr7.2.2": [{
                "attr7.2.2.1": "valor4",
                "attr7.2.2.2": { "attr7.2.2.2.1": "valor5", "attr7.2.2.2.2": "valor6" }
            }]
        }]
    }]
};

const isObject = (obj) => obj instanceof Object;
const objectValues = (obj) => Object.values(obj);
const flattenObj = (obj) => objectValues(obj).reduce((pre, pos) => pre.concat(isObject(pos) ? flattenObj(pos) : pos), [])

console.log(flattenObj(object)); // [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, "valor1", "valor2", "valor3", "valor4", "valor5", "valor6"]
