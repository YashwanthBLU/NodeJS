const file = require("fs");

file.writeFile("example.txt", "Hello, Node.js", (err) => {
  if (err) {
    console.log(`Error writing to the file ${err}`);
    return;
  }

  console.log("File written successfully");

  file.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading file");
      return;
    }

    console.log(`File read completed: ${data}`);

    file.appendFile("example.txt", "Learning Node", (err) => {
      if (err) {
        console.log("Error appending file", err);
        return;
      }
      console.log("Content appended successfully!");

      file.unlink("example.txt", (err) => {
        if (err) {
          console.log("Error deleting file", err);
          return;
        }
        console.log("File deleted successfully!");
      });
    });
  });
});
