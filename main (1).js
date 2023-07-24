"use strict";

let trainTickets = {
    startStation: "oja trainstop",
    endStation: "araromi",
    price: 10
};

console.log(`${trainTickets.startStation}`);
console.log(`${trainTickets.endStation}`);
console.log(`${trainTickets.price}`);

let person = {};

person.name = "henry";
person.surname = "chukwura";

console.log(person.name);
console.log(person.surname);

let libary = [
    {title: "speaking javascript",
    author: "axel rauschmayer",
    pages: 460
    },
    {title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
    },
    {title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
    }
    ]
    
    let newbook = {
        title: "Learning JavaScript Design Patterns",
        author:"Addy Osmani",
        pages: 254
    };
    
    libary.push(newbook);
    let size = libary.length;
    console.log(size);
    
    console.log(`the title of the first book is ${libary[0].title}`);
    console.log(`the title of the second book is ${libary[1].title}`);
    console.log(`the title of the third book is ${libary[2].title}`);
    console.log(`the title of the fourth book is ${libary[3].title}`);
    
    libary.shift();
    
    console.log(libary.length);
    console.log(`here are the title of the books left: \n ${libary[0].title} \n ${libary[1].title} \n ${libary[2].title}`);
    
    let totalPages = libary[0].pages + libary[1].pages + libary[2].pages;
    console.log(totalPages);