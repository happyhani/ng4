import { Computer } from "./Computer";
let lenovo = new Computer('联想G470', 4000);
//lenovo.name;//已经无法访问到了
lenovo.showInfo();
console.log('获得商品名字:' + lenovo.getName());

