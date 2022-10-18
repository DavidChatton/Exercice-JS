let ageConducteur;
let permis;
let fidelite;
let accident;
let message = document.getElementById('message');
let button = document.getElementById('button');
let compteur = 0;


function afficherResultat(){
    let accident = document.getElementById('accident').value;
    if(accident >= 3)
    {
        message.innerHTML = 'Vous ne pouvez pas être assuré';
    } 
    else
    {
        
        let ageConducteur = document.getElementById('ageConducteur').value;
        let permis = document.getElementById('permis').value;
        let fidelite = document.getElementById('fidelite').value;

        if(ageConducteur > 25){
            compteur = compteur + 1; 
        }
        if(permis > 2){
            compteur = compteur + 1;
        }
        if(fidelite > 1){
            compteur = compteur + 1;
        }
        compteur = compteur - accident;
        console.log(compteur);
        switch(compteur){
            case 3: message.innerHTML = '<div class="alert alert-primary" role="alert">Bleu</div>';
            break;
            case 2: message.innerHTML = '<div class="alert alert-success" role="alert">Vert</div>';
            break;
            case 1: message.innerHTML = '<div class="alert alert-warning" role="alert">Orange</div>';
            break;
            case 0: message.innerHTML = '<div class="alert alert-danger" role="alert">Rouge</div>';
            break;
            case -1: message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>';
            break;
            default:
        }
    }    
}
button.addEventListener("click", afficherResultat, false);