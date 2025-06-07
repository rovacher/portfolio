// menu.js

function toggleMenu() {
  const menu = document.getElementById('side-menu');
  if (menu.style.left === '0px') {
    menu.style.left = '-250px';
  } else {
    menu.style.left = '0px';
  }
}

// Ajoute automatiquement le menu HTML dans le <body>
document.addEventListener('DOMContentLoaded', () => {
  const menuHTML = `
    <nav id="side-menu">
      <ul>
        <li><a href="/index.html">Accueil</a></li>
        <li><a href="/about.html">À propos</a></li>
        <li><a href="/cv.html">CV</a></li>
        <li><a href="/projets/projet1.html">Projet 1</a></li>
        <li><a href="/projets/projet2.html">Projet 2</a></li>
        <li><a href="/projets/projet3.html">Projet 3</a></li>
        <li><a href="/projets/projet4.html">Projet 4</a></li>
      </ul>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">☰</div>
  `;
  document.body.insertAdjacentHTML('afterbegin', menuHTML);
});
