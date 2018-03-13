"use strict";
exports.__esModule = true;
var Computer_1 = require("./Computer");
var lenovo = new Computer_1.Computer('联想G470', 4000, '电器', '综合性能高!');
lenovo.showInfo();
lenovo.name = '俩想AAA';
console.log(lenovo.name);
