# 1.	import required references
```javascript

import { ConfigDebug, ConfigAnalytics, ConfigEndpoint, ConfigGenerator } from '@kraftvaerk/config-core';
import { Endpoint } from '@krafvaerk/data-core'; 

```

# 2. 	get the environment variable

```javascript
const env = process.ENV;

```

# 3.	register the logger (for debugging)

```javascript

const configDebug = new ConfigDebug(env);
configDebug.register({
    'local': {
        endpoint: null,
        log: (level, message, data) => { console[level || 'log'](message, data); }
    },
    'production': {
        endpoint: null,
        log: (level, message, data) => { /* import the relevant logger function */ }
    }
});

// call the "current" debug object
const debug = configDebug.map(/* optional evnironment argument */); 

```

# 4.	register the tracker (for analytics)

```javascript

const configAnalytics = new ConfigAnalytics(env);
configAnalytics.register({
    'local': {
        tags: [],
        track: (args) => { console.log(args); }
    }, 
    'production': {
        tags: [],
        track: (args) => { /* import the relevant tracker function */ }
    } 
});

// call the "current" analytics object
const analytics = configAnalytics.map(/* optional evnironment argument */); 

```

# 5.	register the endpoints (for application)

```javascript

const configEndpoint = new ConfigEndpoint(env);
configEndpoint.register({
    'local': {
        'resources': new _Endpoint(method, url, data), /* returns an endpoint options object required to make an endpoint call {  } */
        'modelA': new _Endpoint(method, url, data),
        'modelB': new _Endpoint(method, url, data),
        'submit': new _Endpoint(method, url, data)
    }, 
    'production': {
        'resources': new _Endpoint(method, url),
        'model': new _Endpoint(method, url),
        'submit': new _Endpoint(method, url)
    }
});

// call the "current" endpoint
// if no key is supplied then all the registered endpoints for the current environment are returned
const debug = configEndpoint.map('resources', /* optional environment argument */); 

```

# 6. 	export application configuration

```javascript

const config = ConfigGenerator.generate({}, configDebug, configAnalytics, configEndpoint, { additional: 'aguments' }, { more: { additional: 'arguments' } }, { malcolm: 'rules' });

```

# 7. 	initialize the application (react sample)

```javascript

const containerElement = document.querySelector('#my-app');
ReactDOM.render(<App config={config} />, containerElement);

```
