1. What are Objects?
Objects are collections of key-value pairs. They are used to store multiple values as a single entity.

Basic Syntax
javascript
// Object literal
const person = {
    name: "John",
    age: 30,
    isStudent: false
};
2. CRUD Operations on Objects
C - Create/Add Properties
javascript
const user = {}; // Empty object

// Method 1: Dot notation
user.name = "Alice";
user.age = 25;

// Method 2: Bracket notation
user["email"] = "alice@example.com";
user["phone number"] = "1234567890"; // Works with spaces

// Method 3: During declaration
const student = {
    id: 101,
    name: "Bob"
};

// Method 4: Object.assign()
Object.assign(user, { city: "New York", country: "USA" });
R - Read/Access Properties
javascript
const product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    inStock: true
};

// Dot notation
console.log(product.name); // "Laptop"
console.log(product.price); // 999.99

// Bracket notation
console.log(product["name"]); // "Laptop"
const key = "price";
console.log(product[key]); // 999.99

// Check if property exists
console.log("name" in product); // true
console.log(product.hasOwnProperty("category")); // false
U - Update Properties
javascript
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

// Update existing properties
car.year = 2023;
car["model"] = "Corolla";

// Add new property while updating
car.color = "Blue";

// Multiple updates
Object.assign(car, { year: 2024, mileage: 15000 });
D - Delete Properties
javascript
const employee = {
    id: 101,
    name: "Sarah",
    department: "IT",
    salary: 50000
};

// Delete property
delete employee.department;
delete employee["salary"];

// Remove property without delete (set to undefined)
employee.department = undefined;

// Check deleted
console.log(employee.department); // undefined
console.log("department" in employee); // true (still exists)
console.log(employee.hasOwnProperty("salary")); // false (completely removed)
3. Nested Objects
Objects can contain other objects.

javascript
const company = {
    name: "Tech Corp",
    location: {
        city: "San Francisco",
        country: "USA",
        address: {
            street: "123 Tech St",
            zip: "94107"
        }
    },
    departments: {
        engineering: {
            head: "John Doe",
            employees: 50
        },
        sales: {
            head: "Jane Smith",
            employees: 20
        }
    }
};

// Access nested properties
console.log(company.location.city); // "San Francisco"
console.log(company.departments.engineering.head); // "John Doe"
console.log(company["location"]["address"]["street"]); // "123 Tech St"

// Optional chaining (ES2020)
console.log(company?.marketing?.head); // undefined (no error)
4. Object Methods & this Keyword
javascript
const calculator = {
    num1: 10,
    num2: 5,
    
    // Method
    add: function() {
        return this.num1 + this.num2;
    },
    
    // Shorthand method syntax
    subtract() {
        return this.num1 - this.num2;
    },
    
    multiply: () => {
        // Arrow functions don't have their own 'this'
        return this.num1 * this.num2; // Won't work properly
    },
    
    // Method with parameters
    divide(x, y) {
        return x / y;
    }
};

console.log(calculator.add()); // 15
console.log(calculator.subtract()); // 5
console.log(calculator.divide(20, 4)); // 5
5. Object Cloning & Copying
Shallow Copy
javascript
const original = {
    name: "Original",
    details: {
        id: 1,
        value: 100
    }
};

// Method 1: Spread operator (ES6)
const shallowCopy1 = { ...original };

// Method 2: Object.assign()
const shallowCopy2 = Object.assign({}, original);

// Problem with shallow copy
shallowCopy1.name = "Changed";
shallowCopy1.details.id = 999;

console.log(original.name); // "Original" (unchanged)
console.log(original.details.id); // 999 (CHANGED! - nested object reference)
Deep Copy
javascript
// Method 1: JSON.parse & JSON.stringify
const deepCopy1 = JSON.parse(JSON.stringify(original));

// Method 2: Recursive function
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    
    const clone = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    
    return clone;
}

// Method 3: Using structuredClone (modern browsers)
const deepCopy2 = structuredClone(original);
6. Object Destructuring
Extract values from objects into variables.

javascript
const userProfile = {
    firstName: "Michael",
    lastName: "Johnson",
    age: 35,
    email: "michael@example.com",
    address: {
        city: "Boston",
        country: "USA"
    },
    hobbies: ["reading", "gaming", "hiking"]
};

