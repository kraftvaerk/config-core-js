// configuration interface to implement
class ConfigInterface {
    constructor(environment) {
        if(!environment) throw new TypeError('enviroment required to instance a descendent of ConfigInterface');
        this.environment = environment;
        this.data = {};
    };
    
    register(environment) {
        throw new TypeError('register() not implemented by descendent of ConfigInterface');
    }
    
    map(environment) {
        throw new TypeError('map() not implemented by descendent of ConfigInterface');
    }
};

export default ConfigInterface;
