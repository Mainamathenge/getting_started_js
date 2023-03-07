//for loops
// for (i = 0 ; i <10 ; i++)
// {
//     console.log(i);
// }

// let a = [4,7,8,9,7,8,9,5,43]

// for (i=0 ;i < a.length; i++ )
// {
//     console.log(a[i]);
// }

// for (let b = 0; b < a.length; b++) {
//     console.log(a[b]);
    
// }

//while loop

// let x = 1;
// while (x<10){
//     console.log(x++)
//     if (x == 7){break;}
//     //if (x==7) break;
// }

// scope in js
// let a = 'first_test';

// function scopeTest ()
// {
//     console.log(a);
//     a = 'changed';

//     if (a != ''){
//         console.log(a);
//         let c = 'third';
//     }
// }
// scopeTest()
// console.log(a);

//returning funtions in js
/*

var myVariable = 'I am a gloabal scope'

var myFuntion = function(){
    console.log('me too')
} */

// function one (){
//     return 'one';
// }

// let value = one;

// console.log(value());

function two(){
    return function (){
        console.log ('two');
    }
}

console.log(two()());
