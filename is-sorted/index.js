/* 
  接受两个参数，一个目标数组和一个比较器函数，该函数确定是比较顺序还是返序
*/
// 定义比较器函数
function defaultComparator(a,b) {
  return a - b  
}
module.exports = function checkSorted(arr,comparator=defaultComparator) {
  // 先判断传入进来的是否是数组
  if(!Array.isArray(arr)) throw new TypeError(`except Array got ${typeof(arr)}`)
  //循环数组，如果前比后一项的数值大，则返回false(默认判断升序)
  for (let index = 1; index < arr.length; index++) {
    if(comparator(arr[index-1],arr[index]) > 0) return false
  }
  return true
}