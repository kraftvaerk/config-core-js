import _ConfigInterface from './config-interface.core';



class ConfigDebug extends _ConfigInterface {
    constructor(environment) {
        super(environment);
    };
    
    register(debugs = { /* 'environmentX': { endpoint = {}, log () => {} } */ }) {
        for(const env in debugs) {
            const debug = debugs[env];
            if (!debug.log || typeof debug.log !== 'function') throw new TypeError('debug.log is not a function and can not be registered in ConfigLogger', env, debug);
            this.data[env] = debug;
        }
    }
    
    map(environment = this.environment) {
        const debug = this.data[environment];
        if (!debug) throw new TypeError('environment not registered in ConfigDebug', environment);
        return debug;
    }
};

export default ConfigDebug;
