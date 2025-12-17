// TRICKY TASKS SOLUTIONS

// 1. Deep clone object
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(item => deepClone(item));
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

// 2. Compare two objects deeply
function deepCompare(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== typeof obj2) return false;
    if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) return obj1 === obj2;
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    return keys1.every(key => deepCompare(obj1[key], obj2[key]));
}

// 3. Flatten nested object
function flattenObject(obj, prefix = '') {
    const result = {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    
    return result;
}

// 4. Unflatten object
function unflattenObject(obj) {
    const result = {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const keys = key.split('.');
            let current = result;
            
            for (let i = 0; i < keys.length - 1; i++) {
                const k = keys[i];
                if (!current[k]) current[k] = {};
                current = current[k];
            }
            
            current[keys[keys.length - 1]] = obj[key];
        }
    }
    
    return result;
}

// 5. Object transformation
function transformObject(obj, transformFn) {
    const result = {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const transformed = transformFn(key, obj[key]);
            result[transformed.key] = transformed.value;
        }
    }
    
    return result;
}

// 6. Group array by property
function groupBy(array, property) {
    return array.reduce((groups, item) => {
        const key = item[property];
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
        return groups;
    }, {});
}

// 7. Pick properties from object
function pick(obj, keys) {
    return keys.reduce((result, key) => {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

// 8. Omit properties from object
function omit(obj, keys) {
    const result = { ...obj };
    keys.forEach(key => delete result[key]);
    return result;
}

// 9. Defaults object
function defaults(obj, defaultObj) {
    const result = { ...obj };
    
    for (let key in defaultObj) {
        if (result[key] === undefined) {
            result[key] = defaultObj[key];
        }
    }
    
    return result;
}

// 10. Freeze object recursively
function deepFreeze(obj) {
    Object.freeze(obj);
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && 
            typeof obj[key] === 'object' && 
            obj[key] !== null && 
            !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    }
    
    return obj;
}

// 11. Object validator
function validateObject(obj, schema) {
    for (let key in schema) {
        if (schema[key].required && !obj.hasOwnProperty(key)) {
            return { valid: false, error: `Missing required field: ${key}` };
        }
        
        if (obj[key] && typeof obj[key] !== schema[key].type) {
            return { valid: false, error: `Invalid type for ${key}` };
        }
    }
    
    return { valid: true };
}

// 12. Object diff
function objectDiff(obj1, obj2) {
    const diff = {};
    
    // Check keys in obj1
    for (let key in obj1) {
        if (!(key in obj2)) {
            diff[key] = { old: obj1[key], new: undefined };
        } else if (!deepCompare(obj1[key], obj2[key])) {
            diff[key] = { old: obj1[key], new: obj2[key] };
        }
    }
    
    // Check keys in obj2
    for (let key in obj2) {
        if (!(key in obj1)) {
            diff[key] = { old: undefined, new: obj2[key] };
        }
    }
    
    return diff;
}

// 13. Object with computed properties
function createComputedObject(base, computed) {
    const result = { ...base };
    
    for (let key in computed) {
        Object.defineProperty(result, key, {
            get: computed[key],
            enumerable: true
        });
    }
    
    return result;
}

// 14. Object watcher
function createWatchedObject(obj, callback) {
    return new Proxy(obj, {
        set(target, property, value) {
            const oldValue = target[property];
            target[property] = value;
            callback(property, oldValue, value);
            return true;
        },
        deleteProperty(target, property) {
            const oldValue = target[property];
            delete target[property];
            callback(property, oldValue, undefined);
            return true;
        }
    });
}

// 15. Immutable update
function immutableUpdate(obj, path, value) {
    const cloned = deepClone(obj);
    const keys = path.split('.');
    let current = cloned;
    
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) current[key] = {};
        current = current[key];
    }
    
    current[keys[keys.length - 1]] = value;
    return cloned;
}

// 16. Object merge with conflict resolution
function mergeWithConflict(obj1, obj2, resolveFn) {
    const result = { ...obj1 };
    
    for (let key in obj2) {
        if (key in result) {
            result[key] = resolveFn(result[key], obj2[key], key);
        } else {
            result[key] = obj2[key];
        }
    }
    
    return result;
}

// 17. Object path getter
function getByPath(obj, path, defaultValue) {
    return path.split('.').reduce((result, key) => {
        return result ? result[key] : undefined;
    }, obj) || defaultValue;
}

