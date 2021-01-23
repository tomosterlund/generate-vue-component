# vuecomp
## Compiling application to an executable
$ npm i -g pkg  
$ pkg vuecomp.js

## Using the app
1. change the name of the executable rendered by pkg, into somehting of your choice  
for example "vuecomp"
2. move executable into a directory of your choice from which you globally can execute files
3. Ready to use!

## Flags to use
| Flag name      | Description |
| ----------- | ----------- |
| -n <title of file>      | Sets the name of a vue component       |
| -d   | Adds a data property to the component        |
| -m   | Adds a methods property to the component        |
| --help   | Displays all options to the console        |

## Example
$ vuecomp -n Button -d -m
Generates a file with the Button.vue  
which contains a vue component with data- and methods properties.