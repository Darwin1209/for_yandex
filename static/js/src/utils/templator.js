export const compile = (template, props) => {
    const tmp = Handlebars.compile(template);
    return tmp(props);
};
//# sourceMappingURL=templator.js.map