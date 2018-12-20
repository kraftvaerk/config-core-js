import _ConfigInterface from './config-interface.core';



class ConfigAnalytics extends _ConfigInterface {
    constructor(environment) {
        super(environment);
    };
    
    register(analytics = { /* 'environmentX': { tags = [], track = (data) => {} */ }) {
        for(const env in analytics) {
            const analytic = analytics[env];
            if (!analytic.track || typeof analytic.track !== 'function') throw new TypeError('analytic.track is not a function and can not be registered in ConfigTracker', env, anlaytic);
            this.data[env] = analytic;
        }
    }
    
    map(environment = this.environment) {
        const analytic = this.data[environment];
        if (!analytic) throw new TypeError('environment not registered in ConfigTracker', environment);
        return analytic;
    }
};

export default ConfigTracker;
