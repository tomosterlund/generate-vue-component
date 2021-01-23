const fs = require('fs');
const { program } = require('commander');
program.version('0.0.1');
const withDataTemplate = require('./templates/with-data');
const withDataMethodsTemplate = require('./templates/with-data-methods');
const withMethodsTemplate = require('./templates/with-methods');
const withoutPropertiesTemplate = require('./templates/without-properties');

/**
 * Receiving & parsing the arguments
 */
program
  .option('-n, --name [type]', 'Name of component')
  .option('-d, --data', 'Component should include data object')
  .option('-m, --methods', 'Component should include methods')
  .option('-h, --help', 'Shows all available flags');
program.parse(process.argv);

/**
 * Handling the arguments
 */
const executeCmd = () => {
    const options = program.opts();
    let data;

    if (options.help) {
        return console.log(`The following flags are available:
            -n <name of file> Sets the file name with .vue extesion appended to it
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
    
    fs.writeFile(`${options.name}.vue`, data, err => {
        if (err) throw err;
        console.log(`${options.name} component was created`);
    });
}

executeCmd();
