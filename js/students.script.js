$(document).ready(function() {
 $.each(data00, function(i, obj) {
  let html = '<tr><td>' + obj.name + '</td><td>' + obj.exam + '</td></tr>';
  $("#stnd-data-table-body").append(html);
 })
});
