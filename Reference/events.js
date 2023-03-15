const EventEmitetr = require('events');

// create class 

class MyEmmiter extends EventEmitetr {}

//Init object 

const MyEmmiter = new MyEmmiter();

//Event listener 

MyEmmiter.on('event', () => console.log('Event Fired'));

MyEmmiter.EventEmitter('event');