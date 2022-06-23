export const setSignUp = (state, payload) => {
  const list = state.dataUser
  list.push(payload)
  state.dataUser = list
}
