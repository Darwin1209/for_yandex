import { Validation } from '../../utils/validations.js';
const CLASS_LABEL_VALID = 'info__valid_active';
export function submit(e) {
    e.preventDefault();
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
        let pass;
        for (let i = 0; i < e.currentTarget.elements.length; i++) {
            const item = e.currentTarget.elements[i];
            if (item.name === 'password') {
                pass = item.value;
                break;
            }
        }
        const valideted = Validation[valid](inp.value, pass);
        valideted
            ? labelValid?.classList.remove(CLASS_LABEL_VALID)
            : labelValid?.classList.add(CLASS_LABEL_VALID);
    }
}
//# sourceMappingURL=functions.js.map