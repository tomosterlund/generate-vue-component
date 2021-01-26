const yieldUnitTestTemplate = (componentName) => {
    const template = `import ${componentName} from '@/.vue'
import { shallowMount } from '@vue/test-utils'

describe('${componentName}', () => {
    const wrapper = shallowMount(${componentName});

    it('', () => {
        expect();
    });
});
`;

    return template;
}

module.exports = yieldUnitTestTemplate;