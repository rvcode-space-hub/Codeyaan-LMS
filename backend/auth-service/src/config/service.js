import env from './env.js'


class Service {
    constructor(){
        this.mediaService=env.services_media;
    }
}

export default new Service();