const object = {

    "attr1": 1,
    "attr2": 2,
    "attr3": [
        3, 4, 5, [6, 7, 8, [10, 11, [12, 13, 14]]]
    ],
    "attr4": [{
        "subattr4.1": [15, 16, 17, [18, 19, [20]], [{ "subattr4.1.1": "Lorem Ipsum" }, { "subattr4.1.2": "Lorem Ipsum" }]]
    }],
    "attr5": [{
        "subattr5.1": [21, 22, [23, 24], 25, [26, [27, 28], 29, [30]]],
        "subattr5.2": [21, 22, [23, 24], 25, [26, [27, 28], 29, [30]], [{ "subattr5.3": "valor2" }, [{ "subattr5.4": "Lorem Ipsum" }]]],
        "subattr5.3": {
            "subattr5.3.1": [{
                "subattr5.3.2": [{ "subattr5.3.2.1": "Lorem Ipsum" }, { "subattr5.3.2.2": "Lorem Ipsum" }, [{ "subattr5.3.2.2.1": "Lorem Ipsum" }]]
            }]
        },
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

const isObject = obj => typeof obj === "object";
const objectKeys = obj => Object.keys(obj);
const filterObjectValues = values => values.length > 1;
const concatKeys = (obj, pre, pos) => pre.concat(isObject(obj[pos]) ? [pos].concat(keysList(obj[pos])) : pos);
const keysList = obj => objectKeys(obj).reduce((pre, pos) => concatKeys(obj, pre, pos), []).filter(filterObjectValues);

console.log(keysList(object))