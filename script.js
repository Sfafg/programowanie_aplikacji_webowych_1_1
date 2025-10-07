(function() {
  var ex1_button = document.getElementById('ex1_button');
  var ex1_content = document.getElementById('ex1_content');

  ex1_button.onclick = function() {
    ex1_content.innerHTML = "";
    for (var i = 0; i < 10; i++) {
      ex1_content.innerHTML += i;
      if (i != 9) ex1_content.innerHTML += ",";
    }


  }
})();