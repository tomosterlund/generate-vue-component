const fs = require('fs');
const withDataTemplate = require('../templates/with-data');
const withDataMethodsTemplate = require('../templates/with-data-methods');
const withMethodsTemplate = require('../templates/with-methods');
const withoutPropertiesTemplate = require('../templates/without-properties');

const CreateVueComponent = async (fileName, options) => {
    
    let data;
    let filePath = `${fileName}.vue`;
    const filePathInComponentsDir = await checkIfComponentsDirExists('./src', fileName);
    if (filePathInComponentsDir) {
        filePath = filePathInComponentsDir;
    }

    if (options.help) {
        return console.log(`The following flags are available:
            -d                adds a data property to the component
            -m                adds a methods property
        `);
    }

    
    if (options.data && !options.methods) {
        data = new Uint8Array(Buffer.from(withDataTemplate));
    }
    
    if (options.data && options.methods) {
        data = new Uint8Array(Buffer.from(withDataMethodsTemplate));
    }
    
    if (options.methods && !options.data) {
        data = new Uint8Array(Buffer.from(withMethodsTemplate));
    }
    
    if (!options.methods && !options.data) {
        data = new Uint8Array(Buffer.from(withoutPropertiesTemplate));
    }
    
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(`${fileName} component was created`);
    });
}

/**
 * If a components directory exists, the filepath is set to this directory
 * @param {string} path 
 * @param {string} modulename 
 */
const checkIfComponentsDirExists = async (path, modulename) => {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
        if (dirent.name === 'components') {
            let filePath = `./src/components/${modulename}.vue`;
            return filePath;
        }
    }
}

module.exports = CreateVueComponent;