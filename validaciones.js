function calculonotas() {
  var n1 = parseFloat(document.frmNotas.txtNota1.value);
  var n2 = parseFloat(document.frmNotas.txtNota2.value);
  var n3 = parseFloat(document.frmNotas.txtNota3.value);
  var sumanotas = n1 + n2 + n3;
  var promantes = sumanotas / 3;
  var examen = parseFloat(document.frmNotas.txtExamen.value);
  var promfinal = 0.6 * promantes + 0.4 * examen;

  //Promedio de notas antes del examen
  if (sumanotas >= 1.0) {
    document.getElementById("msjPromedioAE").innerHTML = parseInt(promantes);
  } else {
    document.getElementById("msjPromedioAE").innerHTML = alert(
      "Por favor, ingrese un número"
    );
    document.getElementById("msjPromedioAE").innerHTML =
      "Faltan campos por llenar";
  }

  //Variable para realizar examen
  if (promantes > 5.5) {
    document.getElementById("msjRealizaExamen").innerHTML =
      "No (alumno eximido)";
  } else {
    document.getElementById("msjRealizaExamen").innerHTML = "Sí";
  }

  //Variable de Examen
  if (promantes > 5.5) {
    document.frmNotas.txtExamen.value = promantes;
  } else {
    document.frmNotas.txtExamen.value = "";
  }

  //Promedio Nota final
  if (promantes > 5.5) {
    document.getElementById("msjPromedioFinal").innerHTML = parseInt(promantes);
  }
}

function valexamen() {
  var n1 = parseFloat(document.frmNotas.txtNota1.value);
  var n2 = parseFloat(document.frmNotas.txtNota2.value);
  var n3 = parseFloat(document.frmNotas.txtNota3.value);
  var sumanotas = n1 + n2 + n3;
  var promantes = sumanotas / 3;
  var examen = parseFloat(document.frmNotas.txtExamen.value);
  var promfinal = 0.6 * promantes + 0.4 * examen;

  if (promantes <= 5.5) {
    if (examen > 0) {
      document.getElementById("msjPromedioFinal").innerHTML =
        0.6 * promantes + 0.4 * examen;
    }
  }
}

function abrirCertificado() {
  var nombre = document.frmNotas.txtAlumno.value;
  var n1 = parseFloat(document.frmNotas.txtNota1.value);
  var n2 = parseFloat(document.frmNotas.txtNota2.value);
  var n3 = parseFloat(document.frmNotas.txtNota3.value);
  var sumanotas = n1 + n2 + n3;
  var promantes = sumanotas / 3;
  var examen = parseFloat(document.frmNotas.txtExamen.value);
  var promfinal = 0.6 * promantes + 0.4 * examen;

  if (examen > 0) {
    if (promfinal >= 4.0) {
      alert("El Alumno " + nombre + " aprueba");
    } else {
      alert("El Alumno " + nombre + " reprueba");
    }
  } else {
    alert("Ingrese la nota del examen");
  }
  if (promfinal >= 6.0) {
    alert("¡Felicidades " + nombre + ", has sacado una nota sobresaliente!");
  }
}

function limpiar() {
  alert("Se han limpiado todos los campos");
  document.frmNotas.txtAlumno.value = "";
  document.frmNotas.txtNota1.value = "";
  document.frmNotas.txtNota2.value = "";
  document.frmNotas.txtNota3.value = "";
  document.frmNotas.txtExamen.value = "";
  document.getElementById("msjPromedioAE").innerHTML = "";
  document.getElementById("msjRealizaExamen").innerHTML = "";
  document.getElementById("msjPromedioFinal").innerHTML = "";
}

function ayuda() {
  var n1 = parseInt(document.frmNotas.txtNota1.value);
  var n2 = parseInt(document.frmNotas.txtNota2.value);
  var n3 = parseInt(document.frmNotas.txtNota3.value);
  var sumanotas = n1 + n2 + n3;
  var promantes = sumanotas / 3;
  var examen = parseFloat(document.frmNotas.txtExamen.value);
  var promfinal = 0.6 * promantes + 0.4 * examen;
  alert("Ayuda en tu nota");
  n1 = n1 * 1.1;
  n2 = n2 * 1.1;
  n3 = n3 * 1.1;

  document.frmNotas.txtNota1.value = parseInt(n1);
  document.frmNotas.txtNota2.value = parseInt(n2);
  document.frmNotas.txtNota3.value = parseInt(n3);
  document.getElementById("msjPromedioFinal").innerHTML = parseInt(0.6 * promantes) * 1.1 + 0.4 * examen;
  document.getElementById("msjPromedioAE").innerHTML = parseInt (promantes * 1.1);
}
