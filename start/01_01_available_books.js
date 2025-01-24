// Write your code here - available books
class Book{
  constructor(title, author, isbn, numCopies){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }
  
  get availability(){
    return this.getAvailability();
  }
  
   getAvailability() {
    if(this.numCopies === 0) return "out of stock";
    else if(this.numCopies < 10) return "low stock";
    else return "in stock";
   }
   sell(numCopiesSold = 1){
     this.numCopies -= numCopiesSold;
   }
   restock(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
   }
}
const book = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(book.availability);
book.sell(3)
console.log(book.availability);
book.restock(10)
console.log(book.availability);

// //if we use function - bz anything written as class can be written as a function
// function Book(title, author, isbn, numCopies){
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.numCopies = numCopies;
// } 
// //we declare this funciton on the prototype bz we don't need to create a new instance each time we make a new object
// Book.prototype.getAvailability = function(){
//   ....
// }
// Book.prototype.sell = function(numCopiesSold = 1){
//   this.numCopies -= numCopiesSold;
// }
// const book = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
// console.log(book.getAvailability());
// book.sell(3);
