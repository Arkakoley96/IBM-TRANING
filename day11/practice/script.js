// const library = {
//     books: {
//       "Atomic Habits": { author: "James Clear", availableCopies: 3 },
//       "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
//     },
    
//     borrowBook: function(bookName) {
//       if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
//         this.books[bookName].availableCopies -= 1;
//         console.log(`You have successfully borrowed ${bookName}.`);
//       } else {
//         console.log(`${bookName} is not available or out of stock.`);
//       }
//     },
  
//     returnBook: function(bookName) {
//       if (this.books[bookName]) {
//         this.books[bookName].availableCopies += 1;
//         console.log(`You have successfully returned ${bookName}.`);
//       } else {
//         console.log(`The book ${bookName} does not exist in our library.`);
//       }
//     }
//   };

// let num = 15;
// if(num%3==0 && num%5!=0){
//     console.log("Fizz");
// }
// if (num%3!=0 && num%5==0){
//     console.log("Buzz");
// }
// if(num%3==0 && num%5==0){
//     console.log("Fizz Buzz")
// }

function reverseString(str) {
    let reversed = ""; 
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    return reversed;
}