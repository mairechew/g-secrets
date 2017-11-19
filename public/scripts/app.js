const url = 'http://localhost:3000/'

$(() => {
  $('.menu .item').tab()
  $('.checkbox').checkbox()
  $('form.login').submit(logIn)
  $('form.signup').submit(signUp)
})

function logIn(event) {
  event.preventDefault()
  const email = $('input[name=login-email').val()
  const password = $('input[name=login-password').val()
  const data = {email, password}
  $.post(`${url}auth/login`, data)
    .then(response => {
    if (response.error) {
      alert(response.error)
    } else {
      localStorage.setItem('token', response.token);
      location.href = '/secrets.html';
    }
  })
}

function signUp(event) {
  event.preventDefault()
  const username = $('input[name=signup-username').val()
  const email = $('input[name=signup-email').val()
  const password = $('input[name=signup-password').val()
  const data = {username, email, password}
  $.post(`${url}auth/signup`, data)
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.token);
        location.href = '/secrets.html';
      }
    })
}
