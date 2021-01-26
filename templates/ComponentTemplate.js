// Vue component template

const dataPropertyTemplate = `data() {
        return {

        }
    },\n`;

const methodPropertyTemplate = `methods: {

    }`;

const axiosTemplate = `\nimport axios from 'axios'\n`;

/**
 * Sets the template for a vue component
 * @param {boolean} dataProp 
 * @param {boolean} methodsProp 
 * @param {boolean} SCSS 
 * @param {boolean} axios
 */
const ComponentTemplateWith = (dataProp, methodsProp, SCSS, axios) => {
    const template = `<template>

</template>

<script>${axios ? axiosTemplate : ''}
export default {
    ${dataProp ? dataPropertyTemplate : ''}    ${methodsProp ? methodPropertyTemplate : ''}
}
</script>

<style ${SCSS ? 'lang="scss" ' : ''}scoped>

</style>`;

    return template;
}

module.exports = ComponentTemplateWith;