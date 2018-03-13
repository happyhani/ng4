var a =3;
let a = 3;
const a = 'aaa'; //和let类似，不能被重新赋值


/**
 * 错误场景1:内层变量覆盖外层变量！
 * 因为：ES5只有全局作用域和函数作用域，无块级作用域！
 * 打印两次李四
 */
var name = '张三'
while (true) {
    var name = '李四'
    console.log(name)  //李四
    break
}

console.log(name);  //李四
/**
 * let 为js新增块级作用域
 */
console.log("********演示块级作用域let*****");
let name2= '张三'
while (true) {
    let name2 = '李四'
    console.log(name2)  //obama
    break
}
console.log(name2);  //obama