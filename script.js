
function addTask() {
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
    taskItem.innerHTML = "<h3>" + task.titre + "</h3>" +
                        "<p><strong>Description:</strong> " + task.description + "</p>" +
                        "<p><strong>Date limite:</strong> " + task.dateLimite + "</p>" +
                        "<p><strong>Avancement:</strong> " + task.avancement + "%</p>" +
                        "<p><strong>Priorité:</strong> " + task.priorite + "</p>" +
                        '<button onclick="editTask(this)">Modifier</button>';
    taskList.appendChild(taskItem);

    // Réinitialiser le formulaire
    document.getElementById("taskForm").reset();
}

function editTask(button) {
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