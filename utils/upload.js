// const {GridFsStorage} = require("multer-gridfs-storage");
// const dotenv = require("dotenv");
// const multer = require("multer");


// dotenv.config();

// const username = process.env.DB_USER;
// const password = process.env.DB_PASS;


// const storage = new GridFsStorage({
//     url: `mongodb+srv://${username}:${password}@atlascluster.q4fqqjb.mongodb.net/travelBlog?retryWrites=true&w=majority`,
//     options: {useNewURLParser: true},
//     file: (request, file) =>{
//         const match = ["image/png", "image/jpg"];
//         if(match.indexOf(file.memeType)=== -1){
//             return `${Date.now()}-blog-${file.originalname}`;
//         }
//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-blog-${file.originalname}`
//         }
//     }
// })

// module.exports = multer({storage});