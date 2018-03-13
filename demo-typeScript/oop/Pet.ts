class Pet{
    name: string;
    sex: string;
    age: number;
    
    //方法:吃，完
    chi(str: string) {
        console.log(`${this.name}正在吃**${str}*,真吃吃`);

    }

    //构造方法方便数据初始化
    constructor(name: string, sex: string, age: number) {
        this.name=name;
        this.sex=sex;
        this.age=age;
    }
}