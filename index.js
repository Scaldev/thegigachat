let button = document.getElementById('send');
button.addEventListener('click', sendData);

const url = 'http://127.0.0.1:5500/index.html';

function sendData() {

  let name = document.getElementById('name');

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "name": name })
  })

  .then(response => response.text())
  .then(html => console.log(html));

}

function sussy() {
  console.log("sussy baka")
}

sussy()