import firebase from 'firebase';

try {
  //CRUD creating , reading , updating , deleting
  var config = {
    apiKey: "AIzaSyDUC-EjPfOI-FtqRc-9U5BI_wh7OPe5B3o",
    authDomain: "andrei-todo-app.firebaseapp.com",
    databaseURL: "https://andrei-todo-app.firebaseio.com",
    storageBucket: "andrei-todo-app.appspot.com",
    messagingSenderId: "1032996165232"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
