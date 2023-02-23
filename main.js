window.addEventListener("load", init);

function init() {
    document.getElementById("tartalom").innerHTML = '<p>Javascriptől írok ide.</p>';

    kedvencSzavak();
}

function kedvencSzavak() {
    const szavak = ["Gir", "Red Sindhi", "Sahiwal", "Hallikar", "Amritmahal", "Khillari", "Kangayam", "Bargur", "Vaynol", "Highland"]

    for (let index = 0; index < szavak.length; index++) {
        //document.getElementById("tartalom").innerHTML += ("<p>" + szavak[index] + "</p>");
        document.getElementById("tartalom").innerHTML += "<ul>";
        document.getElementById("tartalom").innerHTML += (`<li> ${szavak[index]} </li>`);
        document.getElementById("tartalom").innerHTML += "</ul>";
    }
}