import ConfigInterface from './core/config-interface.core';
import ConfigDebug from './core/config-debug.core';
import ConfigAnalytics from './core/config-analytics.core';
import ConfigEndpoint from './core/config-endpoint.core';
import ConfigGenerator from './generator/config-generator.core';



export default { 
	ConfigInterface, 
	ConfigDebug, 
	ConfigAnalytics, 
	ConfigEndpoint, 
	ConfigGenerator 
};


const endpoint = new ConfigEndpoint();
endpoint.register = {
	'local': {

	}, 
	'production': {

	}
};

const getUserByID = (data) => {
	const ep = endpoint.map('getUserByID');
	return _api.call(ep).then(_sanitize.json);
};