import bucket from "../../config/storage";
export async function create(req, res) {
    const {params, files} = req;
    const {id_palavra} = params;
    const {arquivo} = files;
    console.log(arquivo);
    const blob = bucket.file(`${id_palavra}/${arquivo.name}`);
    const blobWriter = blob.createWriteStream({
        metadata:{
            contentType: arquivo.mimetype
        }
    });
    blobWriter.on('error', (err) => {
        console.log(err)
    });
    blobWriter.on('finish', () => {
        res.status(200).send("File uploaded.");
    });
    blobWriter.end(arquivo.data);
}