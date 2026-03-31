import dotenv from 'dotenv'
dotenv.config();

class Env {
    constructor(){
        if(!process.env.MEDIA_DATA_SERVICE){
            throw new Error ("messing the media data") 
        }

        this.services = {
            media : process.env.MEDIA_DATA_SERVICE
        } 
    }
}

export default new Env();