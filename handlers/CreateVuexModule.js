const fs = require('fs');
const vuexModuleTemplate = require('../templates/vuex-module');

const CreateVuexModule = async (modulename) => {

    let filePath = `${modulename}.js`;

    const filePathInStore = await checkIfStoreExists('./src', modulename);
    if (filePathInStore) {
        filePath = filePathInStore;
    }

    const moduleCode = vuexModuleTemplate(modulename);
    fs.writeFile(filePath, moduleCode, err => {
        if (err) throw err;
        console.log(`${modulename} was created in Vuex-store`);
    });
}

/**
 * If a store directory exists, the filepath is set to this directory
 * @param {string} path 
 * @param {string} modulename 
 */
const checkIfStoreExists = async (path, modulename) => {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
        if (dirent.name === 'store') {
            let filePath = `./src/store/${modulename}.js`;
            return filePath;
        }
    }
}

module.exports = CreateVuexModule;