import http from "node:http";
import { TodolistService } from "./service/service.js";

// Create an instance of TodolistService
const service = new TodolistService();

/**
 * Create an HTTP server that listens for operation API documentation
 * and responds with format to-do list in JSON
 */
const server = http.createServer((request, response) => {
  // Check every operation API method (GET, POST, PUT, DELETE)
  if (request.method === "GET") {
    // Use the instance service to handle the request and response
    service.getTodolist(request, response);
  } else if (request.method === "POST") {
    service.createTodo(request, response);
  } else if (request.method === "PUT") {
    service.updateTodo(request, response);
  }
});

// Start the server on localhost at port 3000
server.listen(3000, "localhost", () => {
  console.log("Server is running in http://localhost:3000");
});
