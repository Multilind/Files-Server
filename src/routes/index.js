import fileRouters from "./File/file.routes";
export function setUpRoutes(app) {
  app.use("/api/files", fileRouters);
}