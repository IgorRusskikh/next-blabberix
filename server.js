import { createServer } from "http";
import next from "next";
import { parse } from "url";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, '0.0.0.0'); // Добавляем '0.0.0.0' здесь

  console.log(
    `> Server listening at http://0.0.0.0:${port} as ${
      dev ? "development" : 3000
    }`
  );
});
