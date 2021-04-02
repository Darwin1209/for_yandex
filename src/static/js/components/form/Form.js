import Block from '../../modules/block.js';
import { compile } from '../../utils/templator.js';
import { template } from './Form.tmp.js';
import { submit, focus, blur } from './functions.js';
export default class Form extends Block {
    constructor(props) {
        super('form', {
            ...props,
            events: {
                submit: (e) => {
                    submit(e, this.props?.context?.type);
                },
                focus,
                blur,
            },
        });
    }
    render() {
        return compile(template, this?.props);
    }
}
//# sourceMappingURL=Form.js.map