//creation class
class Personnage {
    // Le constructeur initialise les attributs du personnage lors de sa création
    constructor(nom, caracteristique) {
      this.nom = nom; // Le nom du personnage
      this.caracteristique=caracteristique;
    }
  }


// creation des cibles
let nombre;
cible=[]//les 5 cibles de Jason
nom=["Jean","Paul","Rebecca","Clara","Stacy","Aurelien","Milan","Laure","Nolan","Mathilde","Raoul"]
personnalite=["nerd","sportif","geek","etrange","musicien","dealer","clown","blonde","paresseux","dubitatif","danceur"]
for(let elt=0;elt<5;elt++){
  nombre=Math.round(Math.random()*nom.length)
  cible.push(new Personnage(nom[nombre],personnalite[nombre]));
  nom.splice(nombre,nombre);
  personnalite.splice(nombre,nombre);
}

//creation classe
class Tueur {
  constructor(nom,vie) {
    this.nom=nom
    this.vie = vie;
    this.tuer=[]//liste pour si Jason perd
  }
attaquer(cible) {
  let victime=Math.round(Math.random()*(cible.length-1));
  let nom=cible[victime].nom;
  let caracteristique=cible[victime].caracteristique;
  let chiffre=Math.round(Math.random()*10);
  if (chiffre< 3) {//chance de 2 de mourir
    this.tuer.push(nom);
    // splice (0,0) ne marche pas il faut ecrire splice (0,1) pour premier du tableau
    if (victime==0){
      cible.splice(0,1);
    }else{
    cible.splice(victime,victime)};
    console.log(nom+" la "+caracteristique+" est mort");
  } else if(3<=chiffre && chiffre<=5){//chance de 3 de mourir et attaquer
    this.tuer.push(nom);
    // splice (0,0) ne marche pas il faut ecrire splice (0,1) pour premier du tableau
    if (victime==0){
      cible.splice(0,1);
    }else{
    cible.splice(victime,victime)};
    this.vie=this.vie-15;
    console.log(nom+" la "+ caracteristique+" est mort mais a inflige 15 degat il reste "+this.vie+" de point de vie" );
  }else if(5<chiffre){//chance de 5 d'esquive
    this.vie=this.vie-10;
    console.log(nom+" la "+ caracteristique+" a esquivée er inflige 10 degat il reste "+this.vie+" de point de vie");
  }
}
}
let Jason= new Tueur("Jason",100)

while (Jason.vie > 0 && cible.length>0) {
  Jason.attaquer(cible);
};


if (cible.length==0 && Jason.vie>0){//Jason Gagne
  console.log("Jason gagne avec "+Jason.vie+" point de vie");
}else if (Jason.vie<=0 && cible.length!=0){//Jason perd
  let mort="";
  for (i in Jason.tuer){
    mort = mort+Jason.tuer[i]+" ";
  }
  console.log("Jason a perdu, mais a tué "+ mort);
}else if(cible.length==0 && Jason.vie<=0){// si la derniere victime morte a en même temps tuer Jason
  console.log("Tous le monde est mort")
};
