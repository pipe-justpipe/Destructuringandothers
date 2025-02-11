const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring (Array) - used when we want to get a data out of an array or object.

const book = getBook(2); //2 is the id

// const title = book.title;
// title;

// const author = book.author;;
// author;
// console.log(author, title);

const thirdBook = getBook(3); //3 is the id

const thirdBookTitle = thirdBook.title;
thirdBookTitle;

const forthBook = getBook(4); //4 is the id

const author4 = forthBook.author;

author4;

//Destructuring (Object)
//so instead of using the long method i commented above, we can just do the below

const {title, author,  pages, publicationDate, genres, hasMovieAdaptation, reviews} = book;
console.log(author, title, pages, publicationDate, genres, hasMovieAdaptation, reviews, hasMovieAdaptation);

/*// Without Destructuring
const primaryGenre = genres[0];
const secondaryGenre = genres[1];

// output of the console = science fiction humor

console.log(primaryGenre, secondaryGenre)*/

// With Destructuring

const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre) 

//Rest Operator
// assuming we want to locate other items in the object and we want it to be in an array, we can use the rest operator

const [primary, secondary, ...other] = genres;
console.log(primary, secondary, other)
// so the above returns the remaining items of the object in form of an array
// the rest element must be the last in the destructuring pattern i.e you can only place the ...whatever at the end of the destructuring item as seen above


// Spread Operator for ARRAYS (just like destructuring, it can be used on both arrays and objects)
// Spread is used to add new items in the array weather in front or at the back
const newGenres = [...genres, 'epic fantacy']
console.log(newGenres)
// i.e we just added the 'epic fantacy to the items

//Spread Operators for OBJECTS
//When we want to add new properties or override existing ones, we use the spread operator
const updatedBook ={
  ...book,
  //ADDING A NEW ITEM
  moviePublicationDate: '2021-12-31',
  //OVERWRITING AN EXISTING PROPERTY
  pages: 1356,
};
updatedBook;

console.log(updatedBook.pages)

//for object, you must always give the items the exact names they bear in the objects as seen below;

const {goodreads, librarything} = book.reviews;

goodreads;
console.log(goodreads, librarything);


//TEMPLATE LITERALS
//Allows creation of strings that contains js variables

const summary = `${title} is a book with ${pages} number of pages was written by ${author}and published in ${publicationDate.split ("-")[0]} The book has ${hasMovieAdaptation? "" : 'not'} been adapted as a movie`;
summary

//TERNARIES INSTEAD OF IF ELSE

//it usually has three operands

const pagesRange = updatedBook.pages > 1000 ? 'over a thousand' : 'Less than 1000';
pagesRange;

console.log(`The book has ${pagesRange} pages`);

//the ternary operator can be used in a statement, more flexibility because it is an operator but if-else is a whole statement that can not be used in a sentence

//ARROW FUNCTIONS

// 
const getYear = (str) => str.split('-')[0];
// for one line of code, we wont be needing the return keyword
// if we had multiple lines of code, we would use the curly bracesafter the arrow and we will need to manually return the function by saying return str;
console.log(getYear(publicationDate));

