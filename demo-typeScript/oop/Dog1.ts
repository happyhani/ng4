class Dog {
    //属性:名字，性别，年龄,品种
    name:string;
    sex:string;
    age:number;
    strain:string;

    //方法:吃，完
    chi(str:string){
        console.log(`${this.name}正在吃**${str}*,真吃吃`);
        
    }

    //构造方法方便数据初始化
    constructor(name:string,sex:string,age:number,strain:string) {
        this.name = name;
        this.age= age;
        this.sex= sex;
        this.strain = strain;
    }
}

let jingJing = new Dog('晶晶','男',2,'京巴');
jingJing.chi('大骨头');