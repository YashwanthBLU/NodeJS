const fs = require("fs");

//Readable stream: reading a file
const readableStream = fs.createReadStream("input.txt", {
  encoding: "utf-8",
  highWaterMark: 16, //read in chunks of 16 bytes
});

//Writable stream: writing to a file
const writableStream = fs.createWriteStream("output.txt");

//listen to data event to process chunks
readableStream.on("data", (chunk) => {
  console.log(`Received chunk`, chunk);
  writableStream._write(chunk);
});

readableStream.on("end", () => {
  console.log("Write completed");
  WritableStream.end();
});

// Listen to 'error' event
readableStream.on("error", (err) => {
  console.error("Error reading file:", err);
});

writableStream.on("error", (err) => {
  console.error("Error writing file:", err);
});
