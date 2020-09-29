export default function (id, user) {
  delete user.password
  return {
    id,
    ...user,
  }
}
