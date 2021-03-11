import Block from '../../modules/block.js';
import { compile } from '../../utils/templator.js';
import { template } from './Chat.tmp.js';
import { list } from './mock.js';
export default class Chat extends Block {
    constructor(props) {
        super('main', {
            ...props,
            className: 'main-wrapper',
        });
    }
    render() {
        return compile(template, {
            list
        });
    }
}
//# sourceMappingURL=Chat.js.map