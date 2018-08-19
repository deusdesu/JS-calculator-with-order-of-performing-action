window.onload = standardowy();
/*window.onload = licz();
function licz(){
    var a = prompt();
   alert( (480-5 * a) / 4 );
}
*/

//document.getElementById("mydiv")onmouseover. = 

function hover_dla_button(button_nr) {
    document.getElementById(button_nr).onmouseover = "#FF0";
}

function standardowy(){
    //wpisuje przyciski
    var tresc = '';
    for (var i = 1; i <= 4 * 6; i++) {
        tresc = tresc + "<div class = 'button' id='Butt"+i+"'> </div> ";
    }
    document.getElementById("Buttons").innerHTML = tresc;

    //ustawia treć, kolor i funkcje do przycisków
    document.getElementById("Butt1").style.backgroundColor = '#aaa';
    document.getElementById("Butt1").innerHTML = "%";
    document.getElementById("Butt1").addEventListener("onclick", modulo );
    hover_dla_button("Butt1");

    document.getElementById("Butt2").style.backgroundColor = '#aaa';
    document.getElementById("Butt2").innerHTML = "√";
    document.getElementById("Butt2").addEventListener("onclick", pierwiastek );

    document.getElementById("Butt3").style.backgroundColor = '#aaa';
    document.getElementById("Butt3").innerHTML = "x<sup>2</sup>";
    document.getElementById("Butt3").addEventListener("onclick", kwadrat );

    document.getElementById("Butt4").style.backgroundColor = '#aaa';
    document.getElementById("Butt4").innerHTML = "<sup>1</sup>/<sub>x</sub>";
    document.getElementById("Butt4").addEventListener("onclick", odwrotnosc );

    document.getElementById("Butt5").style.backgroundColor = '#aaa';
    document.getElementById("Butt5").innerHTML = "CE";
    document.getElementById("Butt5").addEventListener("onclick", ce );

    document.getElementById("Butt6").style.backgroundColor = '#aaa';
    document.getElementById("Butt6").innerHTML = "C";
    document.getElementById("Butt6").addEventListener("onclick", c );

    document.getElementById("Butt7").style.backgroundColor = '#aaa';
    document.getElementById("Butt7").innerHTML = "remove";
    document.getElementById("Butt7").addEventListener("onclick", remove );
    
    document.getElementById("Butt8").style.backgroundColor = '#aaa';
    document.getElementById("Butt8").innerHTML = "÷";
    document.getElementById("Butt8").addEventListener("onclick", dzielenie );

    document.getElementById("Butt9").style.backgroundColor = '#aaa';
    document.getElementById("Butt9").innerHTML = "7";
    document.getElementById("Butt9").addEventListener("click", function(){
    dodaj_liczbe(7); 
    }, false);

        document.getElementById("Butt10").style.backgroundColor = '#aaa';
        document.getElementById("Butt10").innerHTML = "8";
        document.getElementById("Butt10").addEventListener("click", function(){
        dodaj_liczbe(8); 
    }, false);
        document.getElementById("Butt11").style.backgroundColor = '#aaa';
        document.getElementById("Butt11").innerHTML = "9";
        document.getElementById("Butt11").addEventListener("click", function(){
        dodaj_liczbe(9); 
    }, false);
        document.getElementById("Butt12").style.backgroundColor = '#aaa';
        document.getElementById("Butt12").innerHTML = "*";
        document.getElementById("Butt12").addEventListener("onclick", mnozenie );

        document.getElementById("Butt13").style.backgroundColor = '#aaa';
        document.getElementById("Butt13").innerHTML = "4";
        document.getElementById("Butt13").addEventListener("click", function(){
        dodaj_liczbe(4); 
    }, false);
        document.getElementById("Butt14").style.backgroundColor = '#aaa';
        document.getElementById("Butt14").innerHTML = "5";
        document.getElementById("Butt14").addEventListener("click", function(){
        dodaj_liczbe(5); 
    }, false);
        document.getElementById("Butt15").style.backgroundColor = '#aaa';
        document.getElementById("Butt15").innerHTML = "6";
        document.getElementById("Butt15").addEventListener("click", function(){
        dodaj_liczbe(6); 
    }, false);
        document.getElementById("Butt16").style.backgroundColor = '#aaa';
        document.getElementById("Butt16").innerHTML = "-";
        document.getElementById("Butt16").addEventListener("onclick", odjac );

        document.getElementById("Butt17").style.backgroundColor = '#aaa';
        document.getElementById("Butt17").innerHTML = "1";
        document.getElementById("Butt17").addEventListener("click", function(){
        dodaj_liczbe(1); 
    }, false);
        document.getElementById("Butt18").style.backgroundColor = '#aaa';
        document.getElementById("Butt18").innerHTML = "2";
        document.getElementById("Butt18").addEventListener("click", function(){
        dodaj_liczbe(2); 
    }, false);
        document.getElementById("Butt19").style.backgroundColor = '#aaa';
        document.getElementById("Butt19").innerHTML = "3";
        document.getElementById("Butt19").addEventListener("click", function(){
        dodaj_liczbe(3); 
    }, false);

        document.getElementById("Butt20").style.backgroundColor = '#aaa';
        document.getElementById("Butt20").innerHTML = "+";
        document.getElementById("Butt20").addEventListener("onclick", plus );

        document.getElementById("Butt21").style.backgroundColor = '#aaa';
        document.getElementById("Butt21").innerHTML = "±";
        document.getElementById("Butt21").addEventListener("onclick", plusminus );


        document.getElementById("Butt22").style.backgroundColor = '#aaa';
        document.getElementById("Butt22").innerHTML = "0";
        document.getElementById("Butt22").addEventListener("click", function(){
        dodaj_liczbe(0); 
    }, false);

        document.getElementById("Butt23").style.backgroundColor = '#aaa';
        document.getElementById("Butt23").innerHTML = ",";
        document.getElementById("Butt23").addEventListener("onclick", przecinek );

        document.getElementById("Butt24").style.backgroundColor = '#aaa';
        document.getElementById("Butt24").innerHTML = "=";
        document.getElementById("Butt24").addEventListener("onclick", wynik );
}

function modulo(){

}
function pierwiastek(){

}

function kwadrat(){

}
function odwrotnosc(){

}
function ce(){

}
function c(){

}
function remove(){

}
function plusminus(){

}
function plus(){

}
function dzielenie(){

}
function dodaj_liczbe(liczba){

}
function odjac(){

}
function mnozenie(){

}
function przecinek(){

}
function wynik(){

}


/*
    problem: instnieje hover na klase, ale id ma background i hover klasy nie działa :/
 */