const VuexSetupTemplate = `import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        sampleModule: myModule
    }
})

export default store;
`

module.exports = VuexSetupTemplate;