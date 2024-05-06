
// function Ajouter() {
//     // Récupérer les valeurs saisies
//     var titre = document.getElementById("titre").value;
//     var description = document.getElementById("description").value;
//     var dateLimite = document.getElementById("datel").value;
//     var avancement = document.getElementById("avance").value;
//     var priorite = document.getElementById("priorite").value;

//     // Créer un objet tâche
//     var task = {
//         titre: titre,
//         description: description,
//         dateLimite: dateLimite,
//         avancement: avancement,
//         priorite: priorite
//     };

//     // Ajouter la tâche à la liste des tâches
//     var taskList = document.getElementById("tache");
//     var taskItem = document.createElement("div");
//     taskItem.innerHTML = 
//     "<div class='affiche'>" +
//     " <table><h3>" + task.titre + "</h3>" +
    
//                         "<th><strong>Description:</strong> </th>" +
//                         "<th><strong>Date limite:</strong> </th>"+
//                         "<th><strong>Avancement:</strong> </th> "  +
//                         "<th><strong>Priorité:</strong> </th> <tr>"
//                          + "<td>" + task.description + "</td>"
                        
//                          + 
//                          "<td>" +task.dateLimite + "</td>"
                        
                        
//                          + "<td>" +task.avancement + "%</td>"
                       
//                          + "<td>" +task.priorite + "</td></tr>"
//                          +
//                          "<div class='btn'>"+
//                         '<button onclick="editTask(this)">Modifier</button>';+
//                         '<button onclick="editTask(this)">Details</button>';+
//                         '<button onclick="editTask(this)">Modifier</button>';+
//                         "</div>"
//                         "</table>" + "</div>"+
//                         taskList.appendChild(taskItem);

//     // Réinitialiser le formulaire
//     document.getElementById("tache").reset();
// }

// function modifier(button) {
//     var taskDiv = button.parentNode;
//     var titre = taskDiv.querySelector("h3").innerText;
//     var description = taskDiv.querySelector("p:nth-of-type(1)").innerText.replace("Description: ", "");
//     var dateLimite = taskDiv.querySelector("p:nth-of-type(2)").innerText.replace("Date limite: ", "");
//     var avancement = taskDiv.querySelector("p:nth-of-type(3)").innerText.replace("Avancement: ", "").replace("%", "");
//     var priorite = taskDiv.querySelector("p:nth-of-type(4)").innerText.replace("Priorité: ", "");

//     // Remplir le formulaire avec les valeurs de la tâche sélectionnée
//     document.getElementById("titre").value = titre;
//     document.getElementById("description").value = description;
//     document.getElementById("datel").value = dateLimite;
//     document.getElementById("avance").value = avancement;
//     document.getElementById("priorite").value = priorite;

//     // Supprimer la tâche de la liste
//     taskDiv.parentNode.removeChild(taskDiv);
// }
// //
//Option2
// function Ajouter() {
//     // Récupérer les valeurs saisies
//     var titre = document.getElementById("titre").value;
//     var description = document.getElementById("description").value;
//     var dateLimite = document.getElementById("datel").value;
//     var avancement = document.getElementById("avance").value;
//     var priorite = document.getElementById("priorite").value;

//     // Créer un objet tâche
//     var task = {
//         titre: titre,
//         description: description,
//         dateLimite: dateLimite,
//         avancement: avancement,
//         priorite: priorite
//     };

//     // Ajouter la tâche à la liste des tâches
//     var taskList = document.getElementById("taskList"); // Changer l'ID en "taskList" pour correspondre au HTML
//     var taskItem = document.createElement("div");
//     taskItem.innerHTML = 
//     "<div class='affiche'>" +
//     " <table><h3>" + task.titre + "</h3>" +
    
//                         "<th><strong>Description:</strong> </th>" +
//                         "<th><strong>Date limite:</strong> </th>"+
//                         "<th><strong>Avancement:</strong> </th> "  +
//                         "<th><strong>Priorité:</strong> </th> <tr>"
//                          + "<td>" + task.description + "</td>"
                        
//                          + 
//                          "<td>" +task.dateLimite + "</td>"
                        
                        
//                          + "<td>" +task.avancement + "%</td>"
                       
