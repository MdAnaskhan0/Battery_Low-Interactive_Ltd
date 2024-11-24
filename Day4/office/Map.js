let personInfo = [
    {
        name: 'Anas',
        age: 20,
        address: 'Cumilla'
    },
    {
        name: 'Fahim',
        age: 22,
        address: 'Dhaka'
    },
    {
        name: 'Piyas',
        age: 24,
        address: 'Rajshahi'
    },
    {
        name: 'Rayhan',
        age: 28,
        address: 'Chittagong'
    }
];


let result = personInfo.map((man, index)=>(
    // console.log(`${man.name} is ${man.age} years old and lives in ${man.address}`)
    pName = man.name,
    age = man.age,
    address = man.address,
    
    console.log(`${pName} is ${age} years old and lives in ${address}`)
));

