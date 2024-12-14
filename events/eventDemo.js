const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

eventEmitter.on("greet", (name) => {
  console.log(`How are you ${name}?`);
});

console.log("Emiting greet event");
eventEmitter.emit("greet", "Jon");

eventEmitter.on("log", (message) => {
  console.log(message);
});

eventEmitter.emit("log", "This is a custom log message");
