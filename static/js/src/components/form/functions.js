import { Validation } from '../../utils/validations.js';
import UserController from '../../controlers/authControler.js';
const CLASS_LABEL_INPUT = 'form-reg__title-input_active';
const CLASS_LABEL_VALID = 'form-reg__valid-input_active';
export function submit(e, type) {
    e.preventDefault();
    const prepData = new Array(...e.currentTarget.querySelectorAll('input'));
    const notValid = prepData.some((el) => {
        let value = el.value;
        let valid = el.dataset.valid;
        if (valid === 'passTwo') {
            const pass = prepData.find((el) => el.name === 'password');
            return !Validation[valid](value, pass.value);
        }
        return !Validation[valid](value);
    });
    if (notValid) {
        return;
    }
    const form = new FormData(e.currentTarget);
    const formData = [...form];
    const data = {};
    formData.forEach(([key, value]) => {
        data[key] = value;
    });
    if (type === 'auth') {
        UserController.login(data);
        return;
    }
    if (type === 'registration') {
        UserController.registration(data);
        return;
    }
}
export function focus(e) {
    if (e.target.tagName !== 'INPUT') {
        return;
    }
    const inp = e.target;
    const label = inp.previousElementSibling;
    if (inp.value === '') {
        label?.classList.toggle(CLASS_LABEL_INPUT);
    }
}
export function blur(e) {
    if (e.target.tagName !== 'INPUT') {
        return;
    }
    const inp = e.target;
    inp.value = inp.value.trim();
    const valid = inp.dataset.valid ? inp.dataset.valid : 'no-type';
    const label = inp.previousElementSibling;
    const labelValid = inp.nextElementSibling;
    if (valid !== 'passTwo') {
        const validated = Validation[valid](inp.value);
        validated
            ? labelValid?.classList.remove(CLASS_LABEL_VALID)
            : labelValid?.classList.add(CLASS_LABEL_VALID);
    }
    else {
        let pass;
        for (let i = 0; i < e.currentTarget.elements.length; i++) {
            const item = e.currentTarget.elements[i];
            if (item.name === 'password') {
                pass = item.value;
                break;
            }
        }
        const validated = Validation[valid](inp.value, pass);
        validated
            ? labelValid?.classList.remove(CLASS_LABEL_VALID)
            : labelValid?.classList.add(CLASS_LABEL_VALID);
    }
    if (inp.value === '') {
        label?.classList.toggle(CLASS_LABEL_INPUT);
    }
}
//# sourceMappingURL=functions.js.map