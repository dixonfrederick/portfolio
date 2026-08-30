const fs = require("fs");
const http = require("http");
const path = require("path");

const buildDirectory = path.resolve(__dirname, "..", "build");
const fallbackFile = path.join(buildDirectory, "index.html");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT) || 3000;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(response, filePath, method) {
  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });

    if (method === "HEAD") {
      response.end();
      return;
    }

    fs.createReadStream(filePath).pipe(response);
  });
}

if (!fs.existsSync(fallbackFile)) {
  console.error("Missing build/index.html. Run npm run build first.");
  process.exit(1);
}

http
  .createServer((request, response) => {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" });
      response.end();
      return;
    }

    let pathname;
    try {
      pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    } catch {
      response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Bad request");
      return;
    }

    const requestedFile = path.resolve(buildDirectory, pathname.replace(/^\/+/, ""));
    const isInsideBuild =
      requestedFile === buildDirectory || requestedFile.startsWith(`${buildDirectory}${path.sep}`);

    if (!isInsideBuild) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Forbidden");
      return;
    }

    fs.stat(requestedFile, (error, stats) => {
      if (!error && stats.isFile()) {
        sendFile(response, requestedFile, request.method);
        return;
      }

      sendFile(response, fallbackFile, request.method);
    });
  })
  .listen(port, host, () => {
    console.log(`SPA preview available at http://${host}:${port}`);
  });
