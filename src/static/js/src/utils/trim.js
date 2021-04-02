function isOneLetter(string) {
    for (let i = 1; i < string.length; i++) {
        if (string[0] !== string[i]) {
            return false;
        }
    }
    return true;
}
export function trim(string, target = ' ') {
    if (isOneLetter(target)) {
        const reg = new RegExp(`[${target}]`, 'g');
        string = string.replace(reg, '');
    }
    else {
        target.split('').forEach((letter) => {
            let reg = new RegExp(`[${letter}]`, 'g');
            string = string.replace(reg, '');
        });
    }
    return string;
}
//# sourceMappingURL=trim.js.map