// 18. Object path setter
function setByPath(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key] || typeof current[key] !== 'object') {
            current[key] = {};
        }
        current = current[key];
    }
    
    current[keys[keys.length - 1]] = value;
    return obj;
}

// 19. Remove undefined/null properties
function cleanObject(obj) {
    return Object.entries(obj).reduce((result, [key, value]) => {
        if (value !== undefined && value !== null) {
            result[key] = value;
        }
        return result;
    }, {});
}

// 20. Object to query string
function objectToQueryString(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

// 21. Query string to object
function queryStringToObject(queryString) {
    return queryString.split('&').reduce((result, pair) => {
        const [key, value] = pair.split('=');
        result[decodeURIComponent(key)] = decodeURIComponent(value);
        return result;
    }, {});
}

// 22. Object with private properties
function createPrivateObject(initial) {
    const privateData = new WeakMap();
    const obj = {};
    
    privateData.set(obj, { ...initial });
    
    return new Proxy(obj, {
        get(target, property) {
            if (property.startsWith('_')) {
                return privateData.get(target)[property.slice(1)];
            }
            return target[property];
        },
        set(target, property, value) {
            if (property.startsWith('_')) {
                privateData.get(target)[property.slice(1)] = value;
            } else {
                target[property] = value;
            }
            return true;
        }
    });
}

// 23. Object memoization
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// 24. Object with validation
function createValidatedObject(schema) {
    return new Proxy({}, {
        set(target, property, value) {
            const validator = schema[property];
            
            if (validator && !validator(value)) {
                throw new Error(`Invalid value for ${property}`);
            }
            
            target[property] = value;
            return true;
        }
    });
}

// 25. Deep map object values
function deepMap(obj, mapFn) {
    if (Array.isArray(obj)) {
        return obj.map(item => deepMap(item, mapFn));
    }
    
    if (typeof obj === 'object' && obj !== null) {
        const result = {};
        
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = deepMap(obj[key], mapFn);
            }
        }
        
        return result;
    }
    
    return mapFn(obj);
}

// 26. Object inheritance simulation
function createObject(parent, properties) {
    const obj = Object.create(parent);
    return Object.assign(obj, properties);
}

// 27. Object with method chaining
function createChainableObject(initial) {
    const obj = { ...initial };
    
    const handler = {
        get(target, property) {
            if (property in target) {
                return typeof target[property] === 'function' 
                    ? (...args) => {
                        target[property](...args);
                        return new Proxy(target, handler);
                    }
                    : target[property];
            }
            return undefined;
        }
    };
    
    return new Proxy(obj, handler);
}

// 28. Object with transactions
function createTransactionalObject(initial) {
    let state = { ...initial };
    let transactionStack = [];
    let isInTransaction = false;
    
    return {
        get(key) {
            return state[key];
        },
        set(key, value) {
            if (isInTransaction) {
                transactionStack[transactionStack.length - 1].push({ key, oldValue: state[key] });
            }
            state[key] = value;
        },
        begin() {
            transactionStack.push([]);
            isInTransaction = true;
        },
        commit() {
            transactionStack.pop();
            isInTransaction = transactionStack.length > 0;
        },
        rollback() {
            const changes = transactionStack.pop();
            changes?.reverse().forEach(({ key, oldValue }) => {
                state[key] = oldValue;
            });
            isInTransaction = transactionStack.length > 0;
        }
    };
}

// 29. Object with observable properties
function createObservableObject(obj, onChange) {
    return new Proxy(obj, {
        set(target, property, value) {
            const oldValue = target[property];
            target[property] = value;
            onChange(property, oldValue, value);
            return true;
        }
    });
}

// 30. Object with calculated properties cache
function createCachedObject(obj, computed) {
    const cache = new Map();
    
    const result = { ...obj };
    
    for (let key in computed) {
        Object.defineProperty(result, key, {
            get() {
                if (!cache.has(key)) {
                    cache.set(key, computed[key].call(result));
                }
                return cache.get(key);
            },
            enumerable: true
        });
    }
    
    return new Proxy(result, {
        set(target, property, value) {
            cache.clear();
            target[property] = value;
            return true;
        }
    });
}

// 31. Object with versioning
function createVersionedObject(initial) {
    let version = 0;
    const versions = new Map([[version, { ...initial }]]);
    
    return {
        get state() {
            return versions.get(version);
        },
        set(key, value) {
            const newState = { ...versions.get(version) };
            newState[key] = value;
            version++;
            versions.set(version, newState);
        },
        undo() {
            if (version > 0) version--;
        },
        redo() {
            if (version < versions.size - 1) version++;
        },
        getVersion(v) {
            return versions.get(v);
        }
    };
}

