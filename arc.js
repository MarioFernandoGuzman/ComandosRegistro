
function suma(...nums) {
  
  if (nums.length === 1 && Array.isArray(nums[0])) nums = nums[0];
  return nums.reduce((a, b) => a + Number(b || 0), 0);
}

if (require.main === module) {
  
  const args = process.argv.slice(2);
  const result = suma(args);
  console.log(result);
}

module.exports = { suma };
