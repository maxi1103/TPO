const URI = "https://jsonplaceholder.typicode.com/users";
class persona {
    constructor (name,adress,phone){
        (this.name = name), (this.adress=adress),(this.phone=phone);
    }
    getDivCard(idToInsert){
        let parent= document.getElementById(idToInsert);
        let div= document.createElement("div");
        div.className = "column column--50--25"
        div.innerHTML = `
        <h4>${this.name}</h4>
        <label>${this.adress}</label>
        <p>${this.phone}</p>
        `;
        parent.appendChild(div);
    }
}
let personasObjeto;
fetch(URI)
    .then((datos) => datos.json())
    .then((datos) => {
        personasObjeto = datos.map(person => new persona(person.name,person.address.city,person.phone));
        personasObjeto.forEach((person)=> person.getDivCard("insert"));
        console.log(personasObjeto);
    });






