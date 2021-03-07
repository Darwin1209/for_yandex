import { Validation } from '../../utils/validations.js';
const CLASS_LABEL_INPUT = 'form-reg__title-input_active';
const CLASS_LABEL_VALID = 'form-reg__valid-input_active';
export function submit(e) {
    e.preventDefault();
    const prepData = [];
    for (let i = 0; i < e.currentTarget.elements.length; i++) {
        if (e.currentTarget.elements[i].tagName === 'INPUT') {
            prepData.push(e.currentTarget.elements[i]);
        }
    }
    const fieldsArray = prepData.map((el) => ({
        name: el.name,
        value: el.value,
        valid: el.dataset.valid,
        label: el.previousElementSibling,
        labelValid: el.nextElementSibling,
    }));
    fieldsArray.forEach(({ valid, labelValid, value }) => {
        if (valid !== 'passTwo') {
            valid;
            const valideted = Validation[valid](value);
            valideted
                ? labelValid?.classList.remove(CLASS_LABEL_VALID)
                : labelValid?.classList.add(CLASS_LABEL_VALID);
        }
        else {
            const valideted = Validation[valid](value, fieldsArray.find((el) => el.name === 'password').value);
            valideted
                ? labelValid?.classList.remove(CLASS_LABEL_VALID)
                : labelValid?.classList.add(CLASS_LABEL_VALID);
        }
    });
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
        valid;
        const valideted = Validation[valid](inp.value);
        valideted
            ? labelValid?.classList.remove(CLASS_LABEL_VALID)
            : labelValid?.classList.add(CLASS_LABEL_VALID);
    }
    else {
        const valideted = Validation[valid](inp.value, e.currentTarget.elements.password.value);
        valideted
            ? labelValid?.classList.remove(CLASS_LABEL_VALID)
            : labelValid?.classList.add(CLASS_LABEL_VALID);
    }
    if (inp.value === '') {
        label?.classList.toggle(CLASS_LABEL_INPUT);
    }
}
//# sourceMappingURL=functions.js.map