let inputPassword = document.getElementById("inputPassword")
let _oei = document.querySelector(".icon-eye");

inputPassword.addEventListener("input",function(){
    
    //Si le champs contient quelques
    if(this.value.length > 0){
        //on ajout la classe visible a l'icon
        _oei.classList.add('visible')

        //Ecoute l'evenement clique
        _oei.addEventListener("click", ()=>{

            //Si le type du champ est egale password
            //On change en text
            if(this.getAttribute("type") == "password"){
                this.setAttribute("type", "text") 
                _oei.innerHTML = '<i class="far fa-eye-slash"></i>';
            }
            //Sinon on change text en password
            else{
                this.setAttribute("type", "password") 
                _oei.innerHTML = '<i class="far fa-eye"></i>';
            }
        })
    }
    else{
        _oei.classList.remove("visible");
    }
})