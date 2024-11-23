// Javascript Advance Topic 
// ***** this keyword *****
// Rules: 1. Global Rules: গ্লোবাল রুলসঃ যদি আপনি this কীওয়ার্ড যেকোনো জায়গায় ইউজ করেন, আপনার কাস্টমভাবে ডিফাইন করা কোনো অবজেক্ট এর ভিতরে ছাড়া, তাহলে সেটা সবসময় আপনার গ্লোবাল অবজেক্টকে ইন্ডিকেট করবে। ব্রাউজারের ক্ষেত্রে গ্লোবাল অবজেক্ট হচ্ছে window অবজেক্ট। অন্য এনভারোমেন্ট এ যেমন নোড জেএস এ গ্লোবাল অবজেক্ট হচ্ছে global.

console.log(this);


// Rules: 2. Object Rule: অবজেক্ট রুলসঃ এখন কাস্টমভাবে কোনো অবজেক্ট ডিফাইন করে সেটার ভিতর this কীওয়ার্ড ইউজ করলে সেটার ভ্যালু আর গ্লোবাল অবজেক্টকে ইন্ডিকেট করবে না। এখানে এটার ভ্যালু চেঞ্জ হয়ে যাবে।

var myCustomeObject = {
    name: "Md Anas Khan",
    age: 24,
    job: "Student",
    msg: function(){
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
        console.log("My job is " + this.job);
    },

    isTrue: function (){
        console.log(this === myCustomeObject);
    },
    anotherObject: {
        name: "Md Emon Hossain",
        msg: function(){
            console.log("My name is " + this.name);
        }
    }
}

// console.log(myCustomeObject);
// console.log(myCustomeObject.msg());
// console.log(myCustomeObject.isTrue());
// console.log(myCustomeObject.anotherObject.msg());


// Rule 3: Spot Rules: স্পষ্ট রুলসঃ আপনারা হয়তো call, bind, apply মেথডের কথা শুনেছেন। এগুলোই আসলে স্পষ্টভাবে this কীওয়ার্ডের ভ্যালু সেট করতে ইউজ করা হয়। কোথাও যদি দেখেন এগুলো ইউজ হয়েছে তাহলে খুব সহজেই সেখানে this কীওয়ার্ড কাকে ইন্ডিকেট করছে সেটা ধরে ফেলতে পারবেন। কারণ এই call, bind, apply মেথডগুলো ইউজ করে প্রথম প্যারামিটারেই this কীওয়ার্ড কাকে ইন্ডিকেট করবে সেটা সেট করা যায়। এগুলো প্রত্যেকটা নিয়ে আলাদা আলাদা পর্ব লেখা হবে তাই এখানে বিস্তারিত আলোচনা করা হবে না। তবে আগের উদাহরণটায় আমরা একটা ইউজ করে দেখবো। আমাদের অবজেক্ট টা এরকম ছিলো দেখতেঃ

var myCustomeObject2 = {
    name: "Md Anas Khan",
    age: 24,
    job: "Student",
    anotherObject: {
        name: "Md Rimon Hossain",
        value: function(){
            console.log(this);
        }
    }
}

// console.log(myCustomeObject2.anotherObject.value());


var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',
       value: function() {
          console.log(this);
       }
    }
 }

 console.log(myCustomObj.anotherObj.value.call(myCustomObj));