var cards = ["photo1.png", "photo4.png", "photo2.png", "photo3.png", "photo5.png", "photo6.png", "photo1.png", "photo4.png", "photo2.png", "photo3.png", "photo5.png", "photo6.png"];
var oneVisible = false;
var cardnr;
var licznik = 0;
var blokada = false;
var koniec = 6;

function odkryj(nr) {
    var opacityValue = $("#c" + nr).css('opacity');
    if (opacityValue != 0 && blokada == false) {
        blokada = true;
        var obraz = "url(" + cards[nr] + ")";
        $("#c" + nr).css("background-image", obraz);


        if (oneVisible == false) {
            //pierwsza karta
            oneVisible = true;
            cardnr = nr;
            blokada = false;

        } else {
            //druga karta
            if (cards[cardnr] == cards[nr]) {
                //alert("para");
                setTimeout(function() { para(nr, cardnr) }, 750);
            } else {
                //alert("pudło")
                setTimeout(function() { pudlo(nr, cardnr) }, 1000);
            }
            oneVisible = false;
            licznik++;
            $(".score").html("Licznik kliknięć: " + licznik);
        }
    }

}

function para(nr1, nr2) {
    if (nr1 != nr2) {
        $("#c" + nr1).css('opacity', '0');
        $("#c" + nr2).css('opacity', '0');
        koniec--;
        if (koniec == 0) {
            $("#board").html("<h1> Wygrałeś <br> w " + licznik + " rundach </h1>");
        }
    } else {
        $("#c" + nr1).css('background-image', 'url(backplate.png)');
    }
    blokada = false;

}

function pudlo(nr1, nr2) {
    $("#c" + nr1).css('background-image', 'url(backplate.png)');
    $("#c" + nr2).css('background-image', 'url(backplate.png)');
    blokada = false;
}