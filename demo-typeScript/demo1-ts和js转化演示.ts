/**
 * 变量定义
 * typescript文件后缀：*.ts
 * 编译指令：tsc *.ts 自动翻译为js
 * node也可以直接运行ts，因为ts是js的超集
 */
var name1 = '张三';
let name2 = '李四';

/**
 * 案例：商品类
 */
class Computer{
    name:string;
    price:number;
    constructor(name:string,price:number) {
        this.name=name;
        this.price = price;
    }
    //商品展示
    show(){
        return "商品名:"+this.name+"--商品价格:"+this.price+"元";
    }
}
let  xiaoY = new Computer("联想小Y",4999);
let btn1 = document.createElement("button");
btn1.textContent='点我显示电脑信息';
btn1.onclick=function(){
    console.log("各种DOM操作。。。");
    console.log("名字:"+xiaoY.name+"价格:"+xiaoY.price);
}
document.body.appendChild(btn1);