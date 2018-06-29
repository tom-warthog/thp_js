// Mode psy
function psychoMode() {
  document.body.style.backgroundColor = "magenta";

  document.querySelectorAll("h1").forEach(function(h1) {
    h1.style.color = "green";
    h1.style.fontFamily = "Comic Sans MS";
  });

  document.querySelectorAll("h2").forEach(function(h2) {
    h2.style.color = "green";
    h2.style.fontFamily = "Comic Sans MS";
  });

  document.querySelectorAll("h3").forEach(function(h3) {
    h3.style.color = "green";
    h3.style.fontFamily = "Comic Sans MS";
  });

  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = "blue";
    p.style.fontFamily = "papyrus";
  });
}
// motherfucking popup
window.onload = setTimeout(function() {
  alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');
  window.location = 'http://www.example.com';
}, 10000);
