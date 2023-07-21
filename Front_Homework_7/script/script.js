const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 20 },
    { id: 4, name: 'Sarah', age: 35 },
    { id: 5, name: 'Michael', age: 28 }
];

// TASK_1 
// Найти все имена пользователей в массиве users и сохранить их в новый массив.

const findName = users.map(user => user.name);
console.log(findName);

// TASK_2
// Проверить, есть ли в массиве users пользователь с возрастом меньше 18 лет.Сформируйте массив из таких пользователей.

const youngUsers = users.filter(({ age }) => age < 18);
console.log(youngUsers);

// TASK_3 
// Найти пользователя с наибольшим возрастом в массиве users.

const greatestAge = users.reduce((acc, user) => (user.age > acc.age ? user : acc));
console.log(greatestAge);

// TASK_4 
// Создать новый массив, содержащий только идентификаторы(свойство id) пользователей из массива users.

const userId = users.map(user => user.id);
console.log(userId);

// TASK_5
// Посчитать общую сумму возрастов всех пользователей в массиве users.

const ageSum = users.reduce((acc, user) => acc + user.age, 0);
console.log(ageSum);

// TASK_6
// Изменить возраст пользователя с идентификатором 3 на 22.

const result = users.find(user => user.id === 3);
if (result) result.age = 22;
console.log(users);

// TASK_7
// Создать новый массив, содержащий имена пользователей, у которых возраст меньше 30.

const less30 = users
    .filter(user => user.age < 30)
    .map(user => user.name);
console.log(less30);

// TASK_8
// Найти средний возраст пользователей в массиве users.

let avg = users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(avg);