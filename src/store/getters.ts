import { State } from "../types"

const getters = {
	appConfig: (state: State) => {
		return state.appConfig
	},
	about: (state: State) => {
		return state.about
	},
	num: (state: State) => {
		return state.num
	}
}

export default getters
