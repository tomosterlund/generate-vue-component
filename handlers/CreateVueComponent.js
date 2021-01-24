const fs = require('fs');
const componentTemplate = require('../templates/ComponentTemplate');

const CreateVueComponent = async (fileName, options) => {
    if (options.help) {
        return console.log(`The following flags are available:
            -d                adds a data property to the component
            -m                adds a methods property
            -s                sets the style-lang attribute to SCSS
        `);
    }

    let data;
    let filePath = `${fileName}.vue`;
    const filePathInComponentsDir = await returnFilePathInComponentsDir(fileName);
    if (filePathInComponentsDir) {
        filePath = filePathInComponentsDir;
    }

    data = new Uint8Array(Buffer.from(componentTemplate(options.data, options.methods, options.scss)));
    
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(`${fileName} component was created`);
    });
}

/**
 * If there is an src/components or /components dir,
 * this function returns that filepath
 * @param {string} fileName
 */
const returnFilePathInComponentsDir = async (fileName) => {
    let filePath;
    // If an './src/components' directory exists, set filePath to that directory
    const filePathInSrcComponentsDir = await checkIfComponentsDirExists('./src', './src/components/', fileName);
    if (filePathInSrcComponentsDir) {
        filePath = filePathInSrcComponentsDir;
    }

    // If a './components' directory exists, set filePath to that directory
    const filePathInComponentsDir = await checkIfComponentsDirExists('./', './components/', fileName);
    if (filePathInComponentsDir) {
        filePath = filePathInComponentsDir;
    }

    return filePath;
}

/**
 * If a components directory exists, the filepath is set to this directory
 * @param {string} path the path to check in, if a directory exists
 * @param {string} newFilePath the path to be inserted when creating a file
 * @param {string} modulename 
 */

const checkIfComponentsDirExists = async (path, newFilePath, modulename) => {
    const srcCompExists = fs.existsSync(path);
    if (srcCompExists) {
        const dir = await fs.promises.opendir(path);
        for await (const dirent of dir) {
            if (dirent.name === 'components') {
                return `${newFilePath}${modulename}.vue`;
            }
        }
    }
}

module.exports = CreateVueComponent;