// import multer from 'multer';
// import multerS3 from 'multer-s3';
// import  s3  from '../config/s3.config.js';
// import env  from '../config/env.js'

// export const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket:env.image_bucket_name,
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     key: (req, file, cb) => {
//       const fileName = `uploads/${Date.now()}-${file.originalname}`;
//       cb(null, fileName);
//     },
//   }),
// });