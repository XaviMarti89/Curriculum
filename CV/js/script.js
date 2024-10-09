function canviaNom(){
    let nombre = document.getElementById("name").value;
    document.getElementById("nom").innerHTML= nombre;
}

function canviaColor(){
    let color = document.getElementById("color").value;
    document.body.style.color = color;
}

function canviaFons(){
    let color = document.getElementById("fons").value;
    document.body.style.backgroundColor = color;
}

function canviaFoto(){
    let img = document.getElementById("foto").value;
    console.log('__filename:', __filename);
console.log('__dirname:', __dirname);
    document.getElementById("f").src = img
}
