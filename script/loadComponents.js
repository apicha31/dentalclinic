// loadComponents.js

// โหลด header.html
fetch('header.html')
  .then(res => res.text())
  .then(data => document.getElementById('header').innerHTML = data);

// โหลด footer.html
fetch('footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);
