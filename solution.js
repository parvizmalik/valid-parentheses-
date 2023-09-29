function isValid(s) {
    let stack = [];

    for (let c of s) {
        if (c === '(') {
            stack.push(')');
        } else if (c === '{') {
            stack.push('}');
        } else if (c === '[') {
            stack.push(']');
        } else if (!stack.length || stack.pop() !== c) {
            return false;
        }
    }
    
    return !stack.length;
}

// Testing
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
