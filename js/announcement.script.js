$(document).ready(function() {
 if(typeof data01 != "undefined" && data01 != null && data01.length != null && data01.length > 0) {
  $("#annc-msg").hide();
  
  let data = data01.reverse();
  
  $.each(data, function(i, obj){
   let html = '<div class="card mb-1"><h5 class="card-header">' + obj.title + '</h5><div class="card-body"><blockquote class="blockquote mb-0"><p>' + obj.body + '</p><footer class="blockquote-footer">' + obj.date + '</footer></blockquote></div></div>';
  
   $("#announcement").append(html);
  })
 } else {
  $("#annc-msg").show();
 } 
 
 $("#anncSearch").on("keyup", function() {
  let searchVal = this.value.toLowerCase().trim();
  
  $("#announcement .card").show().filter(function() {
   return $(this).text().toLowerCase().trim().indexOf(searchVal) == -1;
  }).hide();
 });
});
