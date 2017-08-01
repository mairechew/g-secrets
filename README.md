# Galvanize Secrets

Shh! Read quietly. The purpose of this repo is to practice authentication and authorization concepts
by completing the following tasks.

## Prerequisites

Postgres, npm, and knex must be installed on your computer. Then run:

`npm install`

`createdb secrets`

`knex migrate:latest`

`knex seed:run`

## Usage

Run the server application with `nodemon` or `npm start`. 

The client is inside the `public` directory. Either:

- `cd ./public` and open `index.html` or run it with a client server like `lite-server` or `http-server`
- Or serve the files with `express` by adding the following code to `app.js`

```
app.use(express.static('./public'))
```

## Tasks

SERVER tags suggests doing the work in the server, mainly inside the `routes` directory

CLIENT tags suggests doing the work in the client, mainly inside the `public/scripts` directory

- [ ] Sign Up Process 
  - [ ] Validate unique email to prevent duplicates (SERVER)
  - [ ] Encrypt user password (SERVER)
  - [ ] Upon success, store user in the databse, generate session token, and respond with token (SERVER)
  - [ ] Upon failure, respond with error (SERVER)
  - [ ] Set client session and redirect to authorized page (CLIENT)
- [ ] Log In Process
  - [ ] Compare input password with hashed password for a match (SERVER)
  - [ ] Upon success, generate session token (SERVER) 
  - [ ] Upon failure, respond with error (SERVER) 
  - [ ] Set client session and redirect to authorized page (CLIENT) 
- [ ] Authorize User
  - [ ] Parse token in the routes (SERVER)
  - [ ] Check and set token for any requests to user information (SERVER)
  - [ ] User may only request their own information and secrets (SERVER)
  - [ ] Send error for missing token or mismatched user (SERVER)
- [ ] Authenticate User
  - [ ] Check for session token in the client (CLIENT)
  - [ ] Add token to headers and request user secrets (CLIENT)
  - [ ] Upon success, display secrets (CLIENT)
  - [ ] Upon failure, remove session token and redirect to home page (CLIENT)
  - [ ] During a session, redirect user out of home page (CLIENT)
- [ ] Log Out Process
  - [ ] Remove session token and redirect to home page (CLIENT)

## TIPS:

- Use [bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords
- Use [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for generating session tokens
- Use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for managing sessions in the client.
- Use [location.href](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/href) to redirect in the client.
 
## Standards

### Describe authentication/authorization concepts
- Describe authentication
- Describe authorization
- Describe why passwords need to be hashed in the database
- Describe various attack vectors, such as session hijacking, cross-site scripting and what measures to take to protect them

### Harden a server-side application against security vulnerabilities
- Password is hashed in the database using a slow-hashing algorithm
- Create and maintain a user session with Cookies or JWTs
- Encryption keys are set in environment variables

### Authenticate and authorize users in a server-side application
- Users can sign up for to the app with a unique email
- Users cannot sign up for to the app with a duplicate email
- Users can login to the app with valid email/password
- Users cannot login to the app with a blank or missing email
- Users cannot login to the app with a blank or incorrect password
- There is a resource that can only be seen by logged in users
- There is a resource that can only be seen by a specific user
- There is a resource that has some links and content that only appears when logged in / for certain users
