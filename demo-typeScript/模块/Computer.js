"use strict";
exports.__esModule = true;
/**
 * 类：用于一类物体/对象的信息
 * 类组成：属性+方法+构造方法
 */
var Computer = /** @class */ (function () {
    //构造方法
    function Computer(name, price, type, desc) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.desc = desc;
    }
    //方法
    Computer.prototype.showInfo = function () {
        console.log('商品信息展示:名字' + this.name + '-单价:' + this.price + '类型:' + this.type + '描述:' + this.desc);
    };
    return Computer;
}());
exports.Computer = Computer;
