const setVuexSetupTemplate = (moduleToImport) => {
    const VuexSetupTemplate = `import Vue from 'vue'
import Vuex from 'vuex'\n${moduleToImport ? `import ${moduleToImport} from './${moduleToImport}'\n` : ''}
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        ${moduleToImport}
    }
})

export default store;
`
    return VuexSetupTemplate;
}


module.exports = setVuexSetupTemplate;