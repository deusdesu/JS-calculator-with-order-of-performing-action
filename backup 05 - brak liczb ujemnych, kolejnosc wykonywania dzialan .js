/*window.onload = licz();
function licz(){
    var a = prompt();
   alert( (480-5 * a) / 4 );
}
*/
//          TESTY
var chuj = 'uchuj';
//chuj[2] = 'ó';
//chuj = Array.from( chuj );
//console.log( chuj );
//chuj[ chuj.length-1 ] = '+';
//console.log( chuj.join("") );
console.log(chuj.substr(1, 2));
console.log(chuj.substring(1, 2));

var ciag_liczb = '';
const znak_dzialania = ['^', '*', '/', '+', '-'];
function wynik() {
    jedno_dzialanie_dalej(ciag_liczb);
}

function jedno_dzialanie_dalej(ciag) {
    //  #1  szuka znaku działania ( oprócz pierwszego znaku - to może być liczba ujemna ) jeli nie to konczy funkcje if tak następne kroki:
    //  #2  po znalezieniu tego znaku wykonuje dzialanie, wkleja je w miejsce użytych liczb np: '1-2-3' -> '-1-3'
    //  #3  dany ciag wrzuca w funkcje jedno_dzialanie_dalej(ciag)

    //  #1
    
    //console.log(zwracam_najwyzsze_dzialanie(ciag));
    var dzialanie = zwracam_najwyzsze_dzialanie(ciag);
    if( dzialanie != undefined ){ //działanie to liczba albo false
        console.log(dzialanie);
        var zakres = zwracam_liczby_oraz_ich_zakres(ciag, dzialanie); // posiada info o liczbach jak i poczatku i koncu zakresu zakres[0] to liczba1,zakres[1] to liczba2, zakres[2] to pocztek liczba1, zakres[3] to poczatek liczba2
        wykonuje_dzialanie_zmieniam_string(ciag, ciag[ dzialanie ], zakres); // wykonuje 1 działanie, zmienia stringa. 
    }

}

function wykonuje_dzialanie_zmieniam_string(ciag, dzialanie, zakres) {
    console.log(ciag, dzialanie, zakres);
    var wynik_dzial; //wynik działania
    var zmiana; //wycinek, który należy zamienić z wynikiem działania
    switch (dzialanie) {
        case '+':
            wynik_dzial = parseInt( zakres[0] ) + parseInt( zakres[1] );
            zmiana = ciag.substring(zakres[2], zakres[3]+1);
            ciag = ciag.replace(zmiana , wynik_dzial);
            console.log( ciag );
            jedno_dzialanie_dalej(ciag);
            break;
        case '-':
            wynik_dzial = parseInt( zakres[0] ) - parseInt( zakres[1] );
            zmiana = ciag.substring(zakres[2], zakres[3]+1);
            ciag = ciag.replace(zmiana , wynik_dzial);
            console.log( ciag );
            jedno_dzialanie_dalej(ciag);
            break;
        case '*':
             wynik_dzial = parseInt( zakres[0] ) * parseInt( zakres[1] );
             zmiana = ciag.substring(zakres[2], zakres[3]+1);
            ciag = ciag.replace(zmiana , wynik_dzial);
            console.log( ciag );
            jedno_dzialanie_dalej(ciag);
            break;
        case '/':
            wynik_dzial = parseInt( zakres[0] ) / parseInt( zakres[1] );
            zmiana = ciag.substring(zakres[2], zakres[3]+1);
            ciag = ciag.replace(zmiana , wynik_dzial);
            console.log( ciag );
            jedno_dzialanie_dalej(ciag);
            break;
        case '^':
            wynik_dzial = Math.pow(parseInt( zakres[0] ), parseInt( zakres[1] ));
            zmiana = ciag.substring(zakres[2], zakres[3]+1);
            ciag = ciag.replace(zmiana , wynik_dzial);
            console.log( ciag );
            jedno_dzialanie_dalej(ciag);
            break;

        default:
            //code block
    }
}

function zwracam_liczby_oraz_ich_zakres(ciag, nr) {
    let dane = [];
    for (var i = nr - 1; i >= 0; i--) { // okrela liczbę przed znakiem działania
        if (ciag[i] == '^' || ciag[i] == '*' || ciag[i] == '/' || ciag[i] == '+' || ciag[i] == '-') {
            // console.log( ciag.substring(i+1, nr)+" L0" );
            //console.log( i+1 +" L2" );
            dane[0] = ciag.substring(i + 1, nr);
            dane[2] = i + 1;
            break;
        } else if (i == 0) {
            // console.log( ciag.substring(i, nr)+" L0 przy 0"  );
            // console.log( i+" L2 przy 0"  );
            dane[0] = ciag.substring(i, nr);
            dane[2] = i;
            break;
        }
    }
    for (var i = nr + 1; i < ciag.length; i++) {
        if (ciag[i] == '^' || ciag[i] == '*' || ciag[i] == '/' || ciag[i] == '+' || ciag[i] == '-') {
            //console.log(ciag.substring(nr + 1, i) + " L1");
            //console.log(i + 1 + " L3");
            dane[1] = ciag.substring(nr + 1, i);
            dane[3] = i - 1;
            break;
        } else if (i == ciag.length - 1) {
            //console.log(ciag.substring(nr + 1, i + 1) + " L1 przy 0");
            //console.log(i + " L3 przy 0");
            dane[1] = ciag.substring(nr + 1, i + 1);
            dane[3] = i;
            break;
        }
    }
    return dane;
}

