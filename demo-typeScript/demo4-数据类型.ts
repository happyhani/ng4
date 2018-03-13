/**
 * 1 布尔
 */
let isOK: boolean = false;

/**
 * 2 数据类型
 */
let num1: number = 20;
/**
 * 3 字符串类型
 * typeScript支持使用单引号（'）或双引号（"）来表示字符串类型。
 * 还支持使用模板字符串反引号（`）来定义多行文本和内嵌表达式。
 * 使用${ expr }的形式嵌入变量或表达式，在处理拼接字符串的时候很有用，示例如下：
 */
let subject: string = "Angular";
let years: number = 5;
let words: string = `您好，今年是 ${subject} 发布 ${years + 1} 周年`;
console.log('字符串类型:'+words);

/**
 * 4 两种数组定义方式
 * 使用数组泛型
 */
let arr1: number[] = [1,3,5,7,9];
let arr2: Array<number> = [1,3,5,56];
/**
 * 5 元组类型
 * 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同。
 */
let x: [string, number];
x = ['Angular', 25];    // 运行正常
//x = [25, 'Angular'];    // 报错
console.log(x[0]);    // 输出 Angular

/**
 * 6 枚举类型
 * 枚举是一个可被命名的整型常数的集合，枚举默认下标是0，可以手动修改默认下标值
 */
enum Color{Red,Green,Blue}; 
enum Color2 { Red = 1, Green = 2, Blue = 4 };
let c1 :Color = Color.Blue;
let c2: Color2 = Color2.Blue;
/**
 * 7 不确定什么类型时可以使用"任意类型
 * 任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于一下三种情
 * 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值-但是却不能够在它上面调用任意的方法，即便它真的有这些方法
 * 
 * 它通常用于以下三种情况
 */
//情况(1)变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查，示例代码如下：
let y1:any =1;//字符串类型
y1='I am who I am';//字符串类型
y1= false;//布尔
//情况(2)定义存储各种类型数据的数组时，示例代码如下：
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
//情况(3)改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例代码如下：
let notSure: any = 4;
//notSure.fn1();//语法不报错。编译时不检测
let notSure2: Object = 4;
//notSure2.fn2();//Error: Property 'f2' doesn't exist on type 'Object'



console.log(arr1.length);
console.log(c2);

/**
 * 8 空值，void类型像是与any类型相反，表示没有任何类型！
 * 无返回值的函数通常可以定义返回类型为 void,可省略！
 */
function warnUser(): void {
    alert("This is my warning message");
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

/**
 * null 和underfined 和es5语法 一样
 */