const fs = require('fs');
const yieldUnitTestTemplate = require('../templates/UnitTestTemplate');

const CreateUnitTest = (testName) => {
    const dir = dirPathToCreateTest();
    let template = yieldUnitTestTemplate(testName);
    let data = new Uint8Array(Buffer.from(template));
    writeToTestFile(dir, testName, data);
}

const dirPathToCreateTest = () => {
    const testsUnitDirExists = fs.existsSync('./tests/unit');
    if (testsUnitDirExists) return './tests/unit';
    const testsDirExists = fs.existsSync('./tests');
    if (testsDirExists) return './tests';
    return './';
}

const writeToTestFile = (dir, testName, data) => {
    fs.writeFile(`${dir}/${testName}.spec.js`, data, (err) =>{
        if (err) throw err;
    });
    console.log(`${testName}.spec.js was created`);
    console.log('\x1b[33m%s\x1b[0m', 'Don\'t forget to finish importing the component');
}

module.exports = CreateUnitTest;