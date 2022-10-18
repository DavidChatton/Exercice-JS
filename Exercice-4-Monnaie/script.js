var totalsaisie;
var Monnaiesaisie;
var arendre;
var nbre10euro;
var nbre5euro;
var nbre1euro;

var Message10 = document.getElementById('IDMessage10');
var Message5 = document.getElementById('IDMessage5');
var Message1 = document.getElementById('IDMessage1');

Message10.innerHTML = "0";
Message5.innerHTML = "0";
Message1.innerHTML = "0";

function calculerMonnaie(){
    totalsaisie = document.getElementById('IDtotal').value;
    Monnaiesaisie = document.getElementById('IDmonnaie').value;

    arendre = Monnaiesaisie - totalsaisie;
    nbre10euro = 0;
    while(arendre >= 10){
        nbre10euro = nbre10euro + 1;
        arendre = arendre - 10;
    }
    nbre5euro = 0;
    while(arendre >= 5){
        nbre5euro = nbre5euro + 1;
        arendre = arendre -5;
    }
   
    IDMessage10.innerHTML = nbre10euro;
    IDMessage5.innerHTML = nbre5euro;
    IDMessage1.innerHTML = arendre;
}
document.getElementById('IDvaleur_button').addEventListener('click', calculerMonnaie, false);
