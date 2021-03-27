import Store from '../../store/Store.js';
import Router from '../../routers/Router.js';
import { changePassword, changeUser, changeAvatar, } from '../../api/Controlers.js';
import { Validation } from '../../utils/validations.js';
const CLASS_LABEL_VALID = 'info__valid_active';
const store = new Store();
const router = new Router('#root');
export function submit(e) {
    e.preventDefault();
    const form = e.target;
    const action = form.dataset.type || 'none';
    if (action === 'avatar') {
        console.log('hey');
        const formData = new FormData(form);
        changeAvatar(formData)
            .then((resp) => store.setData('user', resp))
            .catch((e) => {
            console.error(e);
            alert('Произошла ошибка');
        });
        return;
    }
    const prepData = new Array(...form.querySelectorAll('input'));
    const notValid = prepData.some((el) => {
        let value = el.value;
        let valid = el.dataset.valid;
        if (valid === 'passTwo') {
            const pass = prepData.find((el) => el.name === 'newPassword');
            return !Validation[valid](value, pass.value);
        }
        return !Validation[valid](value);
    });
    if (notValid) {
        return;
    }
    const formValue = new FormData(form);
    const formData = [...formValue];
    const data = {};
    formData.forEach(([key, value]) => {
        data[key] = value;
    });
    if (action === 'data') {
        changeUser(data)
            .then((resp) => store.setData('user', resp))
            .catch((e) => {
            console.error(e);
        });
    }
    if (action === 'pass') {
        delete data.newPasswordCopy;
        changePassword(data)
            .then((resp) => {
            console.log(resp);
            router.go('/profile');
        })
            .catch((e) => {
            console.error(e);
            alert('Неверно введён пароль');
        });
    }
}
export function focus() { }
export function blur(e) {
    if (e.target.tagName !== 'INPUT') {
        return;
    }
    const inp = e.target;
    inp.value = inp.value.trim();
    const valid = inp.dataset.valid ? inp.dataset.valid : 'no-type';
    const labelValid = inp.nextElementSibling;
    if (valid !== 'passTwo') {
        const valideted = Validation[valid](inp.value);
        console.log(valideted);
        valideted
            ? labelValid?.classList.remove(CLASS_LABEL_VALID)
            : labelValid?.classList.add(CLASS_LABEL_VALID);
    }
    else {
        let pass = document.querySelector('input[data-valid=pass]');
        // for (let i = 0; i < e.currentTarget.elements.length; i++) {
        // 	const item = e.currentTarget.elements[i] as HTMLInputElement
        // 	if (item.name === 'password') {
        // 		pass = item.value
        // 		break
        // 	}
        // }
        const valideted = Validation[valid](inp.value, pass.value);
        valideted
            ? labelValid?.classList.remove(CLASS_LABEL_VALID)
            : labelValid?.classList.add(CLASS_LABEL_VALID);
    }
}
export function click(e, target) {
    if (e.target.className === 'person__change') {
        target.props.context = {
            ...target.props.context,
            changeAvatar: true,
        };
    }
}
//# sourceMappingURL=functions.js.map