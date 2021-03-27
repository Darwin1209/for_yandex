var METHOD;
(function (METHOD) {
    METHOD["GET"] = "GET";
    METHOD["POST"] = "POST";
    METHOD["PUT"] = "PUT";
    METHOD["PATCH"] = "PATCH";
    METHOD["DELETE"] = "DELETE";
})(METHOD || (METHOD = {}));
function queryStringify(data) {
    return Object.entries(data)
        .reduce((acc, [key, value]) => (acc = `${acc}${key}=${value}&`), '')
        .slice(0, -1);
}
class HTTPTransport {
    constructor(path) {
        this._path = path;
    }
    get(url, options) {
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
            xhr.open(method, url);
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
// function request<TResponse>(
// 	url: string,
// 	options: Options = { method: METHOD.GET }
// ): Promise<TResponse> {
// 	const { method, data } = options
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		xhr.open(method, url)
// 		xhr.setRequestHeader('Content-Type', 'text/plain')
// 		xhr.onload = function () {
// 			resolve(xhr)
// 		}
// 		const handleError = (err: ProgressEvent) => {
// 			console.log(err)
// 		}
// 		xhr.onabort = handleError
// 		xhr.onerror = handleError
// 		xhr.ontimeout = handleError
// 		if (method === METHOD.GET || !data) {
// 			xhr.send()
// 		} else {
// 			xhr.send(JSON.stringify(data))
// 		}
// 	})
// }
//# sourceMappingURL=Fetch.js.map