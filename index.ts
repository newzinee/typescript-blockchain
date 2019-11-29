const name = "yoojin", 
    age = 26,
    gender = "female";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age);   // 매개변수에 ?가 없다면 에러남
sayHi(name, age, gender);
export {};