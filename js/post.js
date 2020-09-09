let params = (new URL(document.location)).searchParams;
let name = params.get("id");

const title = document.getElementById('title');

title.innerHTML = name;