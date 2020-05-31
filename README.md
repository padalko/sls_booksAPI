# Books library management API.

### Powered by AWS Lambdas using Serverless and Dynamo-DB.

### Installation:

1. Prerequisites:
   - make sure you have AWS account and Serverless account.
   - runtime requirements: Node.js 12+
2. Install global and project dependencies:

   - `npm i -g serverless`
   - `npm i`
   - create **application** `books-manager` at
     [Serverless Dashboard](https://dashboard.serverless.com/)

3. Deploy application using by using serverless: `sls deploy`

###API:

- #### Retrieve all books

  [ *GET* ] `/books`

  ##### _response_:

  ```json
  [
    {
      "authorName": "Julio Cortazar",
      "id": "e190c71b-d7d8-4c78-9700-fcfb3249fd9b",
      "name": "Rayela",
      "releaseDate": 1049155200000
    },
    ...{
      "authorName": "Gabriel Garsia Marquez",
      "id": "1af3aefd-c471-46cb-9cf9-83c81f6da13c",
      "name": "100 years of solitude",
      "releaseDate": 1049155200000
    }
  ]
  ```

- #### Retrieve book by ID (UUID v4 format)

  [ *GET* ] `/book/${uuid-v4}`

  ##### _response_:

  ```json
  {
    "authorName": "Ernest Hemingway",
    "id": "47b8ab83-1b8b-422b-8694-2eb1159e2417",
    "name": "Farewell to Arms",
    "releaseDate": 1049155200000
  }
  ```

- #### Remove book by ID (UUID v4 format)
  [ *POST* ] `/book/${uuid-v4}/delete`

* #### Create book
  [ *POST* ] `/book`
  ##### _request_:
  ```json
  {
    "authorName": "Ernest Hemingway",
    "name": "Farewell to Arms",
    "releaseDate": 1049155200000
  }
  ```
  ##### _response_:
  ```json
  {
    "id": "53ee55e8-6aa9-429f-bb95-9898d2a35822"
  }
  ```
* #### Update book
  [ *POST* ] `/book/${uuid-v4}/update`
  ##### _request_:
  ```json
  {
    "authorName": "Ernest Hemingway",
    "name": "Moveable feast",
    "releaseDate": 1049155200000
  }
  ```
  ##### _response_:
  ```json
  {
    "authorName": "Ernest Hemingway",
    "name": "Moveable feast",
    "releaseDate": 10455555500000,
    "id": "53ee55e8-6aa9-429f-bb95-9898d2a35822"
  }
  ```
