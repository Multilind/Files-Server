import bucket from "../../config/storage";
export async function getAll(request, response) {
    const {params} = request;
    const {id_palavra} = params;
    const files = await bucket.getFiles(
        {
            prefix: id_palavra+'/'
        }
    );
    const files_array = files[0].map((file)=>{const {metadata} = file; return {name: metadata.name.match(/\/(.*)/)[1], url: metadata.selfLink, download_url: metadata.mediaLink}});
    response.send(files_array);
  }