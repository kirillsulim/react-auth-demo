class Client {
    get protocol() {
        return "http"
    }

    get server() {
        return "localhost";
    }

    get port() {
        return 3001;
    }

    _url(resource) {
        return `${this.protocol}://${this.server}:${this.port}/${resource}`
    }

    async register(userData) {
        const response = await fetch(
            this._url("registration"),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );
        const res = await response.json();
        console.log(res);
        return res;
    }

    async login(userData) {
        const response = await fetch(
            this._url("login"),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );
        const res = await response.json();
        console.log(res);
        return res;
    }
}

export default Client;
