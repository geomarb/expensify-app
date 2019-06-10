// Object destructuring
// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// const { city, temp: temperature } = person.location

// console.log(firstName, age, city, temperature)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Anonymous' } = book.publisher
// console.log(publisherName);


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, , state] = address

console.log(state)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [description, small, medium, large] = item

console.log(description, medium);