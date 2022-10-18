//Definir les variables
//test des caracteres si ce sont des lettres
// declarer une fonction - test si 
//
//
var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var nmbcharacter = document.getElementById('nmbcharacter');

//lorsque l'utilisateur clique sur le champ du mot de passe, afficher la boite message
myInput.onfocus = function (){
    document.getElementById('message').style.display ="block"
}

//lorsque l'utilisateur clique en dehors du champ du mot de passe masquer la boite message

myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}
nmbcharacter
//lorsque l'utilisateur commence a taper quelque chose dans le champ mot de oasse

myInput.onkeyup = function(){
    //valider les lettres minuscules
    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        //si le mot de passe contient une lettre minuscule,enlever la classe "invalid"et ajoute
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else {
    // si non , enlever la classe "valid" et ajouter la classe "invalid"
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }
     //valider les lettres Majuscules
     var upperCaseLetters = /[A-Z]/g
     if(myInput.value.match(upperCaseLetters)){
         //si le mot de passe contient une lettre majuscule,enlever la classe "invalid"et ajoute
         capital.classList.remove('invalid');
         capital.classList.add('valid');
    }else {
     // si non , enlever la classe "valid" et ajouter la classe "invalid"
         capital.classList.remove('valid');
         capital.classList.add('invalid');
    }
     //valider les nombres
     var numbers = /[0-9]/g
    
     if(myInput.value.match(numbers)){
    //var nombres = parseInt((myInput.value.match(numbers)));
    //console.log (nombres);
     //si le mot de passe contient un chiffre,enlever la classe "invalid"et ajoute
    //console.log(numbers);
     number.classList.remove('invalid');
     number.classList.add('valid');
     }else {
     // si non , enlever la classe "valid" et ajouter la classe "invalid"
     number.classList.remove('valid');
     number.classList.add('invalid');
    }
     //valider la longueur
     //var numbers = /[0-9]/g
     if(myInput.value.length >= 8){
     //si le mot de passe contient minimun 8 caractères ,enlever la classe "invalid"et ajoute
     console.log(myInput.value.length);
     nmbcharacter.classList.remove('invalid');
     nmbcharacter.classList.add('valid');
     }else {
    // si non , enlever la classe "valid" et ajouter la classe "invalid"
     nmbcharacter.classList.remove('valid');
     nmbcharacter.classList.add('invalid');
    }
}






























//let mdpSaisi;
//let regexMaj = regexMaj("[A-Z]");
//let regexMin = regexMin("[a-z]");
//let regexChiffre = regexChiffre("[0-9]");
//let regexSpecial = regexSpe("")
//let compteur
//let message = document.getElementById('message');
//let button = document.getElementById('button');

//j'ai besoin que mon programme js :
//demande à l'utilisateur un mot de passe
//function mdpTresSecurise(){




//fonction mdpTresSecurise
//verifie le nombre de caractere Special
//les  majuscule et minuscule
//les nombres
//condition disant qu'il faut 2 - 5 caracteres special des lettres en majuscule et minuscule + des nombres avec une longueur de 12 caracteres
//}