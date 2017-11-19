const url = 'http://localhost:3000/'

$(() => {
  const $logout = $('#logout-button');
  $logout.click(logout)
})

const logout = () => {
  localStorage.removeItem('token')
  location.href = '/index.html'
}
