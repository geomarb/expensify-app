import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// const expense1 = {
//   description: 'Expense 1',
//   note: '#1',
//   amount: 100,
//   createdAt: 10000,
// };
// const expense2 = {
//   description: 'Expense 2',
//   note: '#2',
//   amount: 2000,
//   createdAt: 2000000,
// };
// const expense3 = {
//   description: 'Expense 3',
//   note: '#3',
//   amount: 300000,
//   createdAt: 3000000,
// };


// database.ref('expenses').push(expense1);
// database.ref('expenses').push(expense2);
// database.ref('expenses').push(expense3);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Geomar Bastiani',
//   age: 43,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google',
//   },
//   location: {
//     city: 'Queijas',
//     country: 'Portugal',
//   },
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Porto',
// });

// database.ref('isSingle').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did no remove data', e);
//   });

// database.ref('age').set(44);
// database.ref('location/city').set('Alegrete');
// database.ref('attibutes').set({
//   heiht: 170,
//   weight: 80,
// }).then(() => {
//   console.log('Second set call worked!');
// }).catch((e) => {
//   console.log('This failed for second user', e);
// });
