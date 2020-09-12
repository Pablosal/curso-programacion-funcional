const basketItems = [
  {
    productName: "Lenovo Carbon",
    price: 2145,
  },
  {
    productName: "Macbook Pro",
    price: 3111,
  },
  {
    productName: "Google Home",
    price: 250,
  },
];
// let basketSum = basketItems.reduce((acc, item) => {
//   return acc + item.price;
// }, 0);
// console.log({ basketSum });
// const people = [
//   {
//     name: "Leo",
//     age: 22,
//     blackBelt: true,
//     experience: 18,
//     availableForWork: true,
//     isTurtle: true,
//     friends: [
//       {
//         name: "Micky",
//         age: 44,
//         blackBelt: false,
//         availableForWork: true,
//         isTurtle: false,
//       },
//       {
//         name: "Donny",
//         age: 32,
//         blackBelt: true,
//         availableForWork: false,
//         isTurtle: false,
//       },
//     ],
//   },
//   {
//     name: "Rafael",
//     age: 21,
//     blackBelt: true,
//     experience: 12,
//     availableForWork: true,
//     isTurtle: true,
//     friends: [
//       {
//         name: "Leo",
//         age: 31,
//         blackBelt: false,
//         isTurtle: false,
//         availableForWork: false,
//       },
//       {
//         name: "Donny",
//         age: 33,
//         blackBelt: true,
//         isTurtle: false,
//         availableForWork: true,
//       },
//     ],
//   },
//   {
//     name: "Donatello",
//     age: 19,
//     blackBelt: true,
//     experience: 16,
//     availableForWork: false,
//     isTurtle: true,
//     friends: [
//       {
//         name: "Nicky",
//         age: 34,
//         blackBelt: false,
//         isTurtle: false,
//         availableForWork: true,
//       },
//       {
//         name: "Splinter",
//         age: 73,
//         blackBelt: true,
//         isTurtle: false,
//         availableForWork: false,
//       },
//     ],
//   },
//   {
//     name: "Michaelangelo",
//     age: 17,
//     blackBelt: true,
//     experience: 10,
//     availableForWork: false,
//     isTurtle: true,
//     friends: [
//       {
//         name: "April",
//         age: 21,
//         blackBelt: false,
//         isTurtle: false,
//         availableForWork: false,
//       },
//       {
//         name: "B-Bob",
//         age: 21,
//         blackBelt: true,
//         isTurtle: false,
//         availableForWork: true,
//       },
//     ],
//   },
// ];
// const edadDeTodasLasPersonas = people.reduce((acc, person) => {
//   acc.push(person.age);
//   person.friends.forEach((friend) => {
//     acc.push(friend.age);
//   });
//   return acc;
// }, []);
// console.log({ edadDeTodasLasPersonas });

// const numeros = [89, 21, 232, 3, 12, 57];

// console.log(
//   numeros.reduce((acc, item) => {
//     return acc + item;
//   }, 0)
// );
