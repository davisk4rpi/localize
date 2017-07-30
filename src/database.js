import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB-m4Bp9EwueGCqcWN1-6oDBUrODoiG4E8",
  authDomain: "localize-22ec2.firebaseapp.com",
  databaseURL: "https://localize-22ec2.firebaseio.com",
  projectId: "localize-22ec2",
  storageBucket: "localize-22ec2.appspot.com",
  messagingSenderId: "953173518793"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
