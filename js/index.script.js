$(document).ready(function(){
 if (typeof data01 != "undefined" && data01 != null && data01.length != null && data01.length > 0) {
  $("#n-annc-msg").hide();
 
  let anncDataLatest = $(data01).get(-1);
  
  $("#n-title").append(anncDataLatest.title);
  $("#n-body").append(anncDataLatest.body);
  $("#n-date").append(anncDataLatest.date);
 } else {
  $("#n-annc").hide();
  $("#n-annc-msg").show();
 }
});