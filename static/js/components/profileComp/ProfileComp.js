import Store from '../../store/Store.js';
import Router from '../../routers/Router.js';
import Block from '../../modules/block.js';
import { template } from './ProfileComp.tmp.js';
import { compile } from '../../utils/templator.js';
import { blur, submit, click } from './functions.js';
import AuthController from '../../controlers/authControler.js';
const store = new Store();
const router = new Router('#root');
export default class ProfileComp extends Block {
    constructor(props) {
        const user = store.getData('user');
        super('div', {
            className: 'container flex',
            events: {
                blur,
                submit,
                click,
            },
            user,
            ...props,
        });
        store.eventBus.on('get-user', () => {
            this.eventBus.emit('flow:render');
        });
        store.eventBus.on('user-failed', () => {
            router.go('/auth');
        });
        store.eventBus.on('change-user', () => {
            this.eventBus.emit('flow:render');
        });
        store.eventBus.on('change-pass-failed', () => {
            alert('Неверный пароль');
        });
        store.eventBus.on('change-avatar-failed', () => {
            alert('Произошла ошибка');
        });
    }
    render() {
        const user = store.getData('user');
        if (user === undefined) {
            AuthController.getUser();
        }
        //!Временный костыль, в следующей итерации решу как вынести значения
        const context = this.props.context;
        if (user !== undefined) {
            context.fields = context.fields.map((field) => ({
                ...field,
                value: user?.[field.name],
            }));
        }
        const userName = context.fields.find((el) => el.name === 'display_name')?.value;
        return compile(template, { context, userName });
    }
}
//# sourceMappingURL=ProfileComp.js.map