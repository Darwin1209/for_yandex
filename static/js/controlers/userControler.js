import { UserApi } from '../api/userApi.js';
import Router from '../routers/Router.js';
import Store from '../store/Store.js';
const router = new Router('#root');
const store = new Store();
const userApi = new UserApi();
export default class UserController {
    static changeProfile(form) {
        userApi
            .changeProfile(form)
            .then((response) => {
            store.setData('user', response);
            store.eventBus.emit('change-user', response);
            router.go('/profile');
        })
            .catch((e) => {
            store.eventBus.emit('change-user-failed');
            console.error(e);
        });
    }
    static changePassword(form) {
        userApi
            .changePassword(form)
            .then(() => {
            router.go('/profile');
        })
            .catch((e) => {
            store.eventBus.emit('change-pass-failed');
            console.error(e);
        });
    }
    static changeAvatar(avatar) {
        const formData = new FormData();
        formData.append('avatar', avatar);
        userApi
            .changeAvatar(formData)
            .then((response) => {
            store.setData('user', response);
            store.eventBus.emit('change-user', response);
        })
            .catch((e) => {
            store.eventBus.emit('change-avatar-failed');
        });
    }
}
//# sourceMappingURL=userControler.js.map