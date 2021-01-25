const fs = require('fs');
const inquirer = require('inquirer');
const VuexSetupTemplate = require('../templates/VuexSetup');
const { writeToFile } = require('./CreateVuexModule');

const CreateVuexStore = async (firstModuleName) => {
    const overrideExistingStore = await overrideOldStore();
    if (!overrideExistingStore) return;

    const srcExists = fs.existsSync('./src');
    if (srcExists) {
        await writeToFiles('./src/store', firstModuleName);
    } else {
        await writeToFiles('./store', firstModuleName);
    }
};

const overrideOldStore = async () => {
    const storeExists = checkIfStoreExistsAndReturnPath();
    if (storeExists) {
        const stopFunction = await allowUserToCancel();
        if (stopFunction) {
            return false;
        }
        const existingStore = storeExists;
        fs.rmdirSync(existingStore, {recursive: true});
    }
    return true;
}

const checkIfStoreExistsAndReturnPath = () => {
    const storeExists = fs.existsSync('./store');
    const srcStoreExists = fs.existsSync('./src/store');
    if (storeExists) return './store';
    if (srcStoreExists) return './src/store';
}

/**
 * @returns {boolean} false if user wants to override store, true if not
 */
const allowUserToCancel = async () => {
    const userAnswer = await inquirer
        .prompt([{
            name: 'override',
            message: 'This action will override your current directory named store. Proceed anyway?',
            choices: ['Yes', 'No'],
            type: 'list'
        }]);
    if (userAnswer.override === 'Yes') {
        return false;
    }
    return true;
}

/**
 * Writing to the files of the store
 * @param {string} filePathSuffix 
 * @param {string} firstModuleName 
 */
const writeToFiles = async (filePathSuffix, firstModuleName) => {
    let data = new Uint8Array(Buffer.from(VuexSetupTemplate(firstModuleName || 'myModule')));
    fs.mkdirSync(`${filePathSuffix}`);
    fs.writeFileSync(`${filePathSuffix}/index.js`, data);
    console.log(`
        \nVuex store was created - \x1b[33mDon\'t forget to import it on your Vue instance\x1b[0m`
    );
    await writeToFile(`${filePathSuffix}/${firstModuleName || 'myModule'}.js`, `${firstModuleName || 'myModule'}`);
}

module.exports = CreateVuexStore;