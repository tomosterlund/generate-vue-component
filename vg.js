#!/usr/bin/env node
const { program } = require('commander');
program.version('0.0.1');
const CreateVueComponent = require('./handlers/CreateVueComponent');
const { CreateVuexModule } = require('./handlers/CreateVuexModule');
const CreateVuexStore = require('./handlers/CreateVuexStore');
const displayHelp = require('./handlers/DisplayHelp');

/**
 * Handling the vg component command
 */
program
    .command('component <filename>')
    .description('Create a Vue component')
    .option('-d, --data', 'Component should include data object')
    .option('-m, --methods', 'Component should include methods')
    .option('-s, --scss', 'Component should use SCSS')
    .option('-x, --axios', 'Component should contain an axios import')
    .option('-a, --all', 'All of the above options are added')
    .action((filename, options) => {
        if (options.help) {
            return displayHelp();
        }
        CreateVueComponent(filename, options);
    });

/**
 * Handling the vg vuexmod command
 */
program
    .command('vuexmod <modulename>')
    .description('Creates a Vuex module')
    .action(modulename => {
        CreateVuexModule(modulename);
    });

/**
 * Handling the vg store command
 */
program
    .command('store')
    .description('Sets up a Vuex store, using the Vuex modules structure')
    .option('-m, --module <name>', 'Lets the user enter name of a first module')
    .action((options) => {
        let modulename = options.module;
        CreateVuexStore(modulename);
    })

/**
 * Handling the vg help command
 */
program
    .command('help')
    .description('Displays all available commands and their flags')
    .action(() => {
        displayHelp();
    });

program.parse(process.argv);