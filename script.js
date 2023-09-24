"use strict";

class Joueur {
    constructor(prenom,sante) {
      this.prenom=prenom
      this.sante = sante;
      this.taxi = 0;
      this.feu = 30;//decompte des feu
      this.music //music afficher apres
    }
  
    Rouge() {
      this.feu--;
      
      let nbr = Math.floor(Math.random()*5 );
      nbr = Math.round(nbr);//arrondir pour le switch
  
      // Simuler les effets de chaque porte.
      switch (nbr) {
        case 0:{
          this.music="Maya Hawke-Therese";
          break;
        }
        case 1:{
          this.music="Cyberpunk-Night City";
          break;
        }
        case 2:{
          this.music="Cavethown-Sweet Tooth";
          break;
        }
        case 3:{
          this.music="Anissa-Wejdene";//music piege
          this.sante=this.sante-1;
          this.taxi=this.taxi+1;
          break;
        }
        case 4:{
          this.music="Neoni-Haunted House";
          break;
        }
    }
  }
}
  // Création d'un joueur avec une santé mentale initiale de 10.
let joueur = new Joueur("Adam",10);
while (joueur.sante > 0 && joueur.feu >0) {//condition de fin
let porte = joueur.Rouge();
console.log(joueur.prenom+" est tombe sur la music "+ joueur.music+" Santé mentale actuelle "+ joueur.sante+" il reste "+joueur.feu+" feu");
}
  
if (joueur.sante <= 0) {//perdu
  console.log("Le joueur a épuisé sa santé mentale, il a explosé");
} else {//gagne
  console.log("Le joueur a eu besoin de : " + joueur.taxi + " taxi");
}