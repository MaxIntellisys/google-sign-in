var firebaseConfig = {
  apiKey: "AIzaSyBl14q9JlP_ZQRxlNrlsDA0Fnp66V3xpKw",
  authDomain: "metricas-239920.firebaseapp.com",
  databaseURL: "https://metricas-239920.firebaseio.com",
  projectId: "metricas-239920",
  storageBucket: "metricas-239920.appspot.com",
  messagingSenderId: "19841981619",
  appId: "1:19841981619:web:44eb6fb5fd3a0ab7e4a4c6"
};
firebase.initializeApp(firebaseConfig);

function signInIntellisys() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user);
    })
    .catch(function(error) {
      console.log(error.message);
    });
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      console.log("User sign out!");
    })
    .catch(function(error) {
      console.log("Error signing user out!");
    });
}

const auth = firebase.auth()
auth.onAuthStateChanged(( user) => {
  if(user){
    toogleUI(user)
  } else {
    toogleUI(user)
  }
})