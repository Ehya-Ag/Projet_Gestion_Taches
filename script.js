
function Ajouter() {

    var titre = document.getElementById("titre").value;
    var description = document.getElementById("description").value;
    var dateLimite = document.getElementById("datel").value;
    var avancement = document.getElementById("avance").value;
    var priorite = document.getElementById("priorite").value;

    var task = {
        titre: titre,
        description: description,
        dateLimite: dateLimite,
        avancement: avancement,
        priorite: priorite,
        terminee: false 
    };

  
    var taskTable = document.getElementById("taskTable");
    var newRow = taskTable.insertRow(-1); 

    newRow.insertCell(0).textContent = task.titre;
    newRow.insertCell(1).textContent = task.description;
    newRow.insertCell(2).textContent = task.dateLimite;
    newRow.insertCell(3).textContent = task.avancement + "%";
    newRow.insertCell(4).textContent = task.priorite;
    

    var termineeCell = newRow.insertCell(5);
    var termineeCheckbox = document.createElement("input");
    termineeCheckbox.type = "checkbox";
    termineeCheckbox.onclick = function() {
        task.terminee = this.checked;
    };
    termineeCell.appendChild(termineeCheckbox);


    var optionsCell = newRow.insertCell(6);
    var detailsButton = document.createElement("button");
    detailsButton.textContent = "Détails";
    detailsButton.onclick = function() {
        showDetails(this);
    };
    optionsCell.appendChild(detailsButton);

    var modifierButton = document.createElement("button");
    modifierButton.textContent = "Modifier";
    modifierButton.onclick = function() {
        modifier(this);
    };
    optionsCell.appendChild(modifierButton);

    var supprimerButton = document.createElement("button");
    supprimerButton.textContent = "Supprimer";
    supprimerButton.onclick = function() {
        supprimer(this);
    };
    optionsCell.appendChild(supprimerButton);

    document.getElementById("tacheForm").reset();
}

function modifier(button) {
    var row = button.parentNode.parentNode;
    var titre = row.cells[0].textContent;
    var description = row.cells[1].textContent;
    var dateLimite = row.cells[2].textContent;
    var avancement = row.cells[3].textContent.replace("%", "");
    var priorite = row.cells[4].textContent;


    document.getElementById("titre").value = titre;
    document.getElementById("description").value = description;
    document.getElementById("datel").value = dateLimite;
    document.getElementById("avance").value = avancement;
    document.getElementById("priorite").value = priorite;

    row.parentNode.removeChild(row);
}

function supprimer(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function showDetails(button) {
    var row = button.parentNode.parentNode; 
    var titre = row.cells[0].textContent;
    var description = row.cells[1].textContent;
    var dateLimite = row.cells[2].textContent;
    var avancement = row.cells[3].textContent;
    var priorite = row.cells[4].textContent;
    var terminee = row.cells[5].getElementsByTagName('input')[0].checked; 

 
    var detailMessage = "Titre: " + titre + "\n" +
                        "Description: " + description + "\n" +
                        "Date Limite: " + dateLimite + "\n" +
                        "Avancement: " + avancement + "\n" +
                        "Priorité: " + priorite + "\n" +
                        "Terminée: " + (terminee ? "Oui" : "Non"); 
    alert(detailMessage);
}
//Calendrie

