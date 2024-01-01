// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const arr = [
    {book:'one', author: 'rahul', publication:2009},
    {book:'two', author: 'rahil', publication:2010},
    {book:'three', author: 'uttam', publication:2012},
    {book:'four', author: 'pranab', publication:2015},
    {book:'five', author: 'pran', publication:2016},
]


const updateList = arr.filter(element => element.publication >= 2010).
map(element => ({
    ...element,author: element.author.toUpperCase()
}))

console.log(updateList); 