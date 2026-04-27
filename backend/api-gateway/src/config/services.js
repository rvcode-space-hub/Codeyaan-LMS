import Env from './env.js';

class Service {
    constructor(){
        this.mediaService = Env.services.media
        this.authService = Env.services.auth
    }   

}



export default new Service()