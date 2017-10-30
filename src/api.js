import host from './host'

function getApi (api) {
  return host + api
}

export default {
  login: getApi('/login'),
  logout: getApi('/logout'),
  ...
}