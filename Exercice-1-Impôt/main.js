var agesaisi;
var genresaisi;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function verifierImposition(){
    //récupérer la valeur de l'age et du genre avec la fonction.value.
    agesaisi = document.getElementById ('age-saisi').value;
    genresaisi = document.getElementById('genre-saisi').value;
    //Notre condition : Si age >= 20 et Homme alors, ou si femme et age >= 18 et si femme <= 35
 if(genresaisi =="H" && agesaisi >= 18){
    message.innerHTML = '<div class= "alert alert-danger" role="alert">Vous êtes imposable!</div>';
}else if ((genresaisi =="F" && agesaisi >= 20 )&&(genresaisi =="F" && agesaisi<=35)){
message.innerHTML = '<div class="alert-danger" role="alert">Vous êtes imposable!</div';
}else{
    message.innerHTML ='<div class="alert alert-success" role="alert">Vous êtes non imposable!</div>';
}   
}
//Ajout d'un écouteur d'événement sur le bouton qui au click appelera la fonction verifierImposition();
bouton.addEventListener ('click', verifierImposition,false )