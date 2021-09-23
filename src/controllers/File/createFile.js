import bucket from "../../config/storage";
const { v4: uuid } = require("uuid");
export async function create(req, res) {
    const {params, file} = req;
    const {id_palavra} = params;
    console.log(file);

    bucket.upload(
        `${file.destination}${file.filename}`,
        {
            destination: `${id_palavra}/${file.originalname}`,
            metadata:{
                contentType: file.mimetype, 
                firebaseStorageDownloadTokens: uuid()
            },
            public: true
        }
    );
    res.send('ok');
}