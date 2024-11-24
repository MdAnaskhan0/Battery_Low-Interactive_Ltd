
for(let i=1; i<=5; i++){
    let star = '';
    for(let j=1; j<=i; j++){
        star += '*';
    }
    console.log(star);
}

console.log('------------');

let n=5;

for(let i=1; i<=n; i++){
    let star = '';
    for(let j=1; j<= n-i; j++){
        star += ' ';
    }

    for(let k=1; k<= 2*i-1; k++){
        star += '*';
    }
    console.log(star);
}