// Basic destructuring
const { firstName, lastName, age } = userProfile;
console.log(firstName, lastName, age); // Michael Johnson 35

// With new variable names
const { firstName: fName, lastName: lName } = userProfile;

// Default values
const { phone = "Not provided" } = userProfile;
console.log(phone); // "Not provided"

// Nested destructuring
const { 
    address: { city, country },
    hobbies: [firstHobby, ...otherHobbies]
} = userProfile;
console.log(city, firstHobby); // Boston reading

// Rest operator
const { email, ...rest } = userProfile;
console.log(rest); // All properties except email

// Function parameter destructuring
function displayUser({ firstName, age, occupation = "Developer" }) {
    console.log(`${firstName}, ${age} years old, ${occupation}`);
}
displayUser(userProfile);
7. Object Methods in Detail
Object.keys() - Get all keys
javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
Object.values() - Get all values
javascript
console.log(Object.values(obj)); // [1, 2, 3]
Object.entries() - Get key-value pairs
javascript
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
Object.freeze() - Make object immutable
javascript
const frozen = Object.freeze({ x: 1, y: 2 });
frozen.x = 10; // Error in strict mode, silently fails otherwise
Object.seal() - Prevent adding/deleting, but allow updating
javascript
const sealed = Object.seal({ x: 1, y: 2 });
sealed.x = 10; // Allowed
sealed.z = 3; // Not allowed
delete sealed.x; // Not allowed
8. Real Project Examples
Example 1: E-commerce Product System
javascript
class ECommerceSystem {
    constructor() {
        this.products = {};
        this.cart = {};
        this.users = {};
    }
    
    // CRUD for Products
    addProduct(id, product) {
        this.products[id] = {
            ...product,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }
    
    getProduct(id) {
        return this.products[id] || null;
    }
    
    updateProduct(id, updates) {
        if (this.products[id]) {
            this.products[id] = {
                ...this.products[id],
                ...updates,
                updatedAt: new Date()
            };
        }
    }
    
    deleteProduct(id) {
        delete this.products[id];
    }
    
    // Shopping Cart Operations
    addToCart(userId, productId, quantity = 1) {
        if (!this.cart[userId]) {
            this.cart[userId] = {};
        }
        
        this.cart[userId][productId] = (this.cart[userId][productId] || 0) + quantity;
    }
    
    // Generate invoice
    generateInvoice(userId) {
        const cartItems = this.cart[userId] || {};
        let total = 0;
        
        const invoice = Object.entries(cartItems).map(([productId, quantity]) => {
            const product = this.products[productId];
            const subtotal = product.price * quantity;
            total += subtotal;
            
            return {
                product: product.name,
                quantity,
                price: product.price,
                subtotal
            };
        });
        
        return { items: invoice, total };
    }
}

// Usage
const shop = new ECommerceSystem();
shop.addProduct("p1", { name: "Laptop", price: 999, category: "Electronics" });
shop.addToCart("user123", "p1", 2);
console.log(shop.generateInvoice("user123"));
Example 2: User Management System
javascript
const userManagement = {
    users: {},
    
    // Create user with validation
    createUser(userData) {
        const id = `user_${Date.now()}`;
        
        this.users[id] = {
            id,
            ...userData,
            isActive: true,
            createdAt: new Date(),
            lastLogin: null,
            // Nested objects for profile
            profile: {
                avatar: userData.avatar || "default.png",
                settings: {
                    theme: "light",
                    notifications: true,
                    language: "en"
                }
            }
        };
        
        return this.users[id];
    },
    
    // Update user with deep merge
    updateUser(userId, updates) {
        if (this.users[userId]) {
            // Deep merge for nested objects
            this.users[userId] = this.deepMerge(this.users[userId], updates);
            this.users[userId].updatedAt = new Date();
        }
    },
    
    // Deep merge helper
    deepMerge(target, source) {
        const output = { ...target };
        
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                output[key] = this.deepMerge(target[key] || {}, source[key]);
            } else {
                output[key] = source[key];
            }
        }
        
