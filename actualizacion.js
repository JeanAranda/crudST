function validarFormulario(){
    var expediente = document.getElementById("expediente").value;
    var folio = document.getElementById("folio").value;
    var nombreEncargado = document.getElementById("nombreEncargado").value;
    var fecha = document.getElementById("fecha").value;
    var estados  = document.getElementById("estados").value;

    if(expediente == ""){
        alert("El expediente es requerido");
        return false;
    }
    if(folio == ""){
        alert("El folio es requerido");
        return false;
    }
    if(nombreEncargado == ""){
        alert("Los datos del encargado son requeridos");
        return false;
    }
    if(fecha == ""){
        alert("La fecha de actualizacion es requerido");
        return false;
    }
    if(estados == ""){
        alert("El estado es requerido");
        return false;
    }
    return true;
}

function mostrarDatos(){
    var listActualizado;
    if(localStorage.getItem("listActualizado") == null){
        listActualizado = [];
    }
    else{
        listActualizado = JSON.parse(localStorage.getItem("listActualizado"));
    }
    var html = "";

    listActualizado.forEach(function (element, actualizacion){
        html += "<tr>";
        html += "<td>" + element.expediente + "</td>";
        html += "<td>" + element.folio + "</td>";
        html += "<td>" + element.nombreEncargado + "</td>";
        html += "<td>" + element.fecha + "</td>";
        html += "<td>" + element.estados + "</td>";
        html += '<td><button onclick="deleteData('+actualizacion+')"class="btn btn-danger">Eliminar</button><button onclick="updateData('+actualizacion+')"class="btn btn-warning m-2">Editar</button>';
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = mostrarDatos();

function AddData(){
    //Si el formulario es valido
    if(validarFormulario() == true){
        var expediente = document.getElementById("expediente").value;
        var folio = document.getElementById("folio").value;
        var nombreEncargado = document.getElementById("nombreEncargado").value;
        var fecha = document.getElementById("fecha").value;
        var estados = document.getElementById("estados").value;
        
        var listActualizado;
        if (localStorage.getItem("listActualizado") == null){
            listActualizado = [];
        } else {
            listActualizado = JSON.parse(localStorage.getItem("listActualizado"));
        }
        listActualizado.push({
            expediente : expediente,
            folio : folio, 
            nombreEncargado : nombreEncargado,
            fecha : fecha,
            estados : estados,
        });

        localStorage.setItem("listActualizado", JSON.stringify(listActualizado));
        mostrarDatos();
        document.getElementById("expediente").value = "";
        document.getElementById("folio").value = "";
        document.getElementById("nombreEncargado").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("estados").value = "";
    }
}

function deleteData(actualizacion){
    var listActualizado;
    if(localStorage.getItem("listActualizado") == null){
        listActualizado = [];
    }
    else{
        listActualizado = JSON.parse(localStorage.getItem("listActualizado"));
    }

    listActualizado.splice(actualizacion, 1);
    localStorage.setItem("listActualizado", JSON.stringify(listActualizado));
    mostrarDatos();
}

function updateData(actualizacion) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var listActualizado;
    if(localStorage.getItem("listActualizado") == null){
        listActualizado = [];
    }
    else{
        listActualizado = JSON.parse(localStorage.getItem("listActualizado"));
    }

    document.getElementById("expediente").value = listActualizado[actualizacion].expediente;
    document.getElementById("folio").value = listActualizado[actualizacion].folio;
    document.getElementById("nombreEncargado").value = listActualizado[actualizacion].nombreEncargado;
    document.getElementById("fecha").value = listActualizado[actualizacion].fecha;
    document.getElementById("estados").value = listActualizado[actualizacion].estados;
    
    document.querySelector("#Update").onclick = function(){
        
        if (validarFormulario() == true){
            listActualizado[actualizacion].expediente = document.getElementById("expediente").value;
            listActualizado[actualizacion].folio = document.getElementById("folio").value;
            listActualizado[actualizacion].nombreEncargado = document.getElementById("nombreEncargado").value;
            listActualizado[actualizacion].fecha = document.getElementById("fecha").value;
            listActualizado[actualizacion].estados = document.getElementById("estados").value;
            
            localStorage.setItem("listActualizado", JSON.stringify(listActualizado));

            mostrarDatos();

            document.getElementById("expediente").value = "";
            document.getElementById("folio").value = "";
            document.getElementById("nombreEncargado").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("estados").value = "";
            
            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        
        }
    }
};
    if(localStorage.getItem("listActualizado") == null){
        listActualizado = [];
    }
    else{
        listActualizado = JSON.parse(localStorage.getItem("listActualizado"));
    }
    
    document.getElementById("expediente").value = listActualizado[actualizacion].expediente;
    document.getElementById("folio").value = listActualizado[actualizacion].folio;
    document.getElementById("nombreEncargado").value = listActualizado[actualizacion].nombreEncargado;
    document.getElementById("fecha").value = listActualizado[actualizacion].fecha;
    document.getElementById("estados").value = listActualizado[actualizacion].estados;
    
    document.querySelector("#Update").onclick = function(){
        
        if (validarFormulario() == true){
            listActualizado[actualizacion].expediente = document.getElementById("expediente").value;
            listActualizado[actualizacion].folio = document.getElementById("folio").value;
            listActualizado[actualizacion].nombreEncargado = document.getElementById("nombreEncargado").value;
            listActualizado[actualizacion].fecha = document.getElementById("fecha").value;
            listActualizado[actualizacion].estados = document.getElementById("estados").value;
            
            localStorage.setItem("listActualizado", JSON.stringify(listActualizado));

            mostrarDatos();

            document.getElementById("expediente").value = "";
            document.getElementById("folio").value = "";
            document.getElementById("nombreEncargado").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("estados").value = "";
            
            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        
        }
}


/*document.addEventListener("keyup", e=> {
    if (e.target.matches("#buscador")){
        document.querySelectorAll(selectors, ".articulo").forEach(elemento => {
            elemento.textContent.tolowerCase().includes(e.target.value.tolowerCase())
            ?elemento.classList.remove(tokens,"filtro")
            :elemento.classList.add(filtro)
        })
    }
})*/

function buscar() {
    // Obtener el valor actual del campo de búsqueda
    var valor = document.getElementById("buscador").value.toLowerCase();
  
    // Seleccionar la tabla
    var tabla = document.getElementById("crudTable");
  
    // Iterar a través de las filas de la tabla
    for (var i = 0; i < tabla.rows.length; i++) {
      // Obtener el contenido de las celdas relevantes para la búsqueda
      var expediente = tabla.rows[i].cells[0].textContent.toLowerCase();
      var folio = tabla.rows[i].cells[1].textContent.toLowerCase();
      var encargado = tabla.rows[i].cells[2].textContent.toLowerCase();
      var fecha = tabla.rows[i].cells[3].textContent.toLowerCase();
      var estado = tabla.rows[i].cells[4].textContent.toLowerCase();
  
      // Comprobar si la fila contiene el valor de búsqueda
      if (expediente.indexOf(valor) > -1 ||
          folio.indexOf(valor) > -1 ||
          encargado.indexOf(valor) > -1 ||
          fecha.indexOf(valor) > -1 ||
          estado.indexOf(valor) > -1) {
        // Mostrar la fila si contiene el valor de búsqueda
        tabla.rows[i].style.display = "";
      } else {
        // Ocultar la fila si no contiene el valor de búsqueda
        tabla.rows[i].style.display = "none";
      }
    }
  }
  