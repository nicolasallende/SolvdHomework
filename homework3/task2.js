
/*
I consider that person object will have a format similar to

const person = {
    firstName: "Firstname",
    lastName: "Lastname", 
} ;
*/

function getFullName(person){
    return `${person.firstName} ${person.lastName}`;
}

//small functions used in filterUniqueWords
const lower = word => word.toLowerCase(); // all to lowercase 
const splitWords = text => text.split(" ") || []; //split the words
const unique =  arr => [...new Set(arr)]; // remove duplicates
const sorted = arr => [...arr].sort(); //sort 


function filterUniqueWords(text) {
//convert everything to lowercase, split the words, filter repets and sort everything in that order
    return sorted(
            unique(
                splitWords(text).map(lower)
        )
    );
};


console.log(filterUniqueWords("hoal jaja, ASFAS"));




const person = {
    firstName: "John",
    lastName: "Smith", 
} ;



const fullname = getFullName(person);
console.log(fullname)