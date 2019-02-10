

function viewRequest(event) {
  var x = document.getElementById("requestList");
  var y = document.getElementById("viewRequest");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
    console.log(event.target.value);
    $("#view-name-label").text(event.target.value); 
  }
}