//                          + "<td>" +task.priorite + "</td></tr>"
//                          +
//                          "<div class='btn'>"+
//                         '<button onclick="editTask(this)">Modifier</button>' + // Retiré le point-virgule ici
//                         '<button onclick="editTask(this)">Details</button>' +
//                         '<button onclick="editTask(this)">Modifier</button>' +
//                         "</div>" +
//                         "</table></div>"; // Ajouté une virgule ici
//     taskList.appendChild(taskItem);

//     // Réinitialiser le formulaire
//     document.getElementById("tacheForm").reset(); // Changer l'ID du formulaire en "tacheForm" pour correspondre au HTML
// }

// function modifier(button) {
//     var taskDiv = button.parentNode;
//     var titre = taskDiv.querySelector("h3").innerText;
//     var description = taskDiv.querySelector("th:nth-of-type(1)").innerText.replace("Description: ", ""); // Modifié le sélecteur ici
//     var dateLimite = taskDiv.querySelector("th:nth-of-type(2)").innerText.replace("Date limite: ", ""); // Modifié le sélecteur ici
//     var avancement = taskDiv.querySelector("th:nth-of-type(3)").innerText.replace("Avancement: ", "").replace("%", ""); // Modifié le sélecteur ici
//     var priorite = taskDiv.querySelector("th:nth-of-type(4)").innerText.replace("Priorité: ", ""); // Modifié le sélecteur ici

//     // Remplir le formulaire avec les valeurs de la tâche sélectionnée
//     document.getElementById("titre").value = titre;
//     document.getElementById("description").value = description;
//     document.getElementById("datel").value = dateLimite;
//     document.getElementById("avance").value = avancement;
//     document.getElementById("priorite").value = priorite;

//     // Supprimer la tâche de la liste
//     taskDiv.parentNode.removeChild(taskDiv);
// }
//option 3
function Ajouter() {
    // Récupérer les valeurs saisies
    var titre = document.getElementById("titre").value;
    var description = document.getElementById("description").value;
    var dateLimite = document.getElementById("datel").value;
    var avancement = document.getElementById("avance").value;
    var priorite = document.getElementById("priorite").value;

    // Créer un objet tâche
    var task = {
        titre: titre,
        description: description,
        dateLimite: dateLimite,
        avancement: avancement,
        priorite: priorite,
        terminee: false // Par défaut, la tâche n'est pas terminée
    };

    // Ajouter la tâche à la liste des tâches
    var taskTable = document.getElementById("taskTable");
    var newRow = taskTable.insertRow(-1); // Insérer une nouvelle ligne à la fin du tableau

    // Remplir les cellules de la nouvelle ligne avec les détails de la tâche
    newRow.insertCell(0).textContent = task.titre;
    newRow.insertCell(1).textContent = task.description;
    newRow.insertCell(2).textContent = task.dateLimite;
    newRow.insertCell(3).textContent = task.avancement + "%";
    newRow.insertCell(4).textContent = task.priorite;
    
    // Ajouter une colonne pour indiquer si la tâche est terminée
    var termineeCell = newRow.insertCell(5);
    var termineeCheckbox = document.createElement("input");
    termineeCheckbox.type = "checkbox";
    termineeCheckbox.onclick = function() {
        task.terminee = this.checked;
    };
    termineeCell.appendChild(termineeCheckbox);

    // Ajouter une colonne pour les options
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

    // Réinitialiser le formulaire
    // document.getElementById("tacheForm").reset();
    var titre = document.getElementById("titre").value ="";
    var description = document.getElementById("description").value  ="";
    var dateLimite = document.getElementById("datel").value  ="";
    var avancement = document.getElementById("avance").value  ="";
    var priorite = document.getElementById("priorite").value ="";
}

function modifier(button) {
    var row = button.parentNode.parentNode;
    var titre = row.cells[0].textContent;
    var description = row.cells[1].textContent;
    var dateLimite = row.cells[2].textContent;
    var avancement = row.cells[3].textContent.replace("%", "");
    var priorite = row.cells[4].textContent;

    // Remplir le formulaire avec les valeurs de la tâche sélectionnée
    document.getElementById("titre").value = titre;
    document.getElementById("description").value = description;
    document.getElementById("datel").value = dateLimite;
    document.getElementById("avance").value = avancement;
    document.getElementById("priorite").value = priorite;

    // Supprimer la tâche de la liste
    row.parentNode.removeChild(row);
}

function supprimer(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


var small_menu = document.querySelector('.toggle_menu')
var menu = document.querySelector('.menu')

small_menu.onclick = function(){
    small_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
 }