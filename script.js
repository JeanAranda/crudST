// Esta funcion es para validar los datos que se ingresan al formulario
function validarFormulario(){
    var folio = document.getElementById("folio").value;
    var administrado = document.getElementById("administrado").value;
    var expediente = document.getElementById("expediente").value;
    var docNot = document.getElementById("docNot").value;
    var fecha  = document.getElementById("fecha").value;
    var comentario = document.getElementById("comentario").value;

    if(folio == ""){
        alert("El folio es requerido");
        return false;
    }
    if(administrado == ""){
        alert("Los datos del administrado son requeridos");
        return false;
    }
    if(expediente == ""){
        alert("El expediente es requerido");
        return false;
    }
    if(docNot == ""){
        alert("Los documentos son requeridos");
        return false;
    }
    if(fecha == ""){
        alert("Fecha es requerido");
        return false;
    }
    if(comentario == ""){
        alert("El comentario o quien recibe es requerido");
        return false;
    }
    return true;
}

// Esta funcion es para mostrar los datos del formulario
function mostrarDatos(){
    var listAdministrado;
    if(localStorage.getItem("listAdministrado") == null){
        listAdministrado = [];
    }
    else{
        listAdministrado = JSON.parse(localStorage.getItem("listAdministrado"));
    }
    var html = "";

    listAdministrado.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.folio + "</td>";
        html += "<td>" + element.administrado + "</td>";
        html += "<td>" + element.expediente + "</td>";
        html += "<td>" + element.docNot + "</td>";
        html += "<td>" + element.fecha + "</td>";
        html += "<td>" + element.comentario + "</td>";
        html += '<td><button onclick="deleteData('+index+')"class="btn btn-danger">Eliminar</button><button onclick="updateData('+index+')"class="btn btn-warning m-2">Editar</button>';
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Carga los datos al documento
document.onload = mostrarDatos();

//funcion para agregar datos
function AddData(){
    //Si el formulario es valido
    if(validarFormulario() == true){
        var folio = document.getElementById("folio").value;
        var administrado = document.getElementById("administrado").value;
        var expediente = document.getElementById("expediente").value;
        var docNot = document.getElementById("docNot").value;
        var fecha = document.getElementById("fecha").value;
        var comentario = document.getElementById("comentario").value;

        var listAdministrado;
        if (localStorage.getItem("listAdministrado") == null){
            listAdministrado = [];
        } else {
            listAdministrado = JSON.parse(localStorage.getItem("listAdministrado"));
        }
        listAdministrado.push({
            folio : folio, 
            administrado : administrado,
            expediente : expediente,
            docNot : docNot,
            fecha : fecha,
            comentario : comentario,
        });

        localStorage.setItem("listAdministrado", JSON.stringify(listAdministrado));
        mostrarDatos();
        document.getElementById("folio").value = "";
        document.getElementById("administrado").value = "";
        document.getElementById("expediente").value = "";
        document.getElementById("docNot").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("comentario").value = "";
    }
}

//Funcion para borrar los datos del formulario 
function deleteData(index){
    var listAdministrado;
    if(localStorage.getItem("listAdministrado") == null){
        listAdministrado = [];
    }
    else{
        listAdministrado = JSON.parse(localStorage.getItem("listAdministrado"));
    }

    listAdministrado.splice(index, 1);
    localStorage.setItem("listAdministrado", JSON.stringify(listAdministrado));
    mostrarDatos();
}

// funcion para editar el localstorage
function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var listAdministrado;
    if(localStorage.getItem("listAdministrado") == null){
        listAdministrado = [];
    }
    else{
        listAdministrado = JSON.parse(localStorage.getItem("listAdministrado"));
    }

    document.getElementById("folio").value = listAdministrado[index].folio;
    document.getElementById("administrado").value = listAdministrado[index].administrado;
    document.getElementById("expediente").value = listAdministrado[index].expediente;
    document.getElementById("docNot").value = listAdministrado[index].docNot;
    document.getElementById("fecha").value = listAdministrado[index].fecha;
    document.getElementById("comentario").value = listAdministrado[index].comentario;

    document.querySelector("#Update").onclick = function(){
        
        if (validarFormulario() == true){
            listAdministrado[index].folio = document.getElementById("folio").value;
            listAdministrado[index].administrado = document.getElementById("administrado").value;
            listAdministrado[index].expediente = document.getElementById("expediente").value;
            listAdministrado[index].docNot = document.getElementById("docNot").value;
            listAdministrado[index].fecha = document.getElementById("fecha").value;
            listAdministrado[index].comentario = document.getElementById("comentario").value;
            
            localStorage.setItem("listAdministrado", JSON.stringify(listAdministrado));

            mostrarDatos();

            document.getElementById("folio").value = "";
            document.getElementById("administrado").value = "";
            document.getElementById("expediente").value = "";
            document.getElementById("docNot").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("comentario").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        
        }
    }
}
