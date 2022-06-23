export const setUser = (state, payload) => {
  const { username, displayName, userId } = payload;
  state.username = username;
  state.displayName = displayName;
  state.userId = userId;
};

export const setData = (state, payload) => state.listData = payload
