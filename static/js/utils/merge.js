function merge(lhs, rhs) {
    for (let key in rhs) {
        if (typeof rhs[key] === 'object' && typeof lhs[key] === 'object') {
            lhs[key] = merge(lhs[key], rhs[key]);
        }
        else {
            return { ...lhs, ...rhs };
        }
    }
    return lhs;
}
export default merge;
//# sourceMappingURL=merge.js.map