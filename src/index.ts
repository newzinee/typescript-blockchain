interface Human {
    name: string,
    age: number,
    gender: string
}   // only typescript

const person = {
    name: 'yoojin',
    age: 26,
    gender: 'female'
};

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayHi(person));

export {};