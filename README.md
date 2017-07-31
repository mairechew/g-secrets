# Galvanize Secrets

Shh! Read quietly. The purpose of this repo is to practice authentication and authorization concepts
by completing the following tasks.

## Tasks

- [ ] Sign Up Process 
  - [ ] Validate unique email to prevent duplicates
  - [ ] Encrypt user password
  - [ ] Upon success, generate session token 
  - [ ] Upon failure, respond with error 
  - [ ] Set client session and redirect to authorized page 
- [ ] Log In Process
  - [ ] Compare input password with hashed password for a match
  - [ ] Upon success, generate session token 
  - [ ] Upon failure, respond with error 
  - [ ] Set client session and redirect to authorized page 
- [ ] Authorize User
  - [ ] Parse token in the routes
  - [ ] Check and set token for any requests to user information
  - [ ] User may only request their own information and secrets
  - [ ] Send error for missing token or mismatched user
- [ ] Authenticate User
  - [ ] Check for session token in the client
  - [ ] Add token to headers and request user secrets
  - [ ] Upon success, display secrets 
  - [ ] Upon failure, remove session token and redirect to home page
  - [ ] During a session, redirect user out of home page 
- [ ] Log Out Process
  - [ ] Remove session token and redirect to home page
 
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
