// EASY TASKS SOLUTIONS

// 1. Create an empty object
const task1 = {};

// 2. Add properties to object
const person = {};
person.name = "John";
person.age = 25;

// 3. Access object property
function getProperty(obj, key) {
    return obj[key];
}

// 4. Check if property exists
function hasProperty(obj, key) {
    return key in obj;
}

// 5. Update object property
function updateProperty(obj, key, value) {
    obj[key] = value;
}

// 6. Delete property from object
function deleteProperty(obj, key) {
    delete obj[key];
}

// 7. Count properties in object
function countProperties(obj) {
    return Object.keys(obj).length;
}

// 8. Get all keys of object
function getAllKeys(obj) {
    return Object.keys(obj);
}

// 9. Get all values of object
function getAllValues(obj) {
    return Object.values(obj);
}

// 10. Create object with methods
const calculator = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; }
};

// 11. Simple destructuring
function destructurePerson(person) {
    const { name, age } = person;
    return { name, age };
}

// 12. Object with nested object
const student = {
    name: "Alice",
    marks: {
        math: 90,
        science: 85
    }
};

// 13. Access nested property
function getNestedProperty(obj, key1, key2) {
    return obj[key1]?.[key2];
}

// 14. Merge two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// 15. Clone object (shallow)
function cloneObject(obj) {
    return { ...obj };
}

// 16. Create from array
function arrayToObject(arr) {
    const obj = {};
    arr.forEach((item, index) => {
        obj[`key${index}`] = item;
    });
    return obj;
}

// 17. Swap key-value
function swapKeyValue(obj) {
    const swapped = {};
    for (let key in obj) {
        swapped[obj[key]] = key;
    }
    return swapped;
}

// 18. Filter object properties
function filterObject(obj, keys) {
    const filtered = {};
    keys.forEach(key => {
        if (key in obj) {
            filtered[key] = obj[key];
        }
    });
    return filtered;
}

// 19. Check empty object
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

// 20. Stringify object
function objectToString(obj) {
    return JSON.stringify(obj);
}