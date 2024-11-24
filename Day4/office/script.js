// let count = 60;

// function timer(){
//     document.getElementById("count").innerHTML = count;
//     count--;
//     if(count < 0){
//         clearInterval(countdown);
//     }
// }

// let countdown = setInterval(timer, 1000);


// 'use strict'

var name = 'Zonayed Ahmed';
var age = 10;

var address = 'Cumilla';

// console.log('My name is ' + name + ' and I am ' + age + ' years old!');

function aFunc() {
   job = 'Student';
//    console.log('A Function with Strict Mode Enabled');
}

aFunc();

// console.log('I am a ' + job + ' And I am from ' + address);

const personName = () =>{
    console.log('This is a Es6 Function');
}

console.log(personName());

function namePerson(){
    console.log('This is a normal Function',()=>{
        if(true){
            console.log('This is an IIFE');
        }
    });

}

console.log(namePerson());