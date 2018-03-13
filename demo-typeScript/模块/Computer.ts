/**
 * 类：用于一类物体/对象的信息
 * 类组成：属性+方法+构造方法
 */
export class Computer{
    //属性(商品名，价格，类型，商品简介)
    name:string;
    price:number;
    type:string;
    desc:string;
    //方法
    showInfo(){
        console.log('商品信息展示:名字'+this.name+'-单价:'+this.price+'类型:'+this.type+'描述:'+this.desc);
        
    }


    //构造方法
    constructor(name:string,price:number,type:string,desc:string){
        this.name = name;
        this.price= price;
        this.type = type;
        this.desc= desc;
    }
}
