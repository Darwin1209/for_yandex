function isEqualMy(a, b) {
    for (let key in a) {
        if (typeof a[key] === 'object' && typeof b[key] === 'object') {
            isEqual(a[key], b[key]);
        }
        else if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isArray(value) {
    return Array.isArray(value);
}
function isPlainObject(value) {
    return (typeof value === 'object' &&
        value !== null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === '[object Object]');
}
function isArrayOrObject(value) {
    return isPlainObject(value) || isArray(value);
}
function isEqual(lhs, rhs) {
    // Сравнение количества ключей объектов и массивов
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) {
                continue;
            }
            return false;
        }
        if (value !== rightValue) {
            return false;
        }
    }
    return true;
}
export default isEqual;
//# sourceMappingURL=isEqual.js.map