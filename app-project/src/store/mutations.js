
import state from './state.js'
import * as types from './mutation-types'

export default{
	[types.ADD](state){
		state.count++
	},
	reduce(state){
		state.start--
	}
}