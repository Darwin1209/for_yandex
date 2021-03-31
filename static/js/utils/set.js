function set(object, path, value) {
    if (typeof object !== 'object') {
        return object;
    }
    if (typeof path !== 'string') {
        throw new Error('path mast be object');
    }
    const arrPath = path.split('.');
    if (arrPath.length === 1) {
        object[arrPath[0]] = value;
        return object;
    }
    for (let i = 0; i < arrPath.length - 1; i++) {
        let [key, keyValue] = [arrPath[i], arrPath[i + 1]];
        object[key] = { [keyValue]: i + 2 === arrPath.length ? value : undefined };
    }
    return object;
}
export default set;
//# sourceMappingURL=set.js.map