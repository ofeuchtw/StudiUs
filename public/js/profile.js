firebase.auth().onAuthStateChanged((user) => {
      if (user) {
    	setUserProfile();
      }
});

// A $( document ).ready() block.
$( document ).ready(function() {
    if(isUserSignedIn()) {
    	setUserProfile();
    } 
});


function setUserProfile() {
	$("#profile-pic").attr("src",getProfilePicUrl());
    $("#name").text(getUserName());
    $("#major").text(getMajor());


}

