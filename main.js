let username = prompt("Enter here your name");
let lastName = prompt("Enter here your lastname");
let age = prompt("Enter here your age");
localStorage.setItem("username", username);
localStorage.setItem("lastName", lastName);
localStorage.setItem("age", age);
let user = JSON.parse(localStorage.getItem("user"));
console.log(user.username, user.lastName, user.age);