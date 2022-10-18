let emailSaisi;
let emailSaisiCoupe;
let positionArobase;
let message = document.getElementById('IDmessage').value;

function verifierProposition(){

    emailSaisi = document.getElementById('IDemail').value;

    if(emailSaisi.includes('@') && emailSaisi.includes('.')){
        positionArobase = emailSaisi.indexOf('@');
        emailSaisiCoupe = emailSaisi.substring(positionArobase);
        if(emailSaisiCoupe.includes('.com') || emailSaisiCoupe.includes('.fr') || emailSaisiCoupe.includes('.net')) {
            IDmessage.innerHTML = '<span class ="text-success"> Adresse email valide ! <span>';

        }else{
            IDmessage.innerHTML = '<span class = "text-danger"> Adresse email invalide ! <span>';
        }

    }else{
        IDmessage.innerHTML = '<span class ="text-danger"> Adresse email invalide ! <span>';
    }
}
document.getElementById('IDemail').addEventListener('keydown', verifierProposition, false);


//function validateEmail(email) { var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(email); } function validate() { var $result = $("#result"); var email = $("#email").val(); $result.text(""); if (validateEmail(email)) { $result.text(email + " is valid :)"); $result.css("color", "green"); } else { $result.text(email + " is not valid :("); $result.css("color", "red"); } return false; } $("#validate").bind("click", validate);