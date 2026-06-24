const list = [1, 2, 3, 4, 5];
const result = list.slice().reverse().map((value) => value ** 2);

console.log("Початковий масив:", list);
console.log("Після обробки:", result);
