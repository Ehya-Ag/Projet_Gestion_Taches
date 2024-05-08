
function Ajouter() {

    let titre = document.getElementById("titre").value;
    let description = document.getElementById("description").value;
    let dateLimite = document.getElementById("datel").value;
    let avancement = document.getElementById("avance").value;
    let priorite = document.getElementById("priorite").value;

    let task = {
        titre: titre,
        description: description,
        dateLimite: dateLimite,
        avancement: avancement,
        priorite: priorite,
        terminee: false 
    };

  alert("Operation validé");
    let taskTable = document.getElementById("taskTable");
    let newRow = taskTable.insertRow(-1); 

    newRow.insertCell(0).textContent = task.titre;
    newRow.insertCell(1).textContent = task.description;
    newRow.insertCell(2).textContent = task.dateLimite;
    newRow.insertCell(3).textContent = task.avancement + "%";
    newRow.insertCell(4).textContent = task.priorite;
    

    let termineeCell = newRow.insertCell(5);
    let termineeCheckbox = document.createElement("input");
    termineeCheckbox.type = "checkbox";
    termineeCheckbox.onclick = function() {
        task.terminee = this.checked;
    };
    termineeCell.appendChild(termineeCheckbox);


    let optionsCell = newRow.insertCell(6);
    let detailsButton = document.createElement("button");
    detailsButton.textContent = "Détails";
    detailsButton.onclick = function() {
        showDetails(this);
    };
    optionsCell.appendChild(detailsButton);

    let modifierButton = document.createElement("button");
    modifierButton.textContent = "Modifier";
    modifierButton.onclick = function() {
        modifier(this);
    };
    optionsCell.appendChild(modifierButton);
//boutton supprimer
    // let supprimerButton = document.createElement("button");
    // supprimerButton.textContent = "Supprimer";
    // supprimerButton.onclick = function() {
    //     supprimer(this);
    // };
    // optionsCell.appendChild(supprimerButton);

//vider le form

 document.getElementById("titre").value ="";
 document.getElementById("description").value  ="";
 document.getElementById("datel").value  ="";
 document.getElementById("avance").value  ="";
 document.getElementById("priorite").value ="";




    document.getElementById("tacheForm").reset();
    alert("Operation validé");
}

function modifier(button) {
    let row = button.parentNode.parentNode;
    let titre = row.cells[0].textContent;
    let description = row.cells[1].textContent;
    let dateLimite = row.cells[2].textContent;
    let avancement = row.cells[3].textContent.replace("%", "");
    let priorite = row.cells[4].textContent;


    document.getElementById("titre").value = titre;
    document.getElementById("description").value = description;
    document.getElementById("datel").value = dateLimite;
    document.getElementById("avance").value = avancement;
    document.getElementById("priorite").value = priorite;

    //row.parentNode.removeChild(row);
}
//fonction suppressiongit log
// function supprimer(button) {
//     let row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }
function showDetails(button) {
    let row = button.parentNode.parentNode; 
    let titre = row.cells[0].textContent;
    let description = row.cells[1].textContent;
    let dateLimite = row.cells[2].textContent;
    let avancement = row.cells[3].textContent;
    let priorite = row.cells[4].textContent;
    let terminee = row.cells[5].getElementsByTagName('input')[0].checked; 

 
    let detailMessage = "Titre: " + titre + "\n" +
                        "Description: " + description + "\n" +
                        "Date Limite: " + dateLimite + "\n" +
                        "Avancement: " + avancement + "\n" +
                        "Priorité: " + priorite + "\n" +
                        "Terminée: " + (terminee ? "Oui" : "Non"); 
    alert(detailMessage);
}
//Calendrie

