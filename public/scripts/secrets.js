const url = 'http://localhost:3000/'

$(() => {
  const $logout = $('#logout-button');
  $logout.click(logout)

  let token = localStorage.getItem('token')
  let decoded = jwt_decode(token)
  $.ajax({
    method: 'GET',
    url: `${url}users/${decoded.id}/secrets`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(secrets => {
    appendSecrets(secrets)
  })
})

const logout = () => {
  localStorage.removeItem('token')
  location.href = '/index.html'
}

const appendSecrets = (secrets) => {
  secrets.data.forEach(secret => {
    $('.secrets').append(
      `<li>${secret.secret}</li>`
    )
  })

}
