const url = require('url');

const myurl = new url.URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myurl.href);
console.log(myurl.toString());

//Host (too domain)

console.log(myurl.searchParams);