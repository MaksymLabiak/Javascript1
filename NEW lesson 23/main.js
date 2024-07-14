// THIS keyword

// this в JavaScript є ключовим словом, що має особливе значення і використовується для посилання на об'єкт, в контексті якого виконується код. Важливо розуміти, що значення this може змінюватися в залежності від того, де і як викликається функція. Ось кілька основних контекстів використання this:

// якщо ми достукуємся до this в глобальному скоупі, то воно достукується до об'єкту window

// console.log(this);

// якщо ми викликаємо функцію, то воно має доступ до значення this, яке є об'єктом, в якому викликається функція
// function showThis() {
//     console.log(this);
// }
// showThis();

// // 
// const obj1 = {
//     showThis() {
//         console.log(this);
//     }
// }
// obj1.showThis();

// //
// function Person(name) {
//     this.name = name;
//     this.sayHello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
// const person1 = new Person("Maksym");
// console.log(person1);

// //
// const obj = {
//     sayHello() {
//         function inner() {
//             console.log(this);
//         }
//         inner();
//     },
//     sayHelloArrow() {
//         const inner = () => {
//             console.log(this);
//         }
//         inner();
//     },
// };
// obj.sayHello();
// obj.sayHelloArrow();

// const obj1 = { name: 'Maksym', age: 20 };
// const obj2 = {
//     sayHello(a, b, c) {
//         console.log(a, b, c,);
//         console.log(this.name);
//     }
// };
// obj2.sayHello.call(obj1, 1, 2, 3);
// obj2.sayHello.apply(obj1, [1, 2, 3]);

//

const obj1 = { name: 'Maksym', age: 20 };
function sayHello() {
    console.log(this.age);
}
const updatedContextSayHello = sayHello.bind(obj1)
updatedContextSayHello();