function zwracam_najwyzsze_dzialanie(ciag) {
    for (var i = 0; i < znak_dzialania.length; i++) {
        for (var nr = 0; nr < ciag.length; nr++) {
            if (ciag[nr] == znak_dzialania[i]) {
                return nr;
            }
        }
    }
}
//del
function znajdz_liczby_wokol(ciag, nr) { // okresla jakie liczby sa wokół znaku działania i zwraca je w formie tablicy
    // liczba przed znakiem
    var liczba1 = [];
    //console.log( ciag[ nr ]);
    for (var i = nr - 1; i >= 0; i--) {
        if (isNaN(ciag[i]) || i == 0) {
            //console.log(ciag.substr(i,nr));
            liczba1[0] = ciag.substr(i, nr);
            liczba1[2] = i;
            //i = -1;
            break;
        }
    }
    for (var i = nr + 1; i < ciag.length; i++) {
        if (isNaN(ciag[i]) || i == ciag.length - 1) {
            liczba1[1] = ciag.substr(nr + 1, i - 2);
            liczba1[3] = i + 1;
            // i = ciag.length ;
            console.log(isNaN(ciag[i]) + " " + ciag[i]);
            break;

        }
    }
    //console.log(liczba1+" zwrot");
    return liczba1;
}

function wypisz_ciag_liczb() {
    if (ciag_liczb != undefined) {
        document.getElementById("Numbers").innerHTML = ciag_liczb;
    } else {
        document.getElementById("Numbers").innerHTML = '';
    }
}
// del
function dodaj_do_ciag_liczb(dzialanie) {
    len_ciag_liczb = ciag_liczb.length;
    if (!isNaN(ciag_liczb[len_ciag_liczb - 1]) && ciag_liczb != '') { //jeżeli ostatnia szufladka w 'ciag_liczb' jest liczba i nie jest pusta wtedy dokładam do napisu znak dzialania
        ciag_liczb = ciag_liczb + dzialanie;

        wypisz_ciag_liczb();

    }
    //console.log( isNaN( ciag_liczb[ len_ciag_liczb-1 ] ) );
    else if (isNaN(ciag_liczb[len_ciag_liczb - 1]) && ciag_liczb != '') { //jeżeli ostatnia szufladka w 'ciag_liczb' nie jest liczba i nie jest pusta ( czyli jest tam już taki znak działania ) wtedy zastępuje ostatnia szufladkę nowym znakiem działania

        ciag_liczb = Array.from(ciag_liczb); // zamienia string na tablice
        ciag_liczb[len_ciag_liczb - 1] = dzialanie; // zmiania wartosc ostatniej szufladki
        ciag_liczb = ciag_liczb.join(""); // zmienia tablice na stringa bez przecinka
        console.log(ciag_liczb);
        wypisz_ciag_liczb();
    }
}

function dodaj() {
    ciag_liczb = '6+3+2';
    wypisz_ciag_liczb();
}

function standardowy() {}

function modulo() {

}

function pierwiastek() {

}

function kwadrat() {

}

function odwrotnosc() {

}

function ce() {

}

function c() {
    ciag_liczb = '';
    wypisz_ciag_liczb();
}

function remove() { // kasuje ostatnia szufladke

}

function plusminus() {

}

function dodawanie() {
    len_ciag_liczb = ciag_liczb.length;
    if (ciag_liczb[len_ciag_liczb - 1] != '+' && ciag_liczb != '') {
        ciag_liczb = ciag_liczb + '+';
        wypisz_ciag_liczb();
    } // do usunięcia?

}

function dzielenie() { // do usunięcia?
    len_ciag_liczb = ciag_liczb.length;
    if (ciag_liczb[len_ciag_liczb - 1] != '/' && ciag_liczb != '') {
        ciag_liczb = ciag_liczb + '/';
        wypisz_ciag_liczb();
    }
}

function dodaj_liczbe(liczba) {
    ciag_liczb = ciag_liczb + liczba;
    // console.log( typeof( ciag_liczb ) );
    // console.log(  liczba  );
    wypisz_ciag_liczb();
}

function odejmowanie() { // do usunięcia?
    len_ciag_liczb = ciag_liczb.length;
    if (ciag_liczb[len_ciag_liczb - 1] != '+' && ciag_liczb != '') {
        ciag_liczb = ciag_liczb + '+';
        wypisz_ciag_liczb();
    }
}

function mnozenie() { // do usunięcia?

}

function przecinek() { // ??

}


/*
    problem: instnieje hover na klase, ale id ma background i hover klasy nie działa :/
 */