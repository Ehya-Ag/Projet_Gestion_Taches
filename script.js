
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
        priorite: priorite
    };

    // Ajouter la tâche à la liste des tâches
    var taskList = document.getElementById("tache");
    var taskItem = document.createElement("div");
    taskItem.innerHTML = 
    
    "<table><h3>" + task.titre + "</h3>" +
    
                        "<th><strong>Description:</strong> </th>" +
                        "<th><strong>Date limite:</strong> </th>"+
                        "<th><strong>Avancement:</strong> </th> "  +
                        "<th><strong>Priorité:</strong> </th> <tr>"
                         + "<td>" + task.description + "</td>"
                        
                         + 
                         "<td>" +task.dateLimite + "</td>"
                        
                        
                         + "<td>" +task.avancement + "%</td>"
                       
                         + "<td>" +task.priorite + "</td></tr>"
                         +
                        '<button onclick="editTask(this)">Modifier</button>';
                        "</table>" +
                        taskList.appendChild(taskItem);

    // Réinitialiser le formulaire
    document.getElementById("tache").reset();
}

function modifier(button) {
    var taskDiv = button.parentNode;
    var titre = taskDiv.querySelector("h3").innerText;
    var description = taskDiv.querySelector("p:nth-of-type(1)").innerText.replace("Description: ", "");
    var dateLimite = taskDiv.querySelector("p:nth-of-type(2)").innerText.replace("Date limite: ", "");
    var avancement = taskDiv.querySelector("p:nth-of-type(3)").innerText.replace("Avancement: ", "").replace("%", "");
    var priorite = taskDiv.querySelector("p:nth-of-type(4)").innerText.replace("Priorité: ", "");

    // Remplir le formulaire avec les valeurs de la tâche sélectionnée
    document.getElementById("titre").value = titre;
    document.getElementById("description").value = description;
    document.getElementById("datel").value = dateLimite;
    document.getElementById("avance").value = avancement;
    document.getElementById("priorite").value = priorite;

    // Supprimer la tâche de la liste
    taskDiv.parentNode.removeChild(taskDiv);
}