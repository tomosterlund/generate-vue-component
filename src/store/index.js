import Vue from 'vue'
import Vuex from 'vuex'
import Marinasmodule from './Marinasmodule'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Marinasmodule
    }
})

export default store;
