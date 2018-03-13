class Dog2 extends Pet{
    //属性:名字，性别，年龄,品种
    strain:string;

    constructor(name:string,sex:string,age:number,strain:string){
        super(name,sex,age);
        this.strain= strain;
    }   
}

let lele = new Dog2('乐乐', '男', 2, '京巴');