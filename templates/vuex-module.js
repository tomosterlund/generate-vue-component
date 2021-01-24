const vuexModuleTemplate = (moduleName) => {
    const template = `const ${moduleName} = {
    state: () => ({

    }),
    mutations: {

    },
    actions: {

    },
    getters: {

    }
}

export default ${moduleName};
`

    return template;
}

module.exports = vuexModuleTemplate;