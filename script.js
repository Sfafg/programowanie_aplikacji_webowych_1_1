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

  var ex2_text = document.getElementById('ex2_text');
  var ex2_content = document.getElementById('ex2_content');


  ex2_text.oninput = function() {
    ex2_content.innerHTML = ""
    if (ex2_text.value.length != 9) ex2_content.innerHTML += "Długość numeru musi być równa 9<br>";
    if (new RegExp("[a-zA-Z]").test(ex2_text.value)) ex2_content.innerHTML += "Numer nie może zawierać liter<br>";
    if (new RegExp("[^a-zA-Z0-9]").test(ex2_text.value)) ex2_content.innerHTML += "Numer nie może zawierać znaków specjalnych<br>";
    if (ex2_content.innerHTML.length == 0) ex2_content.innerHTML += "Numer telefonu jest poprawny<br>";
  }

})();