import queryStringify from './queryString.js';
var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["PUT"] = "PUT";
    METHOD["PATCH"] = "PATCH";
    METHOD["DELETE"] = "DELETE";
})(METHOD || (METHOD = {}));
class HTTPTransport {
    constructor(path) {
        this._baseUrl = path;
    }
    get(url, options = { method: METHOD.GET }) {
        const { data, timeout } = options;
        return this.request(`${url}?${queryStringify(data)}`, {
            ...options,
            method: METHOD.GET,
        }, timeout);
    }
    post(url, options) {
        const { timeout } = options;
        return this.request(url, {
            ...options,
            method: METHOD.POST,
        }, timeout);
    }
    delete(url, options) {
        const { timeout } = options;
        return this.request(url, {
            ...options,
            method: METHOD.DELETE,
        }, timeout);
    }
    put(url, options) {
        const { timeout } = options;
        return this.request(url, {
            ...options,
            method: METHOD.PUT,
        }, timeout);
    }
    request(url, options, timeout = 5000) {
        const { method, data, headers } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open(method, `${this._baseUrl}${url}`);
            xhr.timeout = timeout;
            if (headers !== undefined) {
                Object.entries(headers).forEach(([key, value = '']) => {
                    xhr.setRequestHeader(key, value);
                });
            }
            xhr.onload = function () {
                resolve(xhr);
            };
            const handleError = (err) => {
                reject(err);
            };
            xhr.onabort = handleError;
            xhr.onerror = handleError;
            xhr.ontimeout = handleError;
            if (method === METHOD.GET || !data) {
                xhr.send();
            }
            else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
export default HTTPTransport;
//# sourceMappingURL=http.js.map