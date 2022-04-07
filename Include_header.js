var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("header").innerHTML = this.responseText;
      }
   };
xhttp.open("POST", "Header.html", true);
xhttp.send();

// this code bottom is the same of a bove, it's just an easy way to use Jquery
// to request data
// $(document).ready(function(){
//    $("#header").load("Header.html");
// });