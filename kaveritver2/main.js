let liElements = document.getElementsByClassName('item-list');

for (let i = 0; i < liElements.length; i++) {

    liElements[i].style.cssText = "padding: 5px;"
}
let lista = [];
let lista2 = [];
let check = false;
let check2 = false;
let num3 = 0;
let num = 0;
let lomake = document.forms["formNewItem"];
let lomake2 = document.getElementById("poista");
let lomake3 = document.getElementById("jarjesta");
lomake.addEventListener("submit", listaanLisays);
lomake.addEventListener("submit", uusiListaElementti);
lomake2.addEventListener("click", listastaPoisto);
lomake2.addEventListener("click", uusiListaElementti);
lomake3.addEventListener("click", listanJarjestys);
lomake3.addEventListener("click", uusiListaElementti);

function listanJarjestys(event) {

    event.preventDefault();
    lista = lista.sort();
    check2 = true;
    check = true;
}

function listaanLisays(event) {

    event.preventDefault();
    if (lista2.length > 9) {
        alert("Maksimimäärä kavereita");
        check = false;
    }
    let elementinNimi = document.querySelector("#main input[type=text]").value;
    if (elementinNimi.length < 1) {
        alert("Pitää antaa nimi");
    }
    if (lista.length < 10) {
        if (elementinNimi.length > 1) {
            lista.push(elementinNimi);
            console.log(elementinNimi);
            check = true;
            document.querySelector("#main input[type=text]").value = "";
        }
    }
}

function listastaPoisto(event) {

    event.preventDefault();
    let poistettavanNimi = document.querySelector("#main input[type=text]").value;
    if (poistettavanNimi.length < 1) {
        alert("Pitää antaa nimi");
    }
    let index = lista.indexOf(poistettavanNimi);
    if (index !== -1){
        lista2.splice(index, 1);
        lista.splice(index, 1);
        document.querySelector("#main input[type=text]").value = "";
        check2 = true;
    }
    else{
        alert("Nimi ei listassa");
    }
}

function uusiListaElementti(event) {

    event.preventDefault();

    if (check2) {
        lista2 = [];
        num = 0;
        for(c in lista){
            let item = lista[num];
            formattedItem = `${num + 1}: ${item}`;
            formattedItem.className="item-list";
            lista2.push(formattedItem);
            num++
            }

        console.log(num);
        console.log(lista2);
        console.log(lista);
        check2 = false;
        check = true;
    }

    if (check) {

        itemlist.innerHTML = '';
        let item = lista[num];
        if(item != undefined){
            formattedItem = `${num + 1}: ${item}`;
            formattedItem.className="item-list";
            lista2.push(formattedItem);

            itemlist.innerHTML = '';
            num++;
        }

    for (let i = 0; i < lista2.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = lista2[i];
        listItem.className = "list-item";
        itemlist.appendChild(listItem);
    console.log(lista2);
    console.log(lista);
        }
    }
}
