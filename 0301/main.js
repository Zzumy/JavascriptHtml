window.addEventListener("load", init);

function init() {
    const articleElem = document.querySelectorAll('#tartalom');
    console.log(articleElem);
    articleElem[0].innerHTML = "<h1>Legjobb dolgok.</h1>";
    const list = [
        {
            nev: "Maja",
            mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
        },
        {
            nev: "Barbara",
            mondat: "Tudtam ültetni és van két virágom",
        },
        {
            nev: "Benedek",
            mondat: "Lebetegedtem",
        },
        {
            nev: "Dani",
            mondat: "Tegnapi adatbázis-kezelés",
        },
        {
            nev: "Bálint",
            mondat: "Kupcsik tanárnő vicces",
        },
        {
            nev: "Balázs",
            mondat: "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ",
        },
        {
            nev: "Duy",
            mondat: "Jó edzés volt a héten!",
        },
    ];

    megjelenit(list, articleElem);
    const szuloElem = document.querySelectorAll("section");
    megjelenit2(list, szuloElem);
    const tablazat = document.querySelectorAll("#tablazat");
    megjelenit3(list, tablazat);
}

function megjelenit(list, articleElem) {
    let txt = "<ul>";
    for (let index = 0; index < list.length; index++) {
        console.log(list[index]);
        txt += "<li>" + list[index].mondat + "</li>";
    }
    txt += "</ul>";
    articleElem[0].innerHTML = txt;
    const articleListak = document.getElementsByClassName("nev");
    console.log(articleListak[0]);
}

function megjelenit2(list, szuloElem) {
    let text = "";
    for (let index = 0; index < list.length; index++) {
        text += "<div>" + "<h3>" + list[index].nev + "</h3>" + "<p>" + list[index].mondat + "</p>" + "</div>";
    }
    szuloElem[0].innerHTML += text;
}

function megjelenit3(list, tablazatElem) {
    let tablazat = "<table>";
    tablazat += "<tr> <th> Név: </th> <th> Mondat: </th> </tr>";
    for (let index = 0; index < list.length; index++) {
        tablazat += "<tr>";
        tablazat += "<td>" + list[index].nev + "</td>" + "<td>" + list[index].mondat + "</td>";
        tablazat += "</tr>";
    }
    tablazat += "</table>";
    tablazatElem[0].innerHTML += tablazat;
}

