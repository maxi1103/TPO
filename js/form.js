let elementos= document.querySelectorAll("form > div > *");

let btn= document.querySelector("input[type='submit']");

let validar = (event)=>{
    event.preventDefault();
for (let i=0 ; i<elementos.length;i++){
    if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].id == "textarea"){
        if (elementos[i].value == 0) {
            elementos[i].className= "";
            elementos[i+1].classList.remove("focus");
            elementos[i].classList.add("invalido");
            elementos[i+1].classList.add("invalido-text");
            //elementos[i].className = elementos[i].className + " invalid";
        }
        else{
            elementos[i].className= "";
            elementos[i].classList.add("valido");
        }

    }
}
}

//por alguna razon se ejecuta sin siquiera hacer el evento focus
let focus = (n) => {
    n.parentElement.children[1].className = "label focus";
}
//lo mismo con este xD
let blur = (n) =>{
    if (n.value == 0) {
		n.parentElement.children[1].className = "label";
		n.parentElement.children[0].className = n.parentElement.children[0].className + " invalido";
	}
}
// focus al enfocar el imput
// blur es al sacar el foco del input

elementos.forEach(n => {
    if (n.type == "text" || n.type == "email" || n.id == "textarea" ){
        n.addEventListener("focus",()=>{
            n.parentElement.children[1].className = "label focus"
        });
        n.addEventListener("blur",()=>{
            if(n.value==0){
                n.parentElement.children[1].className = "label invalido-text";
                n.parentElement.children[0].className = "invalido";
            }
            else{
                n.parentElement.children[1].className = "label focus";
                n.parentElement.children[0].className = "text"; 
            }
        });
    }
})
btn.addEventListener("click", validar);

