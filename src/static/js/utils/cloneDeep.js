function isObjectOrArray(object) {
    if (Array.isArray(object)) {
        return 'array';
    }
    if (typeof object === 'object') {
        return 'object';
    }
    return 'no';
}
function cloneDeep(obj) {
    let res;
    const typeRes = isObjectOrArray(obj);
    if (typeRes === 'array') {
        res = [];
    }
    if (typeRes === 'object') {
        res = {};
    }
    Object.keys(obj).forEach((key) => {
        let check = isObjectOrArray(obj[key]);
        console.log('types key', check);
        if (check === 'object' || check === 'array') {
            const resDeep = cloneDeep(obj[key]);
            console.log('result deep', resDeep);
            if (typeRes === 'array') {
                res = [...res, resDeep];
            }
            else {
                res = { ...res, [key]: resDeep };
            }
        }
        else {
            res[key] = obj[key];
        }
    });
    return res;
}
export default cloneDeep;
//# sourceMappingURL=cloneDeep.js.map