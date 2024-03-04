document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");

  var paragraph1 = document.createElement("p");
  paragraph1.textContent = "Holberton Dashboard";
  body.appendChild(paragraph1);

  var paragraph2 = document.createElement("p");
  paragraph2.textContent = "Dashboard data for the students";
  body.appendChild(paragraph2);

  var paragraph3 = document.createElement("p");
  paragraph3.textContent = "Copyright - Holberton School";
  body.appendChild(paragraph3);
});
