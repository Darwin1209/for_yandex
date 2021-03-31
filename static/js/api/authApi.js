import HTTPTransport from './http.js';
import { BASE_URL, GET_USER, SIGN_IN, SIGN_UP, LOGOUT } from './constant.js';
const api = new HTTPTransport(BASE_URL);
const headersJson = {
    'Content-Type': 'application/json',
};
export class AuthApi {
    async getUser() {
        try {
            const { response, status } = await api.get(GET_USER);
            if (status !== 200) {
                throw new Error(response);
            }
            return JSON.parse(response);
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async registration(form) {
        try {
            const { response, status } = await api.post(SIGN_UP, {
                data: form,
                headers: headersJson,
            });
            if (status !== 200) {
                throw new Error(response);
            }
            return JSON.parse(response);
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async login(form) {
        try {
            const { response, status } = await api.post(SIGN_IN, {
                data: form,
                headers: headersJson,
            });
            if (status !== 200) {
                throw new Error(response);
            }
            return JSON.parse(response);
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async logout() {
        try {
            const { response, status } = await api.post(LOGOUT, {});
            if (status !== 200) {
                throw new Error(response);
            }
            return JSON.parse(response);
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
//# sourceMappingURL=authApi.js.map