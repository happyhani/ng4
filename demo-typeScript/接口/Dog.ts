class Dog implements Pet {
    name:string;
    chi(str: string): void {
        console.log(`${this.name}正在吃${str},真好吃!`);
        
    }
    yunSuan(num1: number, num2: number): number {
        
        return num1+num2;
    }
    constructor(name:string){
        this.name = name;
    }

}

let jingJing = new Dog('晶晶');
jingJing.chi('骨头');
jingJing.yunSuan(3,4);