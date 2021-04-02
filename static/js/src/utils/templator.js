export const compile = (template, props) => {
    // @ts-ignore
    const tmp = Handlebars.compile(template);
    return tmp(props);
};
//# sourceMappingURL=templator.js.map