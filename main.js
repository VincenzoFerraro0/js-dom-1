/*
Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno di del metodo string.includes() :occhiolino:
Buon Lavoro e buon divertimento! :sorridere:

        MINI TASK
        - Selezionare il contenitore: Recupera un elemento <div> dalla pagina e aggiungi una classe per lo stile.
        - Creare la lampadina: Crea un elemento <img> e aggiungilo al contenitore con l'immagine di una lampadina spenta.
        - Creare il bottone: Crea un bottone con il testo "accendi" e aggiungilo al contenitore.
        - Implementare la funzione della lampadina: Aggiungi un evento onclick al bottone per alternare tra lampadina accesa e spenta.
        - Cambiare stile dinamicamente: Modifica il colore di sfondo del contenitore in base allo stato della lampadina.

*/
const contenitore = document.querySelector('div'); 
contenitore.classList.add('stileContenitore') 

const lampadina = document.createElement('img');
contenitore.appendChild(lampadina)
lampadina.setAttribute('src', './img/white_lamp.png');


const bottone = document.createElement('button');
contenitore.appendChild(bottone)
bottone.textContent = 'accendi'
bottone.classList.add('btn')


bottone.onclick = function (){
    if(lampadina.src.includes('white_lamp.png')) {
        lampadina.src = './img/yellow_lamp.png';
        bottone.textContent = 'spegni'
        contenitore.style.backgroundColor = 'black'

    }else {
        lampadina.src = './img/white_lamp.png';
        bottone.textContent = 'accendi'
        contenitore.style.backgroundColor = 'white'
    }

}










