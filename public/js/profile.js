firebase.auth().onAuthStateChanged((user) => {
      if (user) {
    	setUserInfo();
      }
});

// A $( document ).ready() block.
$( document ).ready(function() {
    if(isUserSignedIn()) {
    	setUserInfo();
    } 
});


function setUserInfo() {
	$("#profile-pic").attr("src",getProfilePicUrl());
    $("#name").text(getUserName());
    $("#major").text(getMajor());
}

