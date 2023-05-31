let button = document.getElementById('send');

const url = 'http://127.0.0.1:5500/index.html';

document.getElementById("send").onclick = function sendData() {

  let name = document.getElementById("name").value;
  let donnees = { 'nom': name };
  
  fetch('/data?nom=' + donnees.nom, {
    method: "GET",
    mode: 'same-origin',
    headers: { "Content-Type": "application/json" }
  })

  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));

}