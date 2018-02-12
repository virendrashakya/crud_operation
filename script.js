var msg = {};
var xmlhttp = new XMLHttpRequest();
function createData(){
  var usr = $('#usr').val();
  var job = $('#job').val();

  $.ajax(
    {
      type: "POST",
      url : "https://reqres.in/api/users",
      data : "nm="+usr+"&job="+job,
      success : function(msg){
        console.log(msg);

        var obj = JSON.parse(msg);
        console.log(obj);
      }
    }
  );
}

// var col = [];
// for (var i = 0; i<msg.length;i++){
//   for var key in msg[i]{
//     if(col.indexof(key) === -1){
//       col.push(key);
//     }
//   }
// }
//
//
//
// for(var i = 0; i<msg.length;i++){
//   tr = table.insertRow(-1);
//   for(var j = 0; j < col.length;j++) {
//     var tabcell = tr.insertCell(-1);
//     tabCell.innerHtml = msg[i][col[j]];
//   }
// }
//
// var divContainer = document.getElementById("showData");
// divContainer.innerHTML = "";
// divContainer.appendChild(table);
//
//

// $("#create").on('click',function(){
//   $.ajax({
//         url: 'https://reqres.in/api/users',
//         type: 'GET',
//         })
//     .done(function() {
//         console.log("success");
//         })
//     .fail(function() {
//     console.log("error");
//         })
//     .always(function(){
//     console.log("complete");
//         })
// });
