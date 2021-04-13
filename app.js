let myArray = [
    "Chuck Norris ne ment pas, c'est la vérité qui se trompe.",
    "Chuck Norris est en couleur sur les photos Noir et Blanc.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Un jour Chuck Norris a dit 'Va voir la-bas si j'y suis'... et il y était...",
    "Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.",
    "Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
    "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.",
    "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.",
    "Certains disent : 'La violence ne résout rien'.Chuck Norris leur répond : 'C'est que t'as pas tapé assez fort'.",
    "Chuck Norris va régulièrement voir des matchs du PSG pour ne pas oublier ce qu'est la défaite."
];


let btn = document.querySelector('#btn')
let punchlines = document.querySelector('#chuck-punchlines');




function generate() {
    let randomColor = (Math.floor(Math.random() * 0xffffff)).toString(16);
    punchlines.textContent = myArray[Math.floor(Math.random() * myArray.length)];
    document.body.style.backgroundColor = "#" + randomColor;
    btn.style.color = "#" + randomColor;
    punchlines.style.color = "#" + randomColor;
}


btn.addEventListener('click', generate);