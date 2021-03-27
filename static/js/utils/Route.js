import { renderDom } from './renderDom.js';
function isEqual(lhs, rhs) {
    return lhs === rhs;
}
export default class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
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
        return isEqual(pathname, this._pathname);
    }
    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            renderDom(this._props.rootQuery, this._block);
            return;
        }
        this._block.show();
    }
}
//# sourceMappingURL=Route.js.map