export class TodolistService {
  // initialize the to-do list with some default tasks
  // local storage (not using database for this project)
  todolist = ["Learn Java", "Learn Javascript", "Learn Python"];

  /**
   * Converts the to-do list into a JSON string with a standard respon (same with api docs)
   * @returns {string} JSON string representing the to-do list.
   */
  getJsonTodolist() {
    const obj = {
      code: 200, // HTTP status code indicating success
      status: "OK", // Status message
      data: this.todolist.map((value, index) => ({
        id: index, // Unique identifier for each to-do
        todo: value, // The to-do task description
      })),
    };

    // Convert the object to a JSON string
    return JSON.stringify(obj);
  }

  /**
   * Handles the HTTP request and response to send the to-do list.
   * @param {http.IncomingMessage} request - The incoming HTTP request.
   * @param {http.ServerResponse} response - The HTTP response to be sent.
   */
  getTodolist(request, response) {
    const json = this.getJsonTodolist();

    // Set the response header to indicate JSON content
    response.setHeader("Content-Type", "application/json");
    // Write the JSON string to the response
    response.write(json);
    // End the response
    response.end();
  }

  /**
   * Handles the HTTP request and response to create a new to-do item and add it to the to-do list.
   *
   * This method listens for incoming data on the request, parses the data as JSON,
   * and expects the JSON to contain a `todo` property. The `todo` is then added to the
   * internal `todolist` array. Finally, it sends back the updated to-do list as a JSON response.
   *
   * @param {http.IncomingMessage} request - The incoming HTTP request containing the new to-do item.
   * @param {http.ServerResponse} response - The HTTP response to be sent back to the client.
   */
  createTodo(request, response) {
    // Listen for data event on the request to receive the body of the request
    request.addListener("data", (data) => {
      // Parse the incoming data as JSON
      const body = JSON.parse(data.toString());

      // Add the new to-do item to the todolist
      this.todolist.push(body.todo);

      // Set the response header to indicate JSON content
      response.setHeader("Content-Type", "application/json");

      // write the updated to-do list as a JSON string to the response
      response.write(this.getJsonTodolist());
      response.end();
    });
  }

  /**
   * Handles the HTTP request and response to update to-do item to the to-do list.
   *
   * This method listens for incoming data on the request, parses the data as JSON,
   * and the give once condition if todolist have an ID the todo can replace with new value
   * Finally, it sends back the updated to-do list as a JSON response.
   *
   * @param {http.IncomingMessage} request - The incoming HTTP request containing the update to-do item.
   * @param {http.ServerResponse} response - The HTTP response to be sent back to the client.
   */
  updateTodo(request, response) {
    // Listen for data event on the request to receive the body of the request
    request.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        // if there is an ID replace the value with body.todo
        this.todolist[body.id] = body.todo;
      }

      // set header with application/json
      response.setHeader("Content-Type", "application/json");

      // return the json string data updated
      response.write(this.getJsonTodolist());
      response.end();
    });
  }

  /**
   * Delete a todo item from the todolist.
   *
   * This method listens for incoming data on the request, parses the data to extract
   * the ID of the todo item to be deleted, and removes the item from the todolist if it exists.
   *
   * @param {http.IncomingMessage} request - The incoming HTTP request containing the delete to-do item.
   * @param {http.ServerResponse} response - The HTTP response to be sent back to the client.
   */
  deleteTodo(request, response) {
    // Listen for data event on the request to receive the body of the request
    request.addListener("data", (data) => {
      // Parse the incoming data to JSON
      const body = JSON.parse(data.toString());

      // Check if the todo item with the specified ID exists
      if (this.todolist[body.id]) {
        // Remove the todo item from the todolist
        this.todolist.splice(body.id, 1);
      }

      // Set the response header to indicate JSON content
      response.setHeader("Content-Type", "application/json");
      // return the json string data delete
      response.write(this.getJsonTodolist());
      response.end();
    });
  }
}
