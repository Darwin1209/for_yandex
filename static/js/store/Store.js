import { EventBus } from './../utils/EventBus.js';
export default class Store {
    constructor() {
        if (Store.__instance) {
            return Store.__instance;
        }
        this.eventBus = new EventBus();
        this.data = {};
        Store.__instance = this;
    }
    getData(page) {
        return this.data[page];
    }
    setData(page, payload) {
        this.data[page] = payload;
    }
}
//# sourceMappingURL=Store.js.map