function suma(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) nums = nums[0];
  return nums.reduce((a, b) => a + Number(b || 0), 0);
}

function resta(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) nums = nums[0];
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => Number(a || 0) - Number(b || 0));
}

function multiplicacion(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) nums = nums[0];
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a * Number(b || 0), 1);
}

function division(a, b) {
  const numA = Number(a || 0);
  const numB = Number(b || 0);
  if (numB === 0) throw new Error("Division por cero");
  return numA / numB;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const result = suma(args);
  console.log(result);
}

module.exports = { suma, resta, multiplicacion, division };
