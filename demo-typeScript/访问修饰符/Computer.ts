/**
 * 类：用于一类物体/对象的信息
 * 类组成：属性+方法+构造方法
 */
export class Computer{
    //属性(商品名，价格，类型，商品简介)
    //为了保证数据安全，私有化构造方法对外提供get/set方法方法
    private name:string;
    private price:number;


    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }
    getPrice():number{
        return this.price;
    }
    setPrice(price:number):void{
        this.price= price;
    }
    //方法
    showInfo(){
        console.log('商品信息展示:名字'+this.name+'-单价:'+this.price);
    }


    //构造方法
    constructor(name:string,price:number){
        this.name = name;
        this.price= price;
    }
}
