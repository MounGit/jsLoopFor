// # Exo 1 Boucles FOR
// ## - Creer une varaible de type array et inserez toutes les personnes de la classe
// ## - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau
let tab = ["adil", "agim", "ali", "antoine", "chris", "elvis", "haroune", "les autres bg"];
for(let i = 0; i < tab.length; i++){
    console.log(`Bonjour ${tab[i]}`);
};
// OU for in 
for(i in tab){
    console.log(`Bonjour ${tab[i]}`);
};

// - # Exo 2 Boucles FOR (let)
// ## - Dans un prompt inserés un nombre 
// ## - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.
// let nbr = parseInt(prompt("Inscivez un nombre"));
// for(let i = 0; i <= nbr; i++){
//     console.log(i);
// };



// # Exercice 1 boucle FOR
// - Avec une boucle for affichez le nombre de tours de la boucle entre 0 et 20 
// - Affichez les chiffres et dites si c'est un nombre paire ou impaire
for(let i = 0; i <= 20; i++){
    if(i%2 == 0){
        console.log(`${i} est paire`);
    }else{
        console.log(`${i} est impaire`);
    };
}