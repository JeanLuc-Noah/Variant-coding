let inputPassword = document.getElementById("inputPassword")
let _oei = document.querySelector(".icon-eye");

inputPassword.addEventListener("input",function(){ 
    //Si le champs contient quelques
    if(this.value.length > 0){

        //on ajout la classe visible a l'icon
        _oei.classList.add('visible')
    }
    else{
        _oei.classList.remove("visible");
    }
})

//Ecoute l'evenement clique
_oei.addEventListener("click", function (){

    //Si l'attribut de l'input est egale password
    //On le change text
    if(inputPassword.getAttribute("type") == "password"){

        inputPassword.setAttribute("type", "text")
        _oei.innerHTML = '<i class="far fa-eye-slash"></i>';
    }
    //Sinon le change en password
    else{
        inputPassword.setAttribute("type", "password")
        _oei.innerHTML = '<i class="far fa-eye"></i>';
    }
})