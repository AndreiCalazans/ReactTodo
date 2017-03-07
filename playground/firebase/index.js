import firebase from 'firebase';

//CRUD creating , reading , updating , deleting
var config = {
  apiKey: "AIzaSyDUC-EjPfOI-FtqRc-9U5BI_wh7OPe5B3o",
  authDomain: "andrei-todo-app.firebaseapp.com",
  databaseURL: "https://andrei-todo-app.firebaseio.com",
  storageBucket: "andrei-todo-app.appspot.com",
  messagingSenderId: "1032996165232"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// set overrides the data
firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrei',
    age: 25
  }
});

// var notesRef = firebaseRef.child('notes');

// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'walk the dog'
// });

 // OR

//  --------------CHALLENGE_____________

// create a new variable for the todo array
// child added
// add two todos
//
var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todo added: ', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'go to school 2'
});

todosRef.push({
  text: 'finish tutorials'
});

todosRef.push({
  text: 'walk the dog'
});


//getting the todos
firebaseRef.child('todos').once('value').then((snapshot) => {
  console.log('here are the todos:' , snapshot.val());
}, (e) => {
  console.log('there was an error', e);
})

// var newTodo = todosRef.push({
//   text: 'go to school'
// });
// var newTodo2 = todosRef.push({
//   text: 'walk'
// });


//-----------------<---------->----------------

 // .on are listeners for the database
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
//  var newNoteRef = notesRef.push({
//    text: 'work today'
//  });
// console.log('Todo id', newNoteRef.key);




//
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Got new value', snapshot.val());
// });
//
// firebaseRef.child('user').update({
//   name: 'Raysa'
// });
//
//
// firebaseRef.child('app').update({
//   name: 'Testing'
// });



// fetchs data
// firebaseRef.once('value').then((snapshot) => {
//   console.log('got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// on is a listeńer that fires everytime the database gets updated
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });

// .off turns off the .on , it removes the listener
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});





// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked');
// }, () => {
//   console.log('Update Failed')
// });

// update only updates the data you can use the path 'app/name' or child()
// firebaseRef.update({
//   'app/name': 'Todo App',
//   'user/name': 'Andrei Calazans'
// }).then(() => {
//   console.log('success');
// }, () => {
//   console.log('failed')
// });;
//
// firebaseRef.child('app').update({
//   version: 1.1
// });
//
// firebaseRef.child('user').update({
//   age:24
// });


// firebaseRef.remove();  removes everything

// firebaseRef.child('app/name').remove();
// you can also delete by setting the value to NULL in update
// firebaseRef.child('app').update({
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();
