import {createStore} from 'vuex'

const store = createStore({
	state: {
		user: {}
	},
	getters: {
		isLogin: state => Object.keys(state.user).length > 0	//是否登录
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user
		}
	},
	actions: {
	}
})

export default store