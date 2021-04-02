import { expect } from 'chai';
const hello = (string) => `Hello ${string}`;
describe('Typescript + Babel usage suite', () => {
    it('should return string correctly', () => {
        expect(hello('mocha'), 'Hello mocha');
    });
});
//# sourceMappingURL=a.spec.js.map