export var TYPES_VALIDATION;
(function (TYPES_VALIDATION) {
    TYPES_VALIDATION["TEXT"] = "text";
    TYPES_VALIDATION["PASSWORD"] = "pass";
    TYPES_VALIDATION["COPY_PASS"] = "passTwo";
    TYPES_VALIDATION["PHONE"] = "phone";
    TYPES_VALIDATION["MAIL"] = "mail";
})(TYPES_VALIDATION || (TYPES_VALIDATION = {}));
export const Validation = {
    regularExp: {
        login: /^[a-z0-9_-]{3,16}$/,
        text: /^[а-яА-Я]{3,16}$/,
        pass: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
        phone: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
        mail: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    },
    login(string) {
        return this.regularExp.login.test(string);
    },
    text(string) {
        return this.regularExp.text.test(string);
    },
    pass(string) {
        return this.regularExp.pass.test(string);
    },
    passTwo(string, stringCopy) {
        return string === stringCopy;
    },
    phone(string) {
        return this.regularExp.phone.test(string);
    },
    mail(string) {
        return this.regularExp.mail.test(string);
    }
};
//# sourceMappingURL=validations.js.map