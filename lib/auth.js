module.exports = { login, signup }

function login(username, password) {
  return knex('users')
    .select('*')
    .where('email', email)
    .then(user => {
      if (user.length === 0) {
        return { error: 'Email not found in database. Please sign up.' }
      } else {
        let hashedPassword = user[0].password
        let match = bcrypt.compareSync(password, hashedPassword)

        if (match) {
          const launderObject = data => JSON.parse(JSON.stringify(data))
          let payload = launderObject(user[0])
          delete payload.password
          let token = jwt.sign(payload, process.env.TOKEN_SECRET)
          // create session/send token to front-end
          return { token }
        } else {
          return { error: 'Email and password do not match. Please enter correct password.' }
        }
      }
    })
}

function signup(user) {
  // TODO: Can you finish implementing this PR?
}
