$("#addTutorRequest").click(function() {           
  $('#reqList').append('<li>'+Orli+'</li>')
}); 

function viewRequest() {
  var x = document.getElementById("requestList");
  var y = document.getElementById("viewRequest");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
  }
}