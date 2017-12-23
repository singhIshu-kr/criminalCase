const http = require('http');
const fs = require('fs');
const url = require('url');
const updateGuestPage = require('./storeFeedBack.js').updateGuestPage;

const doesFileExist = function(filename) {
  return fs.existsSync(filename);
}

const getFileType = function(filename) {
  let fileType = filename.slice(filename.lastIndexOf("."));
  let header = {
    ".jpg": "img/jpg",
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".gif": "img/gif",
    ".pdf": "text/pdf"
  }
  return header[fileType];
}


const requestHandler = function(request, response) {
  let fileName = request.url.replace("/", "");
  if (doesFileExist(fileName)) {
    response.setHeader("Content-type", getFileType(fileName));
    response.write(fs.readFileSync(fileName), "utf8");
  }
  else if (fileName.startsWith("feedback")) {
    updateGuestPage(fileName);
    response.write(fs.readFileSync("./guestPage.html","utf8"));
  }
  else{
    response.statusCode=404;
    response.write("File Not Found");
  }
  response.end();
}


const server = http.createServer(requestHandler);
server.listen(9000);
