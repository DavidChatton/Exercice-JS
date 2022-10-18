let seconde;
let minute;
let heure;
let HeureActuel
let bouton = document.getElementById('IDbouton');
let message = document.getElementById('message');
function afficherHeure (){
//récupérer la valeur du nombre saisis avec la fonction.value.
heure = parseInt(document.getElementById ('IDheure').value);
minute = parseInt(document.getElementById('IDminute').value);
seconde = parseInt(document.getElementById('IDseconde').value);
    
    seconde = seconde + 1;
     // Si les secondes sont égal à 60 alors les secondes passent à 00 et rajoute +1 minute   
    if (seconde == 60) {
        seconde = 00;
        minute = minute + 1;  
    }

    
    // Si les minutes sont égal à 60 alors les minutes passent à 00 et rajoute +1 minute    
    if (minute >= 60) {
        minute = 00;
        heure = heure + 1; 
    }

    
    // Si les heures sont égal à 24 alors les secondes , minutes et heures passent à 00 
    if (heure > 23) {
        heure = 00;
        
    }
    HeureActuel =" Il est actuellement " + heure + 'h' + minute + 'min' + seconde + 's';
    message.innerHTML = HeureActuel;  
    }  
//Ajout d'un écouteur d'événement sur le bouton qui au click appelera la fonction afficherHeure();
bouton.addEventListener ('click', afficherHeure,false ) 
    
//var minutes = if seconds >= 60 
//else minutes + 1 (time / 60);


  //  var seconds = time - minutes * 60;
    
    
    //var hours = Math.floor(time / 3600);
    //time = time - hours * 3600;


    
    
    //function afficherHeure(string,pad,length) {
        //return (new Array(length+1).join(pad)+string).slice(-length);
    //}
    
    //var finalTime = afficherHeure(minutes,'0',2)+':'+afficherHeure(seconds,'0',2);
    

