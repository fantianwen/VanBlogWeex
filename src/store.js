/**
 * Created by RadAsm on 17/2/16.
 */
import Vuex from 'vuex'
import {states} from './vuex/states'
import {getters} from './vuex/getters'
import {mutations} from './vuex/mutations'
import {actions} from './vuex/actions'

Vue.use(Vuex);

export default new Vuex.Store({
    state: states,
    getters: getters,
    mutations: mutations,
    actions: actions,
});
