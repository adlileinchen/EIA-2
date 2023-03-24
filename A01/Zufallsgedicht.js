var A01;
(function (A01) {
    var subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (var index = subjekte.length; index > 0; index--) {
        var resultat = getVerse(subjekte, prädikate, objekte);
        console.log(resultat);
    }
    function getVerse(_Subjekte, _Prädikate, _Objekte) {
        var vers = " ";
        var randomnumber1 = Math.floor(Math.random() * _Subjekte.length);
        var randomnumber2 = Math.floor(Math.random() * _Prädikate.length);
        var randomnumber3 = Math.floor(Math.random() * _Objekte.length);
        vers = vers + _Subjekte.splice(randomnumber1, 1)[0] + " ";
        vers = vers + _Prädikate.splice(randomnumber2, 1)[0] + " ";
        vers = vers + _Objekte.splice(randomnumber3, 1)[0] + " ";
        return vers;
    }
})(A01 || (A01 = {}));
//# sourceMappingURL=Zufallsgedicht.js.map