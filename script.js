"use strict";

// Var გამოიყენებოდა ES6-მდე.
// Var არის Function scope

// function getVar() {
//   if (1 > 0) {
//     const data = 6;
//   }

//   console.log(data);
// }

// getVar();

// var data = 6;

// Var-ზე მუშაობს hoisting

// var data = 6;

// let data = 10;

// const data = 6;

// function getCons() {
//   data = 10;
// }

// getCons();

// console.log(data);
// Var შეგვიძლია რამდენიმეჯეერ გამოვიყენოთ ერთ scope-

// var light = 2

// var light = 10

// For loop

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// 2015 წელს ES6 შემოიტანა let და const.
// Let, Const არის Block scope
// Let, Const are hoisted მაგრამ არა ინიციალიზებული
// Let შეგვიძლია მხოლოდ ერთხელ გამოვიყენოთ იგივე scope-ში

// let და var შეცვლა შესაძლოა const არა
