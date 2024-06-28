let count = 0;
function increment() {
  count = count + 1;
  document.getElementById('count-el').innerHTML = count;
}
function decreament() {
  if (count == 0) {
    document.getElementById('count-el').innerHTML =
      'count cannot be less than zero';
  } else {
    count = count - 1;
    document.getElementById('count-el').innerHTML = count;
  }
}

function makezero() {
  count = 0;
  document.getElementById('count-el').innerHTML = count;
}

function save() {
  let res = count + '-';
  document.getElementById('save-p').innerHTML += res;
}
