var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (val, key) {
    var newVal = val * 2;
    console.log("Key:",key);
    if(val % 2 == 0){
        console.log(newVal)
    }else{
        console.log(val)
    }
})


const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
//   console.log(value);
}


