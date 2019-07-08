export default {
    namespaced: true,
    state: {
        token: ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        setToken({ commit }, token) {
            return commit('setToken', token)
        }
    },
    getters: {
        token: state => state.token
    }
}
