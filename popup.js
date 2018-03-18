

document.addEventListener('DOMContentLoaded', function () {
  var dataList = [];
  //console.log(dataList);
    for(var i = 1; i < 189; i++){
       var data = $.getJSON('http://www.ratemyprofessors.com/find/professor/?department=&institution=University+of+California%2C+Irvine&page=' + String(i) + '&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=1074&sortBy=', function(data) {
          for (x = 0; x < 21 ; x++)
          document.getElementById("data").innerHTML += String(data.professors[x].tFname) + " " + String(data.professors[x].tLname) + " " + String(data.professors[x].overall_rating)+ "<br />";    
    });
      }

});

