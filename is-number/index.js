/* 
  一般可以通过+ - Number()可以将字符串转换为数字再通过typeof判断，但是这种方式对于
  console.log(+[]); //=> 0
  console.log(+''); //=> 0
  console.log(+'   '); //=> 0
  console.log(typeof NaN); //=> 'number'
*/
module.exports = function (num) {
  if (typeof(num)==='number') {
    // 数字 NaN Infinity 
    return num-num === 0
  }
  if (typeof(num)==='string' &&  num.trim()!=='') {
    // 处理 [] '   '
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num)
  }
  return false
}