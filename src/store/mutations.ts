import * as types from './mutations-types'
import { reqAbout } from '../api/index'
import { State, AppConfig, About } from "../types"

const mutations = {
	[types.SET_APPCONFIG_MUTATION](state: State, payload: AppConfig) {
		state.appConfig = payload
	},
	[types.SET_ABOUT_MUTATION](state: State, payload: About) {
		reqAbout({}).then((result: any) => {
			state.about = result.data
		})
	},
	[types.SET_ADDNUM_MUTATION](state: State, payload: number) {
		state.num = payload
	},
}

export default mutations
