/**
 * 实现：curry(2)(3)(4) = 24
 * 函数柯里化原理：将含有多个参数的函数转换成一系列使用一个参数的函数
 */

//  第四版，不用知道求值参数个数,返回貌似有点小问题
function curry (args) {
  let arr = [];
  function inlay(num) {
    arr.push(num);
    const res = arr.reduce((init, item) => {
      return init * item;
    }, 1);
    inlay.res = () => console.log(res);
    return inlay;
  }
  return inlay(args);
}

curry(2)(3).res();
curry(2)(3)(4).res();
curry(2)(3)(4)(5).res();