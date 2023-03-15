function book(title,author,year){
    console.log('Book Inintialized');
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary = function(){
    //     return `${this.title} was written by ${this.author} in the year ${this.year}`
    // }
}

book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in the year ${this.year}`
} ;


// magaxine constructor

Magazine.prototype = Object.create(book.prototype);

function Magazine (title,author,year,month)
{
    book.call(this,title,author,year);
    this.momth = this.momth
}

const mag1 = new Magazine('mag one ', 'John Doe ', '2018', 'may');
//Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine;

console.log(mag1)