const displayHelp = () => {
    console.log('')
    console.log('\x1b[36m%s\x1b[0m', '  -   Welcome to Vue.js generate  -   ');
    console.log('');
    console.log('Generate a Vue component:');
    console.log('\x1b[33m%s\x1b[0m', '$ vg component <name>');
    console.log('\x1b[32m%s\x1b[0m', `-d        adds a data property to the component`);
    console.log('\x1b[32m%s\x1b[0m', `-m        adds a methods property`);
    console.log('\x1b[32m%s\x1b[0m', `-x        adds an axios import`);
    console.log('\x1b[32m%s\x1b[0m', `-s        sets the style-lang attribute to SCSS`);
    console.log('\x1b[32m%s\x1b[0m', `-a        all of the options mentioned above`);
    console.log('\x1b[32m%s\x1b[0m', `-t        sets up a unit test for the component, in <name>.spec.js`);
    console.log('')
    console.log('Generate a Vuex store:');
    console.log('\x1b[33m%s\x1b[0m', '$ vg store');
    console.log('\x1b[32m%s\x1b[0m', `-m <modulename>       Sets the name of the automatically generated module`);
    console.log('')
    console.log('Generate a Vuex module:');
    console.log('\x1b[33m%s\x1b[0m', '$ vg vuexmod <modulename>');
    console.log('')
    console.log('Generate a unit test for Vue test utils & jest:');
    console.log('\x1b[33m%s\x1b[0m', '$ vg test <name>');
}

module.exports = displayHelp;