// const s1 = ' hello';
// console.log (typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert(1);
// console.log(naviagator.appVersion);

// const book1 ={
//     title: 'Book One',
//     author: 'john Doe',
//     year: '2013',

    // getSummary : function(){
    //     return `${this.title} was written by ${this.author} in the year ${this.year}`
    // }
// }

// console.log(book1.getSummary());

function book(title,author,year){
    console.log('Book Inintialized');
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary = function(){
    //     return `${this.title} was written by ${this.author} in the year ${this.year}`
    // }
}

book1 = new book('the_fire_inside','the fire_outside','the manager');
book2 = new book('tryyr','the cat', 'the doog');

// storing the get summary in the proto type this now store the summary in the prototype rather than in every book

book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in the year ${this.year}`
} 




