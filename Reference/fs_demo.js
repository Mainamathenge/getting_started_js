const fs = require('fs');
const path =  require('path');

// //create folder

// // fs.mkdir(path.join(__dirname,'/test'),{},err => {
// //     if (err) throw err ;
// //     console.log('Folder created....');
// // });

// // create and write a file

// fs.writeFile(
//     path.join(__dirname ,'/test','hello.txt'), 'Hello_wrorld!',
//     err => {
//         if (err) throw err;
//         console.log('File written to .......');
//         fs.appendFile(
//             path.join(__dirname ,'/test','hello.txt'), 'I love node js!',
//             err => {
//                 if (err) throw err;
//                 console.log('File written to .......');
        
//             }
//         );

//     }
// );

//read file 

fs.readFile (
    path.join(__dirname ,'/test','hello.txt'), 'utf8',
    (data,err) => {
        if (err) throw err;
        console.log(data);

    }
);
