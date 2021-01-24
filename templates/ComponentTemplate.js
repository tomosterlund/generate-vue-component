// Vue component template

const dataPropertyTemplate = `data() {
        return {

        }
    },`;

const methodPropertyTemplate = `methods: {

    }`;

/**
 * Sets the template for a vue component
 * @param {boolean} dataProp 
 * @param {boolean} methodsProp 
 * @param {boolean} SCSS 
 */
const ComponentTemplateWith = (dataProp, methodsProp, SCSS) => {
    const template = `<template>

</template>

<script>
export default {
    ${dataProp ? dataPropertyTemplate : ''}
    ${methodsProp ? methodPropertyTemplate : ''}
}
</script>

<style ${SCSS ? 'lang="scss" ' : ''}scoped>

</style>`;

    return template;
}

module.exports = ComponentTemplateWith;