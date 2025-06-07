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
        <li><a href="/pages/about.html">À propos</a></li>
        <li><a href="/pages/cv.html">CV</a></li>
        <li><a href="/pages/projets/Projet_Vapeur.html">Application Web pour les jeux vidéo</a></li>
        <li><a href="/pages/projets/Projet_VR.html">Jeu vidéo pour les enfants</a></li>
        <li><a href="/pages/projets/LandL.html">Jeu vidéo sur le suicide</a></li>
        <li><a href="/pages/projets/MLK.html">Jeu vidéo sur la ségrégation aux USA</a></li>
      </ul>
    </nav>
    <div class="menu-toggle" onclick="toggleMenu()">☰</div>
  `;
  document.body.insertAdjacentHTML('afterbegin', menuHTML);
});
