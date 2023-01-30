document.body.onload = function() {
  document.getElementById("inicio").style.display = 'block';
  }

document.getElementById("formacionBoton").onclick = function () {
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("experiencia").style.display = 'none';
    document.getElementById("idioma").style.display = 'none';
    document.getElementById("habilidades").style.display = 'none';
    document.getElementById("conocimientos").style.display = 'none';
    document.getElementById("formacion").style.display = 'block';
}

document.getElementById("experienciaBoton").onclick = function () {
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("idioma").style.display = 'none';
    document.getElementById("habilidades").style.display = 'none';
    document.getElementById("formacion").style.display = 'none';
    document.getElementById("conocimientos").style.display = 'none';
    document.getElementById("experiencia").style.display = 'block';
}

document.getElementById("idiomaBoton").onclick = function () {
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("experiencia").style.display = 'none';
    document.getElementById("habilidades").style.display = 'none';
    document.getElementById("formacion").style.display = 'none';
    document.getElementById("conocimientos").style.display = 'none';
    document.getElementById("idioma").style.display = 'block';
}

document.getElementById("habilidadesBoton").onclick = function () {
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("idioma").style.display = 'none';
    document.getElementById("experiencia").style.display = 'none';
    document.getElementById("formacion").style.display = 'none';
    document.getElementById("conocimientos").style.display = 'none';
    document.getElementById("habilidades").style.display = 'block';
}

document.getElementById("conocimientosBoton").onclick = function () {
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("idioma").style.display = 'none';
    document.getElementById("experiencia").style.display = 'none';
    document.getElementById("formacion").style.display = 'none';
    document.getElementById("habilidades").style.display = 'none';
    document.getElementById("conocimientos").style.display = 'block';
}