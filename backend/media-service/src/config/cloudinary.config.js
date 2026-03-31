import {v2 as  cloudinary} from 'cloudinary'
import env from './env.js'

cloudinary.config({
    cloud_name:env.cloudinary,
    api_key: env.cloudinary_key,
    api_secret:env.cloudinary_secret
});

export default cloudinary;