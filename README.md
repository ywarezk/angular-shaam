
- Intro


- Angular Introduction
  - Video lecture: https://www.youtube.com/watch?v=LGc9zNdDot0

- @angular/cli
  - Video lecture: https://www.youtube.com/watch?v=Ob7KZnZFZRk

- Angular Architecture
  - Video lecture: https://www.youtube.com/watch?v=TQ-0stE4Y0o

- Angular components
  - https://www.youtube.com/watch?v=AR2xuG0Rid8

- RXJS
  - https://www.youtube.com/watch?v=rLPW1VowY1E

- Angular Forms
  - https://www.youtube.com/watch?v=GM6tidgA5zs

- Angular Redux
  - https://www.youtube.com/watch?v=h_VEq8yBTpg

- EX Angular Redux
  - https://www.youtube.com/watch?v=G6vd7gTNhQs

- Angular DI
  - https://www.youtube.com/watch?v=CQIAjrfLnQQ

- Angular Change Detection
  - https://www.youtube.com/watch?v=9nGjgZSVptk


### EX Login Register

- https://www.youtube.com/watch?v=8BtdI3-ateM
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

### EX Forms

- Create a login form to enter email and password
- Create two Login components
  - LoginReactive - the login form should be created with reactive forms
  - LoginTemplate - the login form should be created with template driven forms
- the forms should have validation - email validation, password has min length, required both fields
- upon validation errors the input should be bordered red and a proper error message should be written.
- the forms should send a post request to https://academeez-login-ex.herokuapp.com/api/users/login  and should write at the bottom of the form if the login is success or fail
- use bootstrap to design your form.



