module.exports = function (id, user) {
  delete user.password
  return {
    id,
    ...user,
    created_at: Date.now(),
  }
}
