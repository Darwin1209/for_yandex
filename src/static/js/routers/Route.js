import { renderDom } from '../utils/renderDom.js';
export default class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
        this._name = this._props.nameRoute;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    leave() {
        if (this._block) {
            this._block.hide();
        }
    }
    match(pathname) {
        return this.isEqual(pathname, this._pathname);
    }
    render() {
        const { nameRoute } = this._props;
        const title = document.head.querySelector('title') || document.head;
        title.textContent = nameRoute || 'title';
        if (!this._block) {
            this._block = new this._blockClass();
            renderDom(this._props.rootQuery, this._block);
            return;
        }
        this._block.show();
    }
    isEqual(lhs, rhs) {
        return lhs === rhs;
    }
}
//# sourceMappingURL=Route.js.map