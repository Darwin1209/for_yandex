import { AuthApi } from '../api/authApi.js';
import Router from '../routers/Router.js';
import Store from '../store/Store.js';
const router = new Router('#root');
const store = new Store();
const authApi = new AuthApi();
export default class AuthController {
    static getUser() {
        authApi
            .getUser()
            .then((response) => {
            store.setData('user', response);
            store.eventBus.emit('get-user', response);
        })
            .catch(() => {
            store.eventBus.emit('user-failed');
        });
    }
    static login(form) {
        authApi
            .login(form)
            .then((response) => {
            console.log(response);
            if (response === 'OK') {
                router.go('/');
            }
        })
            .catch((e) => {
            console.log(e);
            store.eventBus.emit('login-failed');
            console.error(e);
        });
    }
    static registration(form) {
        authApi
            .registration(form)
            .then((response) => {
            if (response.id) {
                router.go('/');
            }
        })
            .catch((e) => {
            store.eventBus.emit('registration-failed');
            console.error(e);
        });
    }
    static logout() {
        authApi
            .logout()
            .then((response) => {
            console.log(response);
            if (response === 'OK') {
                router.go('/auth');
            }
        })
            .catch((e) => {
            console.log(e);
            store.eventBus.emit('logout-failed');
            console.error(e);
        });
    }
}
//# sourceMappingURL=authControler.js.map