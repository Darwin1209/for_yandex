export function renderDom(query, block) {
    const root = document.querySelector(query);
    root?.appendChild(block.getContent());
}
//# sourceMappingURL=renderDom.js.map