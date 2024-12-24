import http from "node:http";

const server = http.createServer((request, response) => {
  response.write("Todolist API");
});

server.listen(3000, "localhost", () => {
  console.log("Server is running in http://localhost:3000");
});
