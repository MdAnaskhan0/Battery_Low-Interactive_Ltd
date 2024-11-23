// জাভাস্ক্রিপ্ট ইএস ৬(ES6): ইএস ৬ বা ইকমাস্ক্রিপ্ট ৬

// নতুন আরো দুইটা কীওয়ার্ড আসছে, let আর const

var a = "Zonayed Ahmed";
// console.log('My name is: ' + a);
a = "Zawad Ahmed";
// console.log('Now the name is: ' + a);

let a6 = "Md Anas Khan";
// console.log("My name is: " + a6);
a6 = "Md Emon Hossain";
// console.log("Now the name is: " + a6);

// আমরা বলতে পারি যে let, var দুটি ভেরিয়েবলের কাজ প্রায় একই।

const myName = "Md Anas Khan";
// console.log("My name is: " + myName);
// myName = "Md Emon Hossain";
// console.log("Now the name is: " + myName);

/* 
****************Error *******************************
My name is: Md Anas Khan
/home/mdanaskhan/Battery_Low-Interactive_Ltd/Day3/JunayedDocument/JsES6.js:21
myName = "Md Emon Hossain";
       ^

TypeError: Assignment to constant variable.
***************************************************** 
*/

// তারমানে const একটু অন্যরকম। এটা আসলে যে নামে নামকরন করা হয়েছে এটার বিহ্যেভও অনেকটা ঐরকমই। const মানে কন্সট্যান্ট, যার ভ্যালু চেঞ্জ করা যায় না। তাই আপনি কোনোকিছু একবার const দিয়ে ডিক্লেয়ার করলে সেটার পরে আর পরিবর্তন করতে পারবেন না। করতে চাইলে এরর আসবে।

/* পার্থক্যে */

// var কীওয়ার্ড ফাংশন স্কোপ মেইন্টেইন করে
// let ও const ব্লক(Block) স্কোপ মেইন্টেইন করে

function myFunction() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

// console.log(myFunction());

/*
*************** Error ***************
mdanaskhan@pop-os:~/Battery_Low-Interactive_Ltd/Day3/JunayedDocument$ node JsES6.js 
10

ReferenceError: b is not defined
*/

// জাভাস্ক্রিপ্ট ইএস ৬(ES6):ইফি (Immediately Invoked Function Expressions)

(function aDemoFunc() {
  var msg = "Hello World";
  console.log(msg);
})();

// ইরে যদি এই ফাংশনটাকে আবার কল করতে চাই তাহলে
//  console.log(aDemoFunc);
//  ReferenceError: aDemoFunc is not defined

/*
ইফি ইউজ করে এরকমভাবেই প্রাইভেট ফাংশন এবং সেই সাথে প্রাইভেট ভ্যারিয়েবল ক্রিয়েট করা যায়।

কিন্তু ইএস ৬ এ let বা const ব্লক লেভেলের স্কোপিং হওয়াতে ব্যাপারটা আরো অনেক সোজা হয়ে গিয়েছে। আমরা কোনো প্রাইভেট ফাংশন বা ভ্যারিয়েবল ক্রিয়েট করতে চাইলে জাস্ট সেটাকে let বা const দিয়ে ডিক্লেয়ার করে সেটাকে এই ব্র্যাকেটস{} এর ভিতরে রেখে দিলেই এরা প্রাইভেট হয়ে যাবে। এদেরকে বাইরে থেকে অ্যাক্সেস করা যাবে নাঃ
*/

{
  let a = 10;
  let b = 20;
  const pi = 20;

  console.log(a + b + pi);
}

//কিন্তু এখন যদি আমরা এই ভ্যারিয়েবলগুলোকে এই {} ব্র্যাকেটসগুলোর বাইরে থেকে অ্যাক্সেস করতে চাই তাহলে এরর আসবেঃ

// console.log(a + b + pi);
// ReferenceError: b is not defined

{
  var myNewName = function () {
    var a = "Zonayed Ahmed";
    console.log(a);
  };
}

console.log(myNewName());

{
  const myConstName6 = function () {
    const a = "Zonayed Ahmed";
    console.log(a);
  };
}
// myConstName6();

// ReferenceError: myConstName6 is not defined


// জাভাস্ক্রিপ্ট ইএস ৬(ES6): টেমপ্লেট লিটারেল(Template Literal) ও স্ট্রিং মেথড

var name = 'Zonayed Ahmed',
    age = 21,
    work= 'Student';
    
// console.log('My name is ' + name + ' and I\'m ' + age + 'years old! Currently I\'m a ' + work);


function calculateAge(dob) {
    return `I'm ${2018 - dob} years old!`;
 }
 
// console.log( calculateAge(1996));



// নতুন স্ট্রিং মেথডঃ

/*
 -> একটা স্ট্রিং কোনো স্পেসেফিক ক্যারেক্টার/স্ট্রিং দিয়ে শুরু হয়েছে কিনা সেটার জন্যে startsWith মেথড
 -> একটা স্ট্রিং কোনো স্পেসেফিক ক্যারেক্টার/স্ট্রিং দিয়ে শেষ হয়েছে কিনা সেটার জন্যে endsWith মেথড
 -> একটা স্ট্রিং কোনো স্পেসেফিক ক্যারেক্টার/স্ট্রিং আছে কিনা সেটার জন্যে includes মেথড
 -> একটা স্ট্রিং স্পেসেফিক অ্যামাউন্টে রিপিট করানোর জন্যে repeat মেথড
*/

// startsWith মেথডঃ

 const sWith = "My name is Anas Khan";
 
 console.log(sWith.startsWith('My')); //true
 console.log(sWith.endsWith('Anas')); //false
 console.log(sWith.includes('is')); //true
 
 //  এটা সবসময় Boolean ভ্যালু true অথবা false রিটার্ন করে.


 // repeat মেথডঃ
 console.log(sWith.repeat(3));

//  একটা স্ট্রিংকে কয়েকবার রিপিট করতে চাইলে এই মেথড ইউজ করা হয়.
