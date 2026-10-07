class Evenement {
  constructor(annee, nom, age, club, stats, image) {
    this.annee = annee;
    this.nom = nom;
    this.age = age;
    this.club = club;
    this.stats = stats;
    this.image = image; 
  }

  carte() {
    return `
      <li class="carte" data-annee="${this.annee}">
        <img src="${this.image}" alt="${this.nom}" class="photo-joueur">
        <span class="annee">${this.annee}</span>
        <h3>${this.nom}</h3>
        <p class="details">${this.age} ans · ${this.club}</p>
        <p class="stats">${this.stats}</p>
      </li>
    `;
  }
}