// 32. Object with timestamps
function createTimedObject(obj) {
    return new Proxy(obj, {
        get(target, property) {
            if (property === 'timestamps') {
                return target.__timestamps || {};
            }
            return target[property];
        },
        set(target, property, value) {
            if (!target.__timestamps) target.__timestamps = {};
            target.__timestamps[property] = new Date();
            target[property] = value;
            return true;
        }
    });
}

// 33. Object with access logging
function createLoggedObject(obj) {
    const log = [];
    
    return {
        ...new Proxy(obj, {
            get(target, property) {
                log.push({ type: 'get', property, timestamp: new Date() });
                return target[property];
            },
            set(target, property, value) {
                log.push({ 
                    type: 'set', 
                    property, 
                    value, 
                    oldValue: target[property],
                    timestamp: new Date() 
                });
                target[property] = value;
                return true;
            }
        }),
        getLog() {
            return [...log];
        },
        clearLog() {
            log.length = 0;
        }
    };
}

// 34. Object with size limit
function createLimitedObject(maxSize) {
    const obj = {};
    const keys = [];
    
    return new Proxy(obj, {
        set(target, property, value) {
            if (!keys.includes(property)) {
                if (keys.length >= maxSize) {
                    const oldestKey = keys.shift();
                    delete target[oldestKey];
                }
                keys.push(property);
            }
            target[property] = value;
            return true;
        }
    });
}

// 35. Object with TTL (Time To Live)
function createTTLObject() {
    const obj = {};
    const timers = new Map();
    
    return new Proxy(obj, {
        set(target, property, value, ttl = 5000) {
            target[property] = value;
            
            if (timers.has(property)) {
                clearTimeout(timers.get(property));
            }
            
            timers.set(property, setTimeout(() => {
                delete target[property];
                timers.delete(property);
            }, ttl));
            
            return true;
        },
        get(target, property) {
            return target[property];
        }
    });
}

// 36. Object with serialization
function createSerializableObject(obj, serializeFn, deserializeFn) {
    return {
        ...obj,
        serialize() {
            return serializeFn(obj);
        },
        deserialize(data) {
            const deserialized = deserializeFn(data);
            Object.assign(obj, deserialized);
        }
    };
}

// 37. Object with encryption
function createEncryptedObject(obj, encryptFn, decryptFn) {
    return new Proxy(obj, {
        get(target, property) {
            const value = target[property];
            return value && decryptFn ? decryptFn(value) : value;
        },
        set(target, property, value) {
            target[property] = encryptFn ? encryptFn(value) : value;
            return true;
        }
    });
}

// 38. Object with schema validation on set
function createSchemaValidatedObject(schema) {
    return new Proxy({}, {
        set(target, property, value) {
            if (schema[property]) {
                const { type, min, max, pattern } = schema[property];
                
                if (type && typeof value !== type) {
                    throw new Error(`Type mismatch for ${property}`);
                }
                
                if (min !== undefined && value < min) {
                    throw new Error(`${property} must be at least ${min}`);
                }
                
                if (max !== undefined && value > max) {
                    throw new Error(`${property} must be at most ${max}`);
                }
                
                if (pattern && !pattern.test(value)) {
                    throw new Error(`${property} doesn't match pattern`);
                }
            }
            
            target[property] = value;
            return true;
        }
    });
}

// 39. Object with circular reference handling
function createCircularSafeObject() {
    const seen = new WeakSet();
    
    return {
        stringify(obj) {
            return JSON.stringify(obj, (key, value) => {
                if (typeof value === 'object' && value !== null) {
                    if (seen.has(value)) {
                        return '[Circular]';
                    }
                    seen.add(value);
                }
                return value;
            });
        }
    };
}

// 40. Object with change detection
function createChangeDetector(obj, onChange) {
    let proxy = new Proxy(obj, {
        set(target, property, value) {
            const oldValue = target[property];
            
            if (oldValue !== value) {
                target[property] = value;
                onChange(property, oldValue, value);
            }
            
            return true;
        }
    });
    
    return {
        obj: proxy,
        subscribe(property, callback) {
            const originalOnChange = onChange;
            onChange = (changedProp, oldVal, newVal) => {
                originalOnChange(changedProp, oldVal, newVal);
                if (changedProp === property) {
                    callback(oldVal, newVal);
                }
            };
        }
    };
}