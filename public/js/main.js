firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      

        if( $('.searchbar').length ) {
     		$(".searchbar").css("visibility", "visible");
		}
    	
    	$("#setting_button").css("visibility", "visible");	
    	$("#sign-in span").text("Sign Out");

      }
});

// A $( document ).ready() block.
$( document ).ready(function() {
    if(isUserSignedIn()) {
    	$(".searchbar").css("visibility", "visible");
    	$("#setting_button").css("visibility", "visible");	
    	$("#sign-in span").text("Sign Out");
    } 
 
});


function signInOut() {
	if(isUserSignedIn()) {
		signOut();
	} else {
		signIn();
	}
}

// Signs-in 
function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider);


  $(".searchbar").css("visibility", "visible");	
  $("#setting_button").css("visibility", "visible");	
  $("#sign-in span").text("Sign Out");
   
}

// Signs-out 
function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
  $("#sign-in span").text("Sign In");
  $(".searchbar").css("visibility", "hidden");	
  $("#setting_button").css("visibility", "hidden");	
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's display name.
function getMajor() {

 let UID = firebase.auth().currentUser.uid;

 var db = firebase.firestore();

 var major = "Computer Science"
 db.collection('users').doc("2zzF4Pfz01sJ6jlVhplr").get().then(function(doc) {
    if (doc.exists) {
        var major = doc.data().major;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

 return major;
}


// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}