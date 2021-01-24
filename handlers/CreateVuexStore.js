const fs = require('fs');
const inquirer = require('inquirer');
const VuexSetupTemplate = require('../templates/VuexSetup');

const CreateVuexStore = async () => {
    const overrideExistingStore = await overrideOldStore();
    if (!overrideExistingStore) return;

    const srcExists = fs.existsSync('./src');
    if (srcExists) {
        let data = new Uint8Array(Buffer.from(VuexSetupTemplate));
        fs.mkdirSync('./src/store');
        fs.writeFileSync('./src/store/index.js', data);
        // Let user specify name of a first module with an option, e.g. -m SessionModule
        // If user does not specify a name, it defaults to something.
    }
};

const overrideOldStore = async () => {
    const storeExists = checkIfStoreExistsAndReturnPath();
    if (storeExists) {
        const stopFunction = await allowUserToCancel();
        if (stopFunction) {
            return false;
        }
    }
    fs.rmdirSync('./src/store', {recursive: true});
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

module.exports = CreateVuexStore;