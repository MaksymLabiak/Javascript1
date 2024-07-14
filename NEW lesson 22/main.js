// Constructor/Factory - це два поширені патерни для створення об'єктів.

// Фабричні функції

// function createUsers(name, age, sex) {
//     return {
//         name,
//         age,
//         sex
//     }
// }

// const user1 = createUsers("Maksym", 13, "male");
// const user2 = createUsers("Denys", 23, "male");
// const user3 = createUsers("Maksym", 33, "female");

// console.log(user1)
// console.log(user2)
// console.log(user3)

// Функції конструктора ми завжди починаємо з великої букви

// function CreateUsers(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }

// const user1 = new CreateUsers("Maksym", 13, "male")
// const user2 = new CreateUsers("Denys", 23, "male")
// const user3 = new CreateUsers("Maksym", 33, "female")

// console.log(user1)
// console.log(user2)
// console.log(user3)


/*
    Написати примітивну лотерею. Вивести на екран квадратики з числовими індексами, 
    де користувач повинен вгадати виграшний варіант. В нього три спроби. Якщо вгадує, вибиває
    alert-повідомлення про успішний вибір. Якщо ж ні, Alert пропонує продовжити спроби. Всього їх є три.
*/

function LotteryCard(index, isWinning) {
    this.index = index;
    this.isWinning = isWinning;
}

LotteryCard.prototype.handleTry = function (attempts, square, squaresContainer) {
    if (this.isWinning) {
        alert("You won!");
        square.classList.add("square-correct");
    } else {
        if (attempts === 3) {
            alert("Sorry, it was your last turn");
            squaresContainer.innerHTML = null;
            return;
        }
        alert("Try again");
        square.classList.add("square-wrong");
    }
};

const cards = [
    new LotteryCard(7, true),
    new LotteryCard(1, false),
    new LotteryCard(3, false),
    new LotteryCard(4, false),
    new LotteryCard(8, false),
    new LotteryCard(2, false),
    new LotteryCard(5, false),
    new LotteryCard(6, false),
    new LotteryCard(9, false),
];

function renderSquares() {
    let attempt = 0;
    const squaresContainer = document.querySelector(".squares-container");
    cards.forEach(item => {
        const square = document.createElement("div");
        const squareIndex = document.createElement('h4');
        square.classList.add("square");
        squareIndex.innerHTML = item.index;
        square.appendChild(squareIndex);
        square.addEventListener("click", () => {
            item.handleTry(++attempt, square, squaresContainer);
        });
        squaresContainer.appendChild(square);
    });
}

renderSquares(cards);



// Прототипи функції - це обʼєкти.
// Прототипи в JavaScript є фундаментальним механізмом, який дозволяє об'єктам наслідувати властивості та методи інших об'єктів. Кожен об'єкт в JavaScript має внутрішнє посилання на інший об'єкт, який називається його прототипом. Цей прототип може мати свій власний прототип, і так далі, формуючи ланцюжок прототипів.

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.hello = 'Hello!';

const user1 = new User("Maksym", 13);
const user2 = new User("Denys", 23);
const user3 = new User("Maksym", 33);

console.log(user1.hello);


// console.log(user1.__proto__ === User.prototype);
// console.log(user2.__proto__ === User.prototype);
// console.log(user3.__proto__ === User.prototype);

// LotteryCard.prototype.testValue = 'some test value';

// const card1 = new LotteryCard(7, true);
// const card2 = new LotteryCard(3, true);
// const card3 = new LotteryCard(2, true);

// console.log(card1.__proto__.testValue);
// console.log(card2.__proto__.testValue);
// console.log(card3.__proto__.testValue);
