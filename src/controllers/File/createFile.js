import bucket from "../../config/storage";
export async function create(req, res) {
  const { params, files } = req;
  const { id_palavra } = params;
  const { file } = files;
  const blob = bucket.file(`${id_palavra}/${file.name}`);
  const blobWriter = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
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
