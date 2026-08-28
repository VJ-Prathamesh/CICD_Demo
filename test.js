const assert = require('assert');

console.log('Running test: 2 + 2 = 4 (Intentional failure for demo)');

try {
  // To make the pipeline pass, change the 5 to a 4 below
  assert.strictEqual(2 + 2, 5, "Intentional failure: 2 + 2 does not equal 4!");
  console.log('Test passed!');
} catch (error) {
  console.error('❌ Test Failed:', error.message);
  console.error('The pipeline will now break and stop execution.');
  process.exit(1); // Exit with a non-zero code to fail the pipeline
}
