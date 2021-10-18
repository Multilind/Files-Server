import bucket from "../../config/storage";
export async function getAll(req, res) {
  const { id_palavra } = req.params;
  const files = await bucket.getFiles({
    prefix: id_palavra + "/",
  });
  const files_array = files[0].map((file) => {
    const { metadata } = file;
    console.log(metadata);
    return {
      name: metadata.name.match(/\/(.*)/)[1],
      url: metadata.selfLink,
      download_url: metadata.mediaLink,
      autor: metadata.metadata?.author,
      fonte: metadata.metadata?.source,
    };
  });
  res.send(files_array);
}
