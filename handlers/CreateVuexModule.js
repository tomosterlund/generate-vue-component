const fs = require('fs');
const vuexModuleTemplate = require('../templates/vuex-module');

const CreateVuexModule = async (modulename) => {
    const filePath = await returnFilePathInStoreDir(modulename);
    const moduleCode = vuexModuleTemplate();
    fs.writeFile(filePath, moduleCode, err => {
        if (err) throw err;
        console.log(`${modulename} was created in Vuex-store`);
    });
}

/**
 * Returns the new filepath in a store directory if it exists
 * If it does not exists, it returns a filepath in CWD
 * @param {string} modulename
 * @returns {string}
 */
const returnFilePathInStoreDir = async (modulename) => {
    let filePath = `${modulename}.js`;
    const filePathInSrcStore = await checkIfStoreExists('./src', './src/store/', modulename);
    if (filePathInSrcStore) {
        filePath = filePathInSrcStore;
    }
    const filePathInStore = await checkIfStoreExists('./', './store/', modulename);
    if (filePathInStore) {
        filePath = filePathInStore;
    }
    return filePath;
};

/**
 * If a store directory exists, the filepath is set to this directory
 * @param {string} path 
 * @param {string} newFilePath
 * @param {string} modulename 
 */
const checkIfStoreExists = async (path, newFilePath, modulename) => {
    const srcExists = fs.existsSync(path);
    if (srcExists) {
        const dir = await fs.promises.opendir(path);
        for await (const dirent of dir) {
            if (dirent.name === 'store') {
                return `${newFilePath}${modulename}.js`;
            }
        }
    }
}

module.exports = CreateVuexModule;