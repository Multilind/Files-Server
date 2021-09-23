import fileRouters from "./File/file.routes";
const fileUpload = require("express-fileupload");
export function setUpRoutes(app) {
  app.use(fileUpload());
  app.use("/api/files", fileRouters);
}
