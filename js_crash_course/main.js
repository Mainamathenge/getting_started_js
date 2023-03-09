// console.log('hello World');

/* //Variables in js let,const
let age = 30; //when using variables that will changed later
age = 31 ;
//console.log(age);

//Data types (strings , Numbers ,boolean ,null undefined)
const name = 'John';
const miaka = 30;
const rating = 4.5 ;
const iscool = true;
const x = null;
const y = undefined;
let z; */

//console.log(typeof x);

// concatination 

//console.log('my name is ' + name + ' and i am ' + age +' years old');

//Working with strings
//changing to upper case 

/* const string = 'The quick brown fox jumped over the lazy dog';

console.log(string.length);  //getting number of charcters
console.log(string.toLocaleUpperCase()); // cahbging to all capital
console.log(string.toLowerCase());  //to lower case
console.log(string.split('')); //to split all the letters in the string */

/* //arrays 
const number = new Array(1,4,6,7,8,5,4); // initialising an array using a constructor
const fruits = ['apples','oranges','pears'];
//console.log(number);
fruits.push('sweet_banana');
console.log(fruits); */

// objects 

/* const person = {
    firstName : 'John',
    lastName : 'Doe ',
    age : 30 ,
    hobbies : ['music','movies','Sporr'],
    address : {
        street : '50 main ',
        city : 'Boston',
        state : 'MA'
    }
} */

// const {firstName, lastName} = person; // destructuring the object
// console.log(firstName);

//looping items
/* let a = [4,7,8,9,7,8,9,5,43]

for (i=0 ;i < a.length; i++ )
{
    console.log(a[i]);
}

for (let b = 0; b < a.length; b++) {
    console.log(a[b]);
    
} */

//while loop

/* let xc = 1;
while (xc<10){
    console.log(xc++)
    if (x == 7){break;}
    //if (x==7) break;
} */

/* scope in js
let ab = 'first_test';

function scopeTest ()
{
    console.log(ag);
    a = 'changed';

    if (a != ''){
        console.log(a);
        let c = 'third';
    }
}
scopeTest()
console.log(a); */

/* // forEach ,map ,filter
const todos =[
    {id : 1,
    text : 'Dentist appt',
    isCompleted : true
    },
    {id : 2,
    text : 'Dentist appt',
    isCompleted : false
    },
    {id : 4,
    text : 'Dentist appt',
    isCompleted : true
    },
];

// forEach

todos.forEach(function(todo){
    console.log(todo.text);
});

// map 
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);
//filter

const todoCopleted = todos.filter(function(todo){
    return todo.isCompleted == true;
});

console.log(todoCopleted); */

//conditionals 

/* const h = 20 ;
const i = 30 ;

if (x > 5 || i < 10){
    console.log('x is more y is more 10');
}
const color = x > 10 ? 'red ': 'blue';

if (h === i){

}
// when we use  the three it compares even the data types 
 */


//switch statements

//object orinented programming

// the constructor

/* function person(firstName,lastName,dob)
{
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
this.get
}
//adding elements to the oop

const person1 = new person('John','Doe','4-3-1980');
const person2 = new person('martin','smith','3-4-2022'); 

//class

class person {
    constructor(firstName,lastName , dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName (){
        return `${this.firstName} ${this.lastName}`;
    }
} */

//single element

// console.log(document.getElementById('my_form'));
// console.log(document.querySelector('my_form'));

// while slecting ultiple elements

//console.log(document.querySelector('.item'));
// console.log(document.querySelectorAll('item'));

// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brand';
// ul.lastElementChild.innerHTML = '<hi>Hello<hi/>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
   // e.preventDefault();
    console.log('click');
});
