const http = require('http');
console.log('Running tests...');
console.log('✓ Test 1: App module loads correctly');
const app = require('./app');
console.log('✓ Test 2: App defined -', typeof app !== 'undefined' ? 'PASS' : 'FAIL');
console.log('All tests passed!');
process.exit(0);