const bookProtos = {
    getSummary : function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    },
    getAge : function(){
        const years = new Date().getFullYear() - this.year ;
        this.year;
        return `${this.title} is  ${this.year} old` ;
    }
}

/* const book1 = Object.create(bookProtos , {
    title : { value : 'Book one'},
    author : {value : 'John DOe '},
    year : { value : '2015'}
}); */

class Book {
    constructor(title,author , year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    revise (newYear){
        this.year = newYear;
        this.reviced = true;
    }
}
const book1 = new Book('Harry_potter', 'John','2013');
console.log(book1);
book1.revise('2018');

// subclass 
class Book {
    constructor(title,author , year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    revise (newYear){
        this.year = newYear;
        this.reviced = true;
    }
    getSummary = function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
    
}

class Magazine extends Book {
    constructor(title,author,year,month){
        super(title,author , year);
        this.momth = this.momth;
    }
}

const mag1 = new Magazine('Mag one ', 'JOhn DOe ','2018', 'jan');
console.log(mag1);
