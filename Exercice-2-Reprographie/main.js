var nombresaisi=0;
var prix=0;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function verifierReprographie(){
    //récupérer la valeur du nombre saisis avec la fonction.value.
    nombresaisi = document.getElementById ('nombresaisi').value;
    //Notre condition : Si nombre >=0 <10 alors la page coute 0.10  et Homme alors, ou si femme et age >= 18 et si femme <= 35
 if(nombresaisi <= 10) 
 {
    prix = nombresaisi * 0.1;
    alert(prix);
}

  else if (nombresaisi <=30)
  {
    prix = nombresaisi * 0.09 + (nombresaisi - 10);
    alert(prix);  
  }

else
{
    prix = nombresaisi * 0.1 + 20 *0.09 + (nombresaisi - 30) * 0.08;
}
message.innerHTML = "le prix total est de" + prix +"euros";  
}
//Ajout d'un écouteur d'événement sur le bouton qui au click appelera la fonction verifierReprographie();
bouton.addEventListener ('click', verifierReprographie,false )

//0.10 de 0 à 10//
//0.09  >=11 <=30les vingt Ssuivante
//0.08 >31
//Écrivez un programme en JavaScript  qui demande à 
//l'utilisateur le nombre de photocopies qu'il souhaite effectuer 
//et qui affiche par la suite la facture correspondante
//genresaisi
//message.innerHTML = '<div class= "alert alert-danger" role="alert">Vous êtes imposable!</div>';