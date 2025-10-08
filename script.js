(function () {
	var ex1_button = document.getElementById("ex1_button");
	var ex1_content = document.getElementById("ex1_content");

	ex1_button.onclick = function () {
		ex1_content.innerHTML = "";
		for (var i = 0; i < 10; i++) {
			ex1_content.innerHTML += i;
			if (i != 9) ex1_content.innerHTML += ",";
		}
	};

	var ex2_text = document.getElementById("ex2_text");
	var ex2_content = document.getElementById("ex2_content");

	ex2_text.oninput = function () {
		ex2_content.innerHTML = "";
		if (ex2_text.value.length != 9)
			ex2_content.innerHTML += "Długość numeru musi być równa 9<br>";
		if (new RegExp("[a-zA-Z]").test(ex2_text.value))
			ex2_content.innerHTML += "Numer nie może zawierać liter<br>";
		if (new RegExp("[^a-zA-Z0-9]").test(ex2_text.value))
			ex2_content.innerHTML += "Numer nie może zawierać znaków specjalnych<br>";
		if (ex2_content.innerHTML.length == 0)
			ex2_content.innerHTML += "Numer telefonu jest poprawny<br>";
	};

	var ex3_element = document.getElementById("ex3_element");
	var ex3_one = document.getElementById("ex3_one");
	var ex3_two = document.getElementById("ex3_two");
	ex3_element.draggable = "true";

	ex3_one.ondragover = function (e) {
		e.preventDefault();
	};

	ex3_one.ondrop = function () {
		ex3_one.appendChild(ex3_element);
	};

	ex3_two.ondragover = function (e) {
		e.preventDefault();
	};

	ex3_two.ondrop = function () {
		ex3_two.appendChild(ex3_element);
	};
})();

