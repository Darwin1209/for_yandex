import HTTPTransport from './http.js';
import { BASE_URL, PROFILE, AVATAR, PASSWORD } from './constant.js';
const api = new HTTPTransport(BASE_URL);
const headersJson = {
    'Content-Type': 'application/json',
};
export class UserApi {
    async changeProfile(form) {
        try {
            const { response, status } = await api.put(PROFILE, {
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
    async changeAvatar(form) {
        try {
            const { response, status } = await api.put(AVATAR, {
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
    async changePassword(form) {
        try {
            const { response, status } = await api.put(PASSWORD, {
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
}
//# sourceMappingURL=userApi.js.map