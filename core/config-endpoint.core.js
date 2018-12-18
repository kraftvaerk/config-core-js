import _ConfigInterface from './config-interface.core';



class ConfigEndpoint extends _ConfigInterface {
    constructor(environment) {
        super(environment);
    };
    
    register(endpoint = { /* 'environmentX': { keyX: { method, url, data, ...args } }, ... */ }) {
        for(const env in endpoint) {
            const envEndpoints = endpoint[env];
            this.data[env] = {};
            for(const key in envEndpoints) this.data[env][key] = envEndpoints[key];
        }
    }
    
    map(key, environment = this.environment) {
        const endpoints = this.data[environment];
        if (!endpoints) throw new TypeError('environment not registered in ConfigEndpoint', environment);
        const endpoint = (key) ? endpoints[key] : endpoints[environment];
        if (!endpoint) throw new TypeError('endpoint not registered for environment in ConfigEndpoint', environment);
        return endpoint;
    }
};

export default ConfigEndpoint;
