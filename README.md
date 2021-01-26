# vuejs-generate
A CLI for generating component- and module templates in Vue.js.

## List of content
1. [Install](#install)
2. [Usage](#usage)
    * [Generating Vue components](#generating-a-vue-compoment)
    * [Generating a Vuex store](#generating-a-vuex-store)
    * [Generating Vuex modules](#generating-vuex-modules)
    * [Generating unit tests](#generating-unit-tests)

## Install
```
npm i -g vuejs-generate
```

## Usage
Display all commands in terminal with:
```
$ vg help
```

## Generating a Vue compoment
```
$ vg component <name>
```

If an **./src/components** or **./components** directory exists, the component will be created there.  
If not, it will be created in the directory where the command is executed.

#### Component flags
| Flag name      | Description |
| ----------- | ----------- |
| -d   | Adds a data property      |
| -m   | Adds a methods property       |
| -x   | Adds an Axios import        |
| -s   | Sets style-lang attribute to SCSS        |
| -a   | Adds all of the options above        |
| -t   | Sets up a unit test for the component, in <name>.spec.js        |

#### Example
```
$ vg component Button -d -m
```
Generates a file called Button.vue which contains a vue component with data- and methods properties.

## Generating a Vuex store
```
$ vg store
```
If an **./src/store** or **./store** already exists the vg CLI will prompt you to override this folder. The store is created with a default module, _myModule_. To overwrite this default name, use the -m flag and type in the module name you want:

#### Example
```
$ vg store -m SessionModule
Vuex store was created - Don't forget to import it on your Vue instance
SessionModule was created in Vuex-store
```

## Generating Vuex modules
```
$ vg vuexmod <modulename>
```

If an **./src/store** or **./store** directory exists, the module will be created there.  
If not, it will be created in the directory where the command is executed.

#### Example
```
$ vg vuexmod SessionModule  
SessionModule was created in Vuex-store
```

## Generating unit tests
```
$ vg test <name>
```
Creates a yourTestName.spec.js file, with some scaffolding for a Vue test utils/jest unit test suite. If a **./tests/unit** or **./tests** folder exist, the test will be created there. Else it will be created in current directory.