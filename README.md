# Simple RestFul API Todolist

This project provides a simple and well-documented RESTful API for managing a todo list using Node.js and OpenAPI 3.0.3. The API offers CRUD (Create, Read, Update, Delete) operations on todo items, allowing you to interact with your todo list programmatically.

## API Documentation

The API is documented using OpenAPI 3.0.3, which provides a machine-readable specification that can be used to generate client libraries and understand the API's structure. You can access the API documentation at http://localhost:3000/ (replace localhost:3000 with the actual URL of your API server if it's running on a different domain or port).

## API Endpoints

The API provides a single endpoint (/) for interacting with todo items. Here's a breakdown of the supported operations:

### GET /

- Retrieves a list of all todo items.

#### Example Request:

```
GET http://localhost:3000/
```

#### Example Response (Success - Status Code: 200):

```json
[
  {
    "id": 0,
    "todo": "Buy groceries"
  },
  {
    "id": 1,
    "todo": "Finish report"
  }
  {
    "id": 2,
    "todo": "Finish report"
  }
]
```

### POST /

- Creates a new todo item.

#### Example Request:

```
POST http://localhost:3000/
Content-Type: application/json

{
    "todo": "Learn JavaScript",
}
```

#### Example Response (Success - Status Code: 200):

```json
[
  {
    "id": 0,
    "todo": "Buy groceries"
  },
  {
    "id": 1,
    "todo": "Finish report"
  },
  {
    "id": 2,
    "todo": "Finish report"
  },
  {
    "id": 3,
    "todo": "Learn JavaScript"
  }
]
```

### PUT /

- Updates an existing todo item.

#### Example Request:

```
PUT http://localhost:3000/
Content-Type: application/json

{
    "id": 0
    "todo": "Buy milk and eggs",
}
```

#### Example Response (Success - Status Code: 200):

```json
[
  {
    "id": 0,
    "todo": "Buy milk and eggs"
  },
  {
    "id": 1,
    "todo": "Finish report"
  },
  {
    "id": 2,
    "todo": "Finish report"
  },
  {
    "id": 3,
    "todo": "Learn JavaScript"
  }
]
```

### DELETE /

- Deletes an existing todo item.

#### Example Request:

```
DELETE http://localhost:3000/
Content-Type: application/json

{
    "id": 0
}

```

#### Example Response (Success - Status Code: 200):

```json
[
  {
    "id": 0,
    "todo": "Finish report"
  },
  {
    "id": 1,
    "todo": "Finish report"
  },
  {
    "id": 2,
    "todo": "Learn JavaScript"
  }
]
```
