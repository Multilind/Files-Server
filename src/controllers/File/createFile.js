import bucket from "../../config/storage";
export async function create(req, res) {
  const { params, files, body } = req;
  const { id_palavra } = params;
  const { fonte, autor } = body;
  const file = files?.file;
  if (!file) {
    res.status(401).send("No file sent.");
    return;
  }
  const blob = bucket.file(`${id_palavra}/${file.name}`);
  const blobWriter = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
      metadata: {
        'source': fonte,
        'author': autor
      }
    },
    public: true,
  });
  blobWriter.on("error", (err) => {
    res.status(400).send(err);
  });
  blobWriter.on("finish", () => {
    res.status(200).send("File uploaded.");
  });
  blobWriter.end(file.data);
}
