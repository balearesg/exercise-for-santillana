interface headers {
    'Content-Type': string;
}

interface session {
    accessToken: string;
}

export /*bundle*/
    function JCall(): void {

    this.checkToken = (headers: any): any => {
        if (typeof window === 'undefined') return headers;
        let session: string = window.localStorage.getItem('user-session');
        if (!session) return headers;
        const sessionObject: session = JSON.parse(session);
        headers.append('Authorization', `Bearer ${sessionObject.accessToken}`);
        return headers;
    };

    this.execute = async (url: string, method: string = 'get', params: object = {}, headersSpecs: object = {}): Promise<any> => {
        try {

            const keys: string[] = Object.keys(headersSpecs);
            let headers: Headers = new Headers();
            keys.forEach((key: string): void => headers.append(key, headersSpecs[key]));

            const specs: RequestInit = { method, headers, mode: 'cors' };
            const emptyParams: boolean = Object.entries(params).length === 0 && params.constructor === Object;
            if ((method === 'post' || method === "PUT") && !emptyParams) specs.body = JSON.stringify(params);
            else if (!emptyParams && method === 'get') {
                const parameters: string[] = Object.keys(params);
                if (parameters.length) {
                    url += "?";
                    parameters.forEach((key: string): void => {
                        if ([NaN, undefined, ''].includes(params[key])) return;
                        url += `&${key}=${params[key]}`
                    });
                }
            }

            const response: Response = await fetch(url, specs);
            return response.json();
        } catch (e) {
            console.error("error jcall", e);
        }

    };

    this.get = (url: string, params: object, headers: object) => this.execute(url, 'get', params, headers);
    this.delete = (url: string, params: object, headers: object) => this.execute(url, 'delete', params, headers);
    this.put = (url: string, params: object, headers: headers = {
        'Content-Type': 'application/json; charset=UTF-8'
    }) => this.execute(url, 'PUT', params, headers);
    this.post = (url: string, params: object, headers: headers = {
        'Content-Type': 'application/json'
    }) => this.execute(url, 'post', params, headers);

}
