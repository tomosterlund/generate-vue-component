# vuejs-generate
A CLI for generating component- and module templates in Vue.js.

## Install
```
npm i -g vuejs-generate
```

## Generating a Vue compoment
```
$ vg component <name>
```

If an **src/components** directory exists, the component will be created there.  
If not, it will be created in the directory where the command is executed.

#### Component flags
| Flag name      | Description |
| ----------- | ----------- |
| -d   | Adds a data property to the component        |
| -m   | Adds a methods property to the component        |
| -s   | Sets style-lang attribute to SCSS        |
| --help   | Displays all options to the console        |

#### Example
```
$ vg component Button -d -m
```
Generates a file called Button.vue which contains a vue component with data- and methods properties.

## Generating a Vuex module
```
$ vg vuexmod <modulename>
```

If an **src/store** directory exists, the module will be created there.  
If not, it will be created in the directory where the command is executed.

#### Example
```
$ vg vuexmod SessionModule  
SessionModule was created in Vuex-store
```