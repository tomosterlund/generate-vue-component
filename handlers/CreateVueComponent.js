const fs = require('fs');
const componentTemplate = require('../templates/ComponentTemplate');

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

    data = new Uint8Array(Buffer.from(componentTemplate(options.data, options.methods, options.scss)));
    
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
    const srcExists = fs.existsSync(path);
    if (srcExists) {
        const dir = await fs.promises.opendir(path);
        for await (const dirent of dir) {
            if (dirent.name === 'components') {
                let filePath = `./src/components/${modulename}.vue`;
                return filePath;
            }
        }
    }
}

module.exports = CreateVueComponent;