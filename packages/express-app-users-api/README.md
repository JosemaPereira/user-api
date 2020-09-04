# express-app-users-api

This project contain an example CRUD API

## Scripts
### Build

`yarn build`

### Run

`yarn start:api`

### Debug

`yarn dev`

### Test

`yarn test`

## Usage

The project run locale at port 3000

### User Object

```json
{
    "Id":2,
    "email":"janet.weaver@reqres.in",
    "first_name":"Janet",
    "last_name":"Weaver",
    "company":"StatusCode Weekly",
    "url":"http://statuscode.org/",
    "text":"A weekly newsletter focusing on software.."
}
```

### Endpoints

| Method | Resource | Description | Note |
| ------ | ------ | ------ | ------ |
| GET | /users |Get all users| |
| GET | /users/{id} | Get users by id  | id: List of id separated by comma |
| POST | /users | Create new user | |
| PUT | /users/{id} | Update user information | id: integer|
| DELETE | /users/{id} | Delete user | id: integer |

#### Examples

```HTTP
GET /users

GET /users/1,2,3

POST /users
body:
{ "Id" : 4,
  "email":"josema@gmail.com",
  "first_name":"Josema",
  "last_name":"Pereira",
  "company":"StatusCode Weekly",
  "url":"http://statuscode.org/",
  "text":"Lorem Ipsum"
}

PUT /users/5
body:
{
  "first_name":"Sakura",
  "company": "Cool",
}

DELETE /users/4

```
