

//----------------1---------------------
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


//------------------2----------------------

//small functions used in filterUniqueWords
const lower = word => word.toLowerCase(); // all to lowercase 
const splitWords = text => text.match(/[\w']+/g) || []; //split the words ignores , and dots
const unique =  arr => [...new Set(arr)]; // remove duplicates
const sorted = arr => [...arr].sort(); //sort 


function filterUniqueWords(text) {
//convert everything to lowercase, split the words, filter repets and sort everything in that order
//spaced like this because ir resulted clearer to me 
    return sorted(
            unique(
                splitWords(text).map(lower)
        )
    );
};


//--------------------3-------------------------

/*
I consider that student object will have a format similar to

const student = {
    name: "name",
    grades: [10, 5, 9], 
} ;
*/
//

const getGrades = student => student.grades; // gets grades array from a student
const getName = student => student.name; // get student name

const add = arr => arr.reduce((a, b) => a + b, 0); // add all the grades from a student 
const average = arr => add(arr) / arr.length; // average value
const getAverage = student => average(getGrades(student)); 


const studentsWithAverage = student => ({
    name: getName(student),
    average: getAverage(student)
});

const getAverageGrade = students => students.map(studentsWithAverage);





//-----------------------Basic test-----------------------
const students = [
    { name: "Alice", grades: [90, 80, 100] },
    { name: "Bob", grades: [70, 75, 80] }
    ];
    
console.log(getAverageGrade(students)); 
console.log(students)

const person = {
    firstName: "John",
    lastName: "Smith", 
} ;



const fullname = getFullName(person);
console.log(fullname)


console.log(filterUniqueWords("hoal jaja, ASFAS, ,. Hoal"));