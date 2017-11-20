var express = require('express')
var router = express.Router()
// Additional connections and modules
var knex = require('../db/connection')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const auth = require('../lib/auth')
require('dotenv').config()

router.post('/login', function(req, res, next) {
  let email = req.body.email
  let password = req.body.password

  auth.login(email, password).then(result => {
    res.json(result)
  })
})

router.post('/signup', function(req, res, next) {
  // res.json({message: 'signup successful'});
  let email = req.body.email
  let password = req.body.password

  knex('users')
    .select('*')
    .where('email', email)
    .then(user => {
      if (user.length === 0) {
        let saltRounds = 10
        let hash = bcrypt.hashSync(password, saltRounds)
        req.body.password = hash

        knex('users')
          .insert(req.body)
          .returning('*')
          .then(newUser => {
            const launderObject = data => JSON.parse(JSON.stringify(data))
            let payload = launderObject(newUser[0])
            delete payload.password
            let token = jwt.sign(payload, process.env.TOKEN_SECRET)

            res.json({ token: token })
          })
      } else {
        res.json({ error: 'Email already exists in database. Please enter unique email.' })
      }
    })
})

module.exports = router
