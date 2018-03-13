var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.chi = function (str) {
        console.log(this.name + "\u6B63\u5728\u5403" + str + ",\u771F\u597D\u5403!");
    };
    Dog.prototype.yunSuan = function (num1, num2) {
        return num1 + num2;
    };
    return Dog;
}());
var jingJing = new Dog('晶晶');
jingJing.chi('骨头');
jingJing.yunSuan(3, 4);
