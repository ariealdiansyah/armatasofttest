import service from 'src/services/comment'

export const getData = async ({ commit }, userId) => {
  try {
    const res = await service.getData(userId)
    console.log(res);
    const data = res.data
    commit('setData', data)
  } catch (error) {
    throw error
  }

}
