// const posts = [
//     {title : 'Post one ' , body : 'this is post one'},
//     {title : 'post Two ', body : ' this is post two'}
// ];

// function getPost(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post,index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }



// function createPost(post){
//     return new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             posts.push(post);

//             const error = false;
//             if (!error) {
//                 resolve();
//             }else{
//                 reject('Error : Something went wrong')
//             }
//         },2000)
//     });
// }

// createPost({title : 'post three',bodt : ' this is post three'}).then(getPost);

// async function init() {
//     await createPost()
// }

// async function init(){
//     await createPost({title: ' post three',body : ' theis is post three'});
// }

async function fetchUsers (){
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}

// const promise1 = Promise.resolve('Hello World');
// const promise2 = Promise = 10;
// const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'Goodbye')
// );

// Promise.all([promise1,promise2,promise3]).then(values => console,log(values));