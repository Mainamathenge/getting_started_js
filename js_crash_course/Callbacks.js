const posts = [
    {title : 'Post one ' , body : 'this is post one'},
    {title : 'post Two ', body : ' this is post two'}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}



function createPost(post){
    setTimeout(()=> {
        post.push(post);
    },2000);
}

//getPost();

createPost({title : 'post Three' , body : 'This is post three'},getPosts);
