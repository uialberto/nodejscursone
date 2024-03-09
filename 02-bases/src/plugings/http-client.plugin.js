const httpClientPlugin = {

    get: async (url) => {
     
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {}
};

module.exports = {
    http: httpClientPlugin,
};