        return output;
    },
    
    // Search users
    searchUsers(filters = {}) {
        return Object.values(this.users).filter(user => {
            return Object.entries(filters).every(([key, value]) => {
                if (key.includes('.')) {
                    // Handle nested properties (e.g., 'profile.settings.theme')
                    const keys = key.split('.');
                    let nestedValue = user;
                    for (const k of keys) {
                        nestedValue = nestedValue?.[k];
                    }
                    return nestedValue === value;
                }
                return user[key] === value;
            });
        });
    },
    
    // Clone user for backup
    cloneUser(userId) {
        const user = this.users[userId];
        return user ? structuredClone(user) : null;
    },
    
    // Destructure user data for display
    getUserSummary(userId) {
        const user = this.users[userId];
        if (!user) return null;
        
        const { 
            id, 
            name, 
            email, 
            profile: { 
                avatar, 
                settings: { theme } 
            } 
        } = user;
        
        return { id, name, email, avatar, theme };
    }
};

// Usage
userManagement.createUser({
    name: "Alice",
    email: "alice@example.com",
    role: "admin"
});

// Update nested settings
userManagement.updateUser("user_123", {
    profile: {
        settings: {
            theme: "dark"
        }
    }
});

// Destructure for display
const summary = userManagement.getUserSummary("user_123");
console.log(summary);
Example 3: Configuration Manager
javascript
const configManager = {
    defaultConfig: {
        app: {
            name: "MyApp",
            version: "1.0.0",
            debug: false
        },
        api: {
            baseURL: "https://api.example.com",
            timeout: 5000,
            retries: 3
        },
        ui: {
            theme: "light",
            language: "en"
        }
    },
    
    userConfig: {},
    
    // Merge configurations
    init(userConfig = {}) {
        this.userConfig = this.deepMergeConfig(this.defaultConfig, userConfig);
        return this.userConfig;
    },
    
    deepMergeConfig(defaultConfig, userConfig) {
        const result = { ...defaultConfig };
        
        for (const key in userConfig) {
            if (userConfig[key] && typeof userConfig[key] === 'object' && !Array.isArray(userConfig[key])) {
                result[key] = this.deepMergeConfig(defaultConfig[key] || {}, userConfig[key]);
            } else {
                result[key] = userConfig[key];
            }
        }
        
        return result;
    },
    
    // Get nested config value
    get(keyPath, defaultValue = null) {
        return keyPath.split('.').reduce((obj, key) => obj?.[key], this.userConfig) || defaultValue;
    },
    
    // Set nested config value
    set(keyPath, value) {
        const keys = keyPath.split('.');
        const lastKey = keys.pop();
        const target = keys.reduce((obj, key) => {
            if (!obj[key]) obj[key] = {};
            return obj[key];
        }, this.userConfig);
        
        target[lastKey] = value;
    },
    
    // Clone configuration
    clone() {
        return structuredClone(this.userConfig);
    },
    
    // Reset to defaults
    reset() {
        this.userConfig = structuredClone(this.defaultConfig);
    }
};

// Usage
configManager.init({
    app: { debug: true },
    api: { timeout: 10000 }
});

console.log(configManager.get("app.debug")); // true
console.log(configManager.get("api.baseURL")); // https://api.example.com

configManager.set("ui.theme", "dark");
console.log(configManager.get("ui.theme")); // dark
9. Best Practices & Tips
Use const for objects (you can still modify properties)

Prefer dot notation when possible

Use bracket notation for dynamic property names

Validate before accessing nested properties

Use Object methods for iteration (keys, values, entries)

Consider immutability for critical data

Use destructuring for cleaner code

Deep clone when needed to avoid reference issues

10. Common Pitfalls
javascript
// 1. Reference issue
const obj1 = { x: 1 };
const obj2 = obj1; // Reference, not copy
obj2.x = 2;
console.log(obj1.x); // 2 (changed!)

// 2. Shallow clone issue
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
shallow.nested.b = 99;
console.log(original.nested.b); // 99 (changed!)

// 3. this in arrow functions
const obj = {
    value: 10,
    getValue: () => this.value // undefined
};

// 4. JSON.stringify limitations
const data = {
    date: new Date(),
    func: function() {},
    undefined: undefined
};
console.log(JSON.stringify(data)); // {"date":"2023-12-01T..."} (func and undefined removed)