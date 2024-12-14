const async = require("async");

const downloadFile = (url, callback) => {
  console.log(`Starting download from: ${url}`);
  setTimeout(() => {
    console.log("download completed");
    callback();
  }, 2000);
};

downloadFile("https\\:examplefile.com", () => {
  console.log("This is the file");
});

const promiseDownloadFile = (url) => {
  return new Promise((resolve, reject) => {
    console.log(`Starting download using promise: ${url}`);
    resolve("Downloading!");
  });
};

promiseDownloadFile("https:\\file.com").then((msg) => {
  console.log(msg);
});
