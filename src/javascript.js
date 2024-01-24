var tareas = [];

function agregarTarea() {
    var nombreTarea = document.getElementById("nombreTarea").value;
    var fechaEntrega = document.getElementById("fechaEntrega").value;

    if (nombreTarea && fechaEntrega) {
        var nuevaTarea = {
            nombre: nombreTarea,
            fechaEntrega: fechaEntrega,
            completada: false
        };

        tareas.push(nuevaTarea);

        actualizarTablaTareas();
        limpiarCampos();
    }
}

function actualizarTablaTareas() {
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    tareas.forEach(function (tarea, index) {
        var row = tabla.insertRow();

        var cellNombre = row.insertCell(0);
        var cellFechaEntrega = row.insertCell(1);
        var cellCompletada = row.insertCell(2);
        var cellAcciones = row.insertCell(3);

        cellNombre.textContent = tarea.nombre;
        cellFechaEntrega.textContent = tarea.fechaEntrega;

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;
        checkbox.addEventListener("change", function () {
            tareas[index].completada = this.checked;
        });

        cellCompletada.appendChild(checkbox);

        var eliminarButton = document.createElement("button");
        eliminarButton.textContent = "Eliminar";
        eliminarButton.addEventListener("click", function () {
            eliminarTarea(index);
        });

        cellAcciones.appendChild(eliminarButton);

        row.id = "row-" + index;
    });
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarTablaTareas();
}

function limpiarCampos() {
    document.getElementById("nombreTarea").value = "";
    document.getElementById("fechaEntrega").value = "";
}

actualizarTablaTareas();
