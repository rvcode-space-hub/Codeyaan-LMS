import Env from './env.js';

class Service {
    constructor(){
        this.mediaService = Env.services.media
    }   
}

export default new Service()