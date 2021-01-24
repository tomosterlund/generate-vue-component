# vuejs-generate
A CLI for generating component- and module templates in Vue.js.

## List of content
1. [Install](#install)
2. [Usage](#usage)
    * [Generating Vue components](#components)
    * [Generating Vuex modules](#vuexmod)

## Install <a name="install"></a>
```
npm i -g vuejs-generate
```

## Usage <a name="usage"></a>
Display all commands in terminal with:
```
$ vg help
```

### Generating a Vue compoment <a name="components"></a>
```
$ vg component <name>
```

If an **./src/components** or **./components** directory exists, the component will be created there.  
If not, it will be created in the directory where the command is executed.

#### Component flags
| Flag name      | Description |
| ----------- | ----------- |
| -d   | Adds a data property to the component        |
| -m   | Adds a methods property to the component        |
| -s   | Sets style-lang attribute to SCSS        |
| -a   | Adds all of the options above        |

#### Example
```
$ vg component Button -d -m
```
Generates a file called Button.vue which contains a vue component with data- and methods properties.

### Generating a Vuex module <a name="vuexmod"></a>
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