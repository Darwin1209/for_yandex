export const renderChildren = (root, childrens) => {
    childrens?.forEach((children) => {
        root.appendChild(children.getContent());
    });
};
//# sourceMappingURL=renderChildren.js.map