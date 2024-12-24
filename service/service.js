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
}
