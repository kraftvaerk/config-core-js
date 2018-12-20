import { ConfigEndpoint } from '../dist';



// register environment specific endpoints
const config = new ConfigEndpoint('local');
config.register({
	'local': {
		'articles': new Endpoint('get', '/mock/articles.json')
	}, 
	'production': {
		'articles': new Endpoint('get', '/api/articles/', { id: 123 }, [{ 'cache-control': 5000 }])
	}
});

// call the root loader and sanitize the repsonse data
console.log(config);
