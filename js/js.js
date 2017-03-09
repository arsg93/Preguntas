var formElement = null;
var respuestaRadio = null;
var respuestaRadio2 = null;
var respuestaText1 = null;
var respuestaText2 = null;
var respuestasCheckbox1 = [];
var respuestasCheckbox2 = [];
var respuestaSelect = null;
var respuestaSelect2 = null;
var respuestasMultiple1 = [];
var respuestasMultiple2 = [];
var nota = 0;

var era;
var previo = null;

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function () {

  //CORREGIR al apretar el botón
  formElement = document.getElementById('myform');



  formElement.onsubmit = function () {
    if (confirm("¿Estas seguro?")) {
      inicializar();
      if (comprobar()) {
        corregirRadio();
        corregirRadio2();
        corregirText1();
        corregirText2();
        corregirCheckBox();
        corregirCheckBox2();
        corregirSelect1();
        corregirSelect2();
        corregirMultiple1();
        corregirMultiple2();
        presentarNota();
      }
    }
    return false;
  }

  //LEER XML de xml/preguntas.xml
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      gestionarXml(this);
    }
  };
  xhttp.open("GET", "../xml/preguntas.xml", true);
  xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml) {
  var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc


  //RADIO
  //Recuperamos el título y las opciones, guardamos las respuestas correctas
  //RADIO 1
  var tituloRadio = xmlDoc.getElementsByTagName("title")[0].innerHTML;
  var opcionesRadio = [];
  var nopt = xmlDoc.getElementById("jklm_001").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) {
    opcionesRadio[i] = xmlDoc.getElementById("jklm_001").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosRadioHtml(tituloRadio, opcionesRadio);
  respuestaRadio = xmlDoc.getElementsByTagName("answer")[0].innerHTML;


  //RADIO 2
  var tituloRadio2 = xmlDoc.getElementsByTagName("title")[1].innerHTML;
  var opcionesRadio2 = [];
  var nopt2 = xmlDoc.getElementById("jklm_002").getElementsByTagName('option').length;
  for (i = 0; i < nopt2; i++) {
    opcionesRadio2[i] = xmlDoc.getElementById("jklm_002").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosRadio2Html(tituloRadio2, opcionesRadio2);
  respuestaRadio2 = xmlDoc.getElementsByTagName("answer")[1].innerHTML;



  //TEXT1

  var tituloText1 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
  ponerDatosText1Html(tituloText1);
  respuestaText1 = xmlDoc.getElementsByTagName("answer")[2].innerHTML.toLowerCase();

  //TEXT2
  var tituloText2 = xmlDoc.getElementsByTagName("title")[3].innerHTML;
  ponerDatosText2Html(tituloText2);
  respuestaText2 = xmlDoc.getElementsByTagName("answer")[3].innerHTML.toLowerCase();

  //CHECKBOX1
  var tituloCheckBox1 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
  var opcionesCheckBox1 = [];
  var nopt3 = xmlDoc.getElementById("jklm_005").getElementsByTagName('option').length;
  for (i = 0; i < nopt3; i++) {
    opcionesCheckBox1[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosCheckBox1Html(tituloCheckBox1, opcionesCheckBox1);
  var nres = xmlDoc.getElementById("jklm_005").getElementsByTagName('answer').length;
  for (i = 0; i < nres; i++) {
    respuestasCheckbox1[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName("answer")[i].innerHTML;
  }


  //CHECKBOX2
  var tituloCheckBox2 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
  var opcionesCheckBox2 = [];
  var nopt4 = xmlDoc.getElementById("jklm_006").getElementsByTagName('option').length;
  for (i = 0; i < nopt4; i++) {
    opcionesCheckBox2[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosCheckBox2Html(tituloCheckBox2, opcionesCheckBox2);
  var nres2 = xmlDoc.getElementById("jklm_006").getElementsByTagName('answer').length;
  for (i = 0; i < nres2; i++) {
    respuestasCheckbox2[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName("answer")[i].innerHTML;
  }


  //SELECT1
  var tituloSelect = xmlDoc.getElementsByTagName("title")[6].innerHTML;
  var opcionesSelect = [];
  var nopt5 = xmlDoc.getElementById("jklm_007").getElementsByTagName('option').length;
  for (i = 0; i < nopt5; i++) {
    opcionesSelect[i] = xmlDoc.getElementById("jklm_007").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosSelectHtml(tituloSelect, opcionesSelect);
  respuestaSelect = parseInt(xmlDoc.getElementsByTagName("answer")[8].innerHTML);

  //SELECT2
  var tituloSelect2 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
  var opcionesSelect2 = [];
  var nopt6 = xmlDoc.getElementById("jklm_008").getElementsByTagName('option').length;
  for (i = 0; i < nopt6; i++) {
    opcionesSelect2[i] = xmlDoc.getElementById("jklm_008").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosSelec2tHtml(tituloSelect2, opcionesSelect2);
  respuestaSelect2 = parseInt(xmlDoc.getElementsByTagName("answer")[9].innerHTML);

  //MULTIPLE1
  var tituloMultiple1 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
  var opcionesMultiple1 = [];
  var nopt7 = xmlDoc.getElementById("jklm_009").getElementsByTagName('option').length;
  for (i = 0; i < nopt7; i++) {
    opcionesMultiple1[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosMultiple1tHtml(tituloMultiple1, opcionesMultiple1);
  var nres3 = xmlDoc.getElementById("jklm_009").getElementsByTagName('answer').length;
  for (i = 0; i < nres3; i++) {
    respuestasMultiple1[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName("answer")[i].innerHTML;
  }

  //MULTIPLE2
  var tituloMultiple2 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
  var opcionesMultiple2 = [];
  var nopt8 = xmlDoc.getElementById("jklm_010").getElementsByTagName('option').length;
  for (i = 0; i < nopt7; i++) {
    opcionesMultiple2[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosMultiple2tHtml(tituloMultiple2, opcionesMultiple2);
  var nres4 = xmlDoc.getElementById("jklm_010").getElementsByTagName('answer').length;
  for (i = 0; i < nres4; i++) {
    respuestasMultiple2[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName("answer")[i].innerHTML;
  }

}

//****************************************************************************************************
// poner los datos recibios en el HTML
//RADIO
//RADIO 1
function ponerDatosRadioHtml(t, opt) {
  var radioContainer = document.getElementById('radioContainer1');
  var h3 = document.createElement("h3");
  h3.innerHTML = t;
  radioContainer.appendChild(h3);
  for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = opt[i];
    label.setAttribute("for", "opcion1_" + i);
    input.id = "opcion1_" + i;
    input.type = "radio";
    input.name = "opcion1";
    input.value = i;
    input.setAttribute("onclick", "uncheckRadio(this)");
    radioContainer.appendChild(input);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br"));
  }
}
//RADIO 2
function ponerDatosRadio2Html(t, opt) {
  var radio2Container = document.getElementById('radioContainer2');
  var h3 = document.createElement("h3");
  h3.innerHTML = t;
  radio2Container.appendChild(h3);
  for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = opt[i];
    label.setAttribute("for", "opcion2_" + i);
    input.id = "opcion2_" + i;
    input.type = "radio";
    input.name = "opcion2";
    input.value = i;
    input.setAttribute("onclick", "uncheckRadio(this)");
    radio2Container.appendChild(input);
    radio2Container.appendChild(label);
    radio2Container.appendChild(document.createElement("br"));
  }
}
//TEXT1
function ponerDatosText1Html(t) {
  var textContainer1 = document.getElementById('textContainer1');
  var h3 = document.createElement("h3");
  h3.innerHTML = t;
  textContainer1.appendChild(h3);
  var input = document.createElement("input");
  input.type = "text";
  input.name = "opcion3";
  textContainer1.appendChild(input);
}

//TEXT2
function ponerDatosText2Html(t) {
  var textContainer2 = document.getElementById('textContainer2');
  var h3 = document.createElement("h3");
  h3.innerHTML = t;
  textContainer2.appendChild(h3);
  var input = document.createElement("input");
  input.type = "text";
  input.name = "opcion4";
  textContainer2.appendChild(input);

}

//CHECKBOX1
function ponerDatosCheckBox1Html(t, opt) {
  var checkboxContainer = document.getElementById('checkboxContainer1');
  var h3 = document.createElement("h3");
  h3.innerHTML = t;
  checkboxContainer.appendChild(h3);
  for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = opt[i];
    label.setAttribute("for", "opcion5_" + i);
    input.type = "checkbox";
    input.name = "opcion5";
    input.id = "opcion5_" + i;
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
  }
}

//CHECKBOX2
function ponerDatosCheckBox2Html(t, opt) {
  var checkboxContainer2 = document.getElementById('checkboxContainer2');
  var h3 = document.createElement("h3");
  h3.innerHTML = t;
  checkboxContainer2.appendChild(h3);
  for (i = 0; i < opt.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML = opt[i];
    label.setAttribute("for", "opcion6_" + i);
    input.type = "checkbox";
    input.name = "opcion6";
    input.id = "opcion6_" + i;
    checkboxContainer2.appendChild(input);
    checkboxContainer2.appendChild(label);
    checkboxContainer2.appendChild(document.createElement("br"));
  }
}

//SELECT1
function ponerDatosSelectHtml(t, opt) {
  document.getElementById("tituloSelect").innerHTML = t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) {
    var option = document.createElement("option");
    option.text = opt[i];
    option.value = i;
    select.options.add(option);
  }

}

//SELECT2
function ponerDatosSelec2tHtml(t, opt) {
  document.getElementById("tituloSelect2").innerHTML = t;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < opt.length; i++) {
    var option = document.createElement("option");
    option.text = opt[i];
    option.value = i;
    select.options.add(option);
  }
}

//MULTIPLE1
function ponerDatosMultiple1tHtml(t, opt) {
  document.getElementById("titulomultiple1").innerHTML = t;
  var multiple = document.getElementsByTagName("select")[2];
  for (i = 0; i < opt.length; i++) {
    var option = document.createElement("option");
    option.text = opt[i];
    option.setAttribute("id", "opcion_" + i);
    option.name = "opcion9";
    multiple.options.add(option);
  }
}

//MULTIPLE2
function ponerDatosMultiple2tHtml(t, opt) {
  document.getElementById("titulomultiple2").innerHTML = t;
  var multiple = document.getElementsByTagName("select")[3];
  for (i = 0; i < opt.length; i++) {
    var option = document.createElement("option");
    option.text = opt[i];
    option.setAttribute("id", "opcion_" + i);
    option.name = "opcion10";
    multiple.options.add(option);
  }
}



//****************************************************************************************************
//implementación de la corrección
//RADIO 1
function corregirRadio() {
  var rad = formElement.elements.opcion1.value;
  if (rad == respuestaRadio) {
    darRespuestaHtml("P1: Correcto");
    nota += 1;
  }
  else {
    darRespuestaHtml("P1: Incorrecto");
    nota -= 1;
  }
}

//RADIO 2
function corregirRadio2() {
  var rad2 = formElement.elements.opcion2.value;
  if (rad2 == respuestaRadio2) {
    darRespuestaHtml("P2: Correcto");
    nota += 1;
  }
  else {
    darRespuestaHtml("P2: Incorrecto");
    nota -= 1;
  }
}

//TEXT1
function corregirText1() {
  var text = formElement.elements.opcion3.value.toLowerCase();
  if (text == respuestaText1) {
    darRespuestaHtml("P3: Correcto");
    nota += 1;
  }
  else {
    darRespuestaHtml("P3: Incorrecto");
    nota -= 1;
  }
}

//TEXT2
function corregirText2() {
  var text2 = formElement.elements.opcion4.value.toLowerCase();
  if (text2 == respuestaText2) {
    darRespuestaHtml("P4: Correcto");
    nota += 1;
  }
  else {
    darRespuestaHtml("P4: Incorrecto");
    nota -= 1;
  }
}

//CHECKBOX1
function corregirCheckBox() {
  var f = formElement;
  var escorrecta = [];
  for (i = 0; i < f.opcion5.length; i++) {
    if (f.opcion5[i].checked) {
      escorrecta[i] = false;
      for (j = 0; j < respuestasCheckbox1.length; j++) {
        if (i == respuestasCheckbox1[j]) escorrecta[i] = true;
      }
      if (escorrecta[i]) {
        nota += 1.0 / respuestasCheckbox1.length;
        darRespuestaHtml("P5." + i + ": " + " Correcta");
      } else {
        nota -= 1.0 / respuestasCheckbox1.length;
        darRespuestaHtml("P5." + i + ": " + " Incorrecta");
      }
    }
  }
}

//CHECKBOX2
function corregirCheckBox2() {
  var f = formElement;
  var escorrecta = [];
  for (i = 0; i < f.opcion6.length; i++) {
    if (f.opcion6[i].checked) {
      escorrecta[i] = false;
      for (j = 0; j < respuestasCheckbox2.length; j++) {
        if (i == respuestasCheckbox2[j]) escorrecta[i] = true;
      }
      if (escorrecta[i]) {
        nota += 1.0 / respuestasCheckbox2.length;
        darRespuestaHtml("P6." + i + ": " + " Correcta");
      } else {
        nota -= 1.0 / respuestasCheckbox2.length;
        darRespuestaHtml("P6." + i + ": " + " Incorrecta");
      }
    }
  }
}

//SELECT1

function corregirSelect1() {
  var sel = parseInt(formElement.elements.opcion7.value);
  if ((sel) == respuestaSelect) {
    darRespuestaHtml("P7: Correcto");
    nota += 1;
  }
  else {
    darRespuestaHtml("P7: Incorrecto");
    nota -= 1;
  }
}

//SELECT2
function corregirSelect2() {
  var sel = parseInt(formElement.elements.opcion8.value);
  if ((sel) == respuestaSelect2) {
    darRespuestaHtml("P8: Correcto");
    nota += 1;
  }
  else {
    darRespuestaHtml("P8: Incorrecto");
    nota -= 1;
  }
}

//MULTIPLE1
function corregirMultiple1() {
  var f = formElement;
  var escorrecta = [];
  for (i = 0; i < f.opcion9.length; i++) {
    if (f.opcion9[i].selected) {
      escorrecta[i] = false;
      for (j = 0; j < respuestasMultiple1.length; j++) {
        if (i == respuestasMultiple1[j]) escorrecta[i] = true;
      }
      if (escorrecta[i]) {
        nota += 1.0 / respuestasMultiple1.length;
        darRespuestaHtml("P9." + i + ": " + " Correcta");
      } else {
        nota -= 1.0 / respuestasMultiple1.length;
        darRespuestaHtml("P9." + i + ": " + " Incorrecta");
      }
    }
  }
}

//MULTIPLE2
function corregirMultiple2() {
  var f = formElement;
  var escorrecta = [];
  for (i = 0; i < f.opcion10.length; i++) {
    if (f.opcion10[i].selected) {
      escorrecta[i] = false;
      for (j = 0; j < respuestasMultiple2.length; j++) {
        if (i == respuestasMultiple2[j]) escorrecta[i] = true;
      }
      if (escorrecta[i]) {
        nota += 1.0 / respuestasMultiple2.length;
        darRespuestaHtml("P10." + i + ": " + " Correcta");
      } else {
        nota -= 1.0 / respuestasMultiple2.length;
        darRespuestaHtml("P10." + i + ": " + " Incorrecta");
      }
    }
  }
}

//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r) {
  var p = document.createElement("p");
  var node = document.createTextNode(r);
  p.appendChild(node);
  document.getElementById('resultado').appendChild(p);
}

function presentarNota() {
  darRespuestaHtml("Nota: " + nota.toFixed(2) + " puntos sobre 10.00");
  document.getElementById("resultadosDiv").style.display = "block";
  window.scrollTo(0, 0);
}

function inicializar() {
  document.getElementById('resultado').innerHTML = "";
  
  nota = 0.0;
}

function uncheckRadio(rbutton) {
  if (previo && previo != rbutton) { previo.era = false; }
  if (rbutton.checked == true && rbutton.era == true) { rbutton.checked = false; }
  rbutton.era = rbutton.checked;
  previo = rbutton;
}

//implementación comprobar vacío.

function comprobar() {
  var f = formElement;
  var checked = false;


  //RADIO 1
  for (i = 0; i < f.opcion1.length; i++) {
    if (f.opcion1[i].checked) checked = true;
  }
  if (!checked) {
    alert("¡Contesta la pregunta 1!");
    f.elements.opcion1[0].focus();
    return false;
  }
  checked = false;

  //RADIO 2
  for (i = 0; i < f.opcion2.length; i++) {
    if (f.opcion2[i].checked) checked = true;
  }
  if (!checked) {
    alert("¡Contesta la pregunta 2!");
    f.elements.opcion2[0].focus();
    return false;
  }
  checked = false;

  //TEXT1
  if (f.elements.opcion3.value == "") {
    alert("¡Contesta la pregunta 3!");
    f.elements.opcion3.focus();
    return false;
  }
  //TEXT2
  if (f.elements.opcion4.value == "") {
    alert("¡Contesta la pregunta 4!");
    f.elements.opcion4.focus();
    return false;
  }

  //CHECKBOX1
  for (i = 0; i < f.opcion5.length; i++) {
    if (f.opcion5[i].checked) checked = true;
  }
  if (!checked) {
    alert("¡Contesta la pregunta 5!");
    f.elements.opcion5[0].focus();
    return false;
  }

  checked = false;
  //CHECKBOX2
  for (i = 0; i < f.opcion6.length; i++) {
    if (f.opcion6[i].checked) checked = true;
  }
  if (!checked) {
    alert("¡Contesta la pregunta 6!");
    f.elements.opcion6[0].focus();
    return false;
  }
  checked = false;

  //SELECT1
  if (f.elements.opcion7.value == -1) {
    alert("¡Contesta la pregunta 7!");
    f.elements.opcion7.focus();
    return false;
  }

  //SELECT2
  if (f.elements.opcion8.value == -1) {
    alert("¡Contesta la pregunta 8!");
    f.elements.opcion8.focus();
    return false;
  }

  //MULTIPLE1
  if (f.elements.opcion9.value == "") {
    alert("¡Contesta la pregunta 9!");
    f.elements.opcion9.focus();
    return false;
  }
  //MULTIPLE2
  if (f.elements.opcion10.value == "") {
    alert("¡Contesta la pregunta 10!");
    f.elements.opcion10.focus();
    return false;
  }

  return true;
}

function test() {
  if (confirm("¿Estas seguro que deseas empezar el test? Recomendamos ver las normas.")) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("myform").style.display = "block";
    window.scrollTo(0, 0);
  }
}

function volver() {
  if (confirm("¿Estas seguro que deseas volver?")) {
    location.reload();
  }
}
function normas() {
  if (document.getElementById("info").style.display == "block") {
    document.getElementById("normas").style.display = "block";
    document.getElementById("info").style.display = "none";
    window.scrollTo(0, 0);
  } else {
    document.getElementById("normas").style.display = "none";
    document.getElementById("info").style.display = "block";
    window.scrollTo(0, 0);
  }
}
