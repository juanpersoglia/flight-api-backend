export const logger = (req, res, next) => {
  const start = Date.now();

  console.log("LOGGER url:", req.url);
  console.log("LOGGER originalUrl:", req.originalUrl);
  console.log("LOGGER path:", req.path);

  res.on("finish", () => {
    const time = Date.now() - start;
    console.log(`${req.method} ${req.path} - ${res.statusCode} (${time}ms)`);
  });

  next();
};
