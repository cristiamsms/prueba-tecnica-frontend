"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchContoken = exports.fetchSintoken = void 0;
const fetchSintoken = (endpoint, data, method = "GET") => {
    const url = `http://9d2c51813960.ngrok.io/api/${endpoint}`;
    if (method === "GET") {
        return fetch(url);
    }
    else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
};
exports.fetchSintoken = fetchSintoken;
const fetchContoken = (endpoint, data, method = "GET") => {
    const url = `http://9d2c51813960.ngrok.io/api/${endpoint}`;
    const token = localStorage.getItem("token") || "";
    if (method === "GET") {
        return fetch(url, {
            method,
            headers: {
                "x-token": token,
            },
        });
    }
    else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
                "x-token": token,
            },
            body: JSON.stringify(data),
        });
    }
};
exports.fetchContoken = fetchContoken;
//# sourceMappingURL=fetch.js.map