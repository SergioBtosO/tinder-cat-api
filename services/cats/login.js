const login = (email, password) => {
  if (email === 'copito@mail.com' && password === 'cop123') {
    return {
      status: 1,
      token: 'xxx-yyy-zzz'
    }
  }
  return {
    status: 2
  }
}

module.exports = {
  login
}
