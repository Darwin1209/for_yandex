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
            .catch((e) => {
            store.eventBus.emit('user-failed');
            console.error(e);
        });
    }
    static login(form) {
        authApi
            .login(form)
            .then((response) => {
            if (response === 'Ok') {
                router.go('/');
            }
        })
            .catch((e) => {
            store.eventBus.emit('login-failed');
            console.error(e);
        });
    }
    static registration(form) {
        authApi
            .registration(form)
            .then((response) => {
            if (response === 'Ok') {
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
            if (response === 'Ok') {
                router.go('/auth');
            }
        })
            .catch((e) => {
            store.eventBus.emit('logout-failed');
            console.error(e);
        });
    }
}
//# sourceMappingURL=authControler.js.map