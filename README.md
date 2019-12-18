
- Intro


- Angular Introduction
  - Video lecture: https://www.youtube.com/watch?v=LGc9zNdDot0

- @angular/cli
  - Video lecture: https://www.youtube.com/watch?v=Ob7KZnZFZRk

- Angular Architecture
  - Video lecture: https://www.youtube.com/watch?v=TQ-0stE4Y0o


### EX Login Register

- Your app will contain the following components:
  - AppComponent
  - LoginComponent
  - RegisterComponent
  - TodoListComponent

- The login will contain a form to enter email and password
- will send post request upon submit to the url: https://academeez-login-ex.herokuapp.com/api/users/login
- server will return JWT token that we will transfer to TodoListComponent
- you can only login after you registered

- The register will contain a form to enter: firstName, lastName, email, password
- will send post request to the url: https://academeez-login-ex.herokuapp.com/api/users/register
- this will create a user which can later login
- the server will return a JWT token which you will transfer to TodoListComponent

- TodoListComponent will send a get request to: https://academeez-login-ex.herokuapp.com/api/tasks
- you need to pass in the headers the jwt token you got: Authorization: Bearer <token>
- print the list of item you got from the server

