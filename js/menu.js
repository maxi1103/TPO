//Consume una api fake almacena en json placeholer
const URI = "https://my-json-server.typicode.com/maxi1103/TPO/posts";
let input = document.getElementById("input");
class food {
    constructor (title,description,image,price){
        (this.title = title), (this.description=description),(this.image=image),(this.price=price);
    }
    getDivCard(idToInsert){
        let parent= document.getElementById(idToInsert);
        let div= document.createElement("div");
        div.className = "column column--50--25"
        div.innerHTML = `
        <img class="offer__img" src="${this.image}"></img>
        <h4 class="offer__title">${this.title}</h4>
        <p>${this.description}</p>
        <p class="offer__price">${this.price}</p>
        `;
        parent.appendChild(div);
    }
}
let buscar = ()=>{
    let inputV= input.value.toLowerCase();
    if(inputV==''){
        input.classList.add("invalido-input");
        return '';
    }else{
    let filtro= dishesObjeto.filter(word => word.title.toLowerCase().includes(inputV));
    return filtro;
    }
}
let dishesObjeto;
let cleaner= (parent)=>{
    let children = document.querySelectorAll(`#${parent} > *`);
    children.forEach((child)=>child.remove());
}
let printData= (data,parent)=>{
    data.forEach((dish)=>dish.getDivCard(parent));
}
let inyectar = ()=>{
    let data=buscar();
    if(data==''|| data.lenght==0){
        alert("Input Vacio o No se encontro lo espeicificado");
    }else{
        cleaner("insert");
        printData(data,"insert");
    }
    
}

 fetch(URI)
      .then((datos) => datos.json())
      .then((datos) => {
        dishesObjeto = datos.map(dish => new food(dish.title,dish.description,dish.image,dish.price));
        dishesObjeto.forEach((food)=>food.getDivCard("insert"));
    });

let btn = document.getElementById("btn");
let btnmostrar=document.getElementById("btnmostrar");
btn.addEventListener("click",inyectar);
btnmostrar.addEventListener("click",()=>{
    cleaner("insert");
    dishesObjeto.forEach((food)=>food.getDivCard("insert"));
});





