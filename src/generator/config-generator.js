import _ConfigInterface from '../core/config-interface.core';



class ConfigGenerator {
    static generate(config = {}, configDebug, configAnalytics, configEndpoint, ...args) {
        return Object.assign(config, ...args, {
            log: 	    (configDebug instanceof _ConfigInterface) 	        ? configDebug.map() 	    : configDebug, 
            track: 	    (configAnalytics instanceof _ConfigInterface) 	    ? configAnanlytics.map() 	: configAnalytics, 
            endpoint: 	(configEndpoint instanceof _ConfigInterface)        ? configEndpoint.map() 	    : configEndpoint
        });
    };
};

export default ConfigGenerator;
