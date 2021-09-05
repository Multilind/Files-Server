export function setUpRoutes(app) {
  app.use("/api/files", (req, res) => {
    return res.send("server is up!!");
  });
}
