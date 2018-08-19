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
    if( !isNaN(ciag_liczb[ciag_liczb.length-1] ) ){
        jedno_dzialanie_dalej(ciag_liczb);
    }
}

function jedno_dzialanie_dalej(ciag) {
    //  #1  szuka znaku działania ( oprócz pierwszego znaku - to może być liczba ujemna ) jeli nie to konczy funkcje if tak następne kroki:
    //  #2  po znalezieniu tego znaku wykonuje dzialanie, wkleja je w miejsce użytych liczb np: '1-2-3' -> '-1-3'
    //  #3  dany ciag wrzuca w funkcje jedno_dzialanie_dalej(ciag)

    //  #1

  //  console.log(zwracam_najwyzsze_dzialanie(ciag));
    var dzialanie = zwracam_najwyzsze_dzialanie(ciag);
    if (dzialanie == undefined || dzialanie == 0) {
        ciag_liczb = ciag;
        wypisz_ciag_liczb();
    } else if (dzialanie != undefined) { //działanie to liczba albo false
        //console.log(ciag[dzialanie] + " dzialanie");
        var zakres = zwracam_liczby_oraz_ich_zakres(ciag, dzialanie); // posiada info o liczbach jak i poczatku i koncu zakresu zakres[0] to liczba1,zakres[1] to liczba2, zakres[2] to pocztek liczba1, zakres[3] to poczatek liczba2
        wykonuje_dzialanie_zmieniam_string(ciag, ciag[dzialanie], zakres); // wykonuje 1 działanie, zmienia stringa. 
    }
}

function wykonuje_dzialanie_zmieniam_string(ciag, dzialanie, zakres) {
    //console.log(ciag, dzialanie, zakres);
    var wynik_dzial; //wynik działania
    var zmiana; //wycinek, który należy zamienić z wynikiem działania
    switch (dzialanie) {
        case '+':
            wynik_dzial = zakres[0] + zakres[1];
            zmiana = ciag.substring(zakres[2], zakres[3] + 1);
            ciag = ciag.replace(zmiana, wynik_dzial);
           // console.log(ciag);
            jedno_dzialanie_dalej(ciag);
            break;
        case '-':
            wynik_dzial = zakres[0] - zakres[1];
            zmiana = ciag.substring(zakres[2], zakres[3] + 1);
            ciag = ciag.replace(zmiana, wynik_dzial);
            //console.log(ciag);
            jedno_dzialanie_dalej(ciag);
            break;
        case '*':
            wynik_dzial = zakres[0] * zakres[1];
            zmiana = ciag.substring(zakres[2], zakres[3] + 1);
            ciag = ciag.replace(zmiana, wynik_dzial);
            //console.log(ciag);
            jedno_dzialanie_dalej(ciag);
            break;
        case '/':
            wynik_dzial = zakres[0] / zakres[1];
            zmiana = ciag.substring(zakres[2], zakres[3] + 1);
            ciag = ciag.replace(zmiana, wynik_dzial);
            //console.log(ciag);
            jedno_dzialanie_dalej(ciag);
            break;
        case '^':
            wynik_dzial = Math.pow(zakres[0], zakres[1]);
            zmiana = ciag.substring(zakres[2], zakres[3] + 1);
            ciag = ciag.replace(zmiana, wynik_dzial);
            //console.log(ciag);
            jedno_dzialanie_dalej(ciag);
            break;

        default:
            //code block
    }
    //ciag_liczb = ciag;
    //wypisz_ciag_liczb();
}

function zwracam_liczby_oraz_ich_zakres(ciag, nr) {
    let dane = [];
    for (var i = nr - 1; i >= 0; i--) { // okrela liczbę przed znakiem działania
        if (i == 0 && ciag[i] == '-') {
            dane[0] = ciag.substring(i, nr);
            dane[2] = i;
            break;
        } else if (ciag[i] == '^' || ciag[i] == '*' || ciag[i] == '/' || ciag[i] == '+' || ciag[i] == '-') {
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
    // okrela liczbę po znaku działania
    for (var i = nr + 1; i < ciag.length; i++) {
        if (i == nr + 1 && ciag[i] == '-') { // warunek dla działania typu 3*-2, gdzie liczba po znaku jest ujemna a nie dodatnia
           // console.log('huju mam Cię!!!');
            for (var u = i + 1; u < ciag.length; u++) {
                if (ciag[u] == '^' || ciag[u] == '*' || ciag[u] == '/' || ciag[u] == '+' || ciag[u] == '-') {
                    //console.log(ciag.substring(nr + 1, u) + " L1");
                    //console.log(u + 1 + " L3");
                    dane[1] = ciag.substring(nr + 1, u);
                    dane[3] = u - 1;
                    break;
                } else if (u == ciag.length - 1) {
                    //console.log(ciag.substring(nr + 1, u + 1) + " L1 przy 0");
                    //console.log(u + " L3 przy 0");
                    dane[1] = ciag.substring(nr + 1, u + 1);
                    dane[3] = u;
                    break;
                }
            }
        } 
        // warunek dla działania typu 3*4-2, wydzieli 4, ponieważ znajdzie po tej liczbie znak działania
        else if (ciag[i] == '^' || ciag[i] == '*' || ciag[i] == '/' || ciag[i] == '+' || ciag[i] == '-') {
            //console.log(ciag.substring(nr + 1, i) + " L1");
            //console.log(i + 1 + " L3");
            dane[1] = ciag.substring(nr + 1, i);
            dane[3] = i - 1;
            break;
        } 
        // warunek dla działania typu 4-2, wydzieli 2 ponieważ dojdzie do konca stringa
        else if (i == ciag.length - 1) {
            //console.log(ciag.substring(nr + 1, i + 1) + " L1 przy 0");
            //console.log(i + " L3 przy 0");
            dane[1] = ciag.substring(nr + 1, i + 1);
            dane[3] = i;
            break;
        }
    }
    dane[0] = czy_int_czy_float(dane[0]);
    dane[1] = czy_int_czy_float(dane[1]);
    return dane;
}

function czy_int_czy_float(string_na_liczbe) {
    for (var i = 0; i < string_na_liczbe.length; i++) {
        if (string_na_liczbe[i] == '.') {
           // console.log(parseFloat(string_na_liczbe) + " przecinek");
            return parseFloat(string_na_liczbe);
        }
    }
    return parseInt(string_na_liczbe);
}

function zwracam_najwyzsze_dzialanie(ciag) {
    // szuka potęg
    for (var nr = 1; nr < ciag.length; nr++) {
        if (ciag[nr] == znak_dzialania[0]) {
            return nr;
        }
    }
    // szuka * lub / 
    for (var nr = 1; nr < ciag.length; nr++) {
        if (ciag[nr] == znak_dzialania[1] || ciag[nr] == znak_dzialania[2]) {
            return nr;
        }
    }
    // szuka + lub -
    for (var nr = 1; nr < ciag.length; nr++) {
        if (ciag[nr] == znak_dzialania[3] || ciag[nr] == znak_dzialania[4]) {
            return nr;
        }
    }


    // }
}

function wypisz_ciag_liczb() {
    if (ciag_liczb != undefined) {
        document.getElementById("Numbers").innerHTML = ciag_liczb;
    } else {
        document.getElementById("Numbers").innerHTML = '';
    }
}

function dodaj_do_ciag_liczb(dzialanie) {
    len_ciag_liczb = ciag_liczb.length;
   /* if(dzialanie == '.'){
        // SPRAWDZA, CZY '.' WYSTĘPUJE W ciag_liczb więcej niż 1 raz
        let nr = 0;
        for (var i = 0; i < ciag_liczb.length; i++) {
            if(ciag_liczb[i] == '.'){
                nr++;
            }
        }
        if(nr > 0){
            console.log('wiecej niz 1');
            return false;
        }
        
    }*/
    if (ciag_liczb == '' && dzialanie == '-') {
        ciag_liczb = '-';
        wypisz_ciag_liczb();
    } else if (!isNaN(ciag_liczb[len_ciag_liczb - 1]) && ciag_liczb != '') { //jeżeli ostatnia szufladka w 'ciag_liczb' jest liczba i nie jest pusta wtedy dokładam do napisu znak dzialania
        ciag_liczb = ciag_liczb + dzialanie;

        wypisz_ciag_liczb();

    }
    //console.log( isNaN( ciag_liczb[ len_ciag_liczb-1 ] ) );
    else if (isNaN(ciag_liczb[len_ciag_liczb - 1]) && ciag_liczb != '') { //jeżeli ostatnia szufladka w 'ciag_liczb' nie jest liczba i nie jest pusta ( czyli jest tam już taki znak działania ) wtedy zastępuje ostatnia szufladkę nowym znakiem działania

        ciag_liczb = Array.from(ciag_liczb); // zamienia string na tablice
        ciag_liczb[len_ciag_liczb - 1] = dzialanie; // zmiania wartosc ostatniej szufladki
        ciag_liczb = ciag_liczb.join(""); // zmienia tablice na stringa bez przecinka
       // console.log(ciag_liczb);
        wypisz_ciag_liczb();
    }
}
function wyznacz_ostatni_wyraz(ciag){ //zwraca [0] -> ostatni wyraz, [1] nr szufladki ostatniego wyrazu
    let dane = [];
    for (var i = ciag.length - 1; i >= 0; i--) {
        if(i==0){
            dane[0] = ciag.substring( i,ciag.length);
            dane[1] = i;
            return dane;
        //return dane[ ciag.substring( i,ciag.length), i];
        }
        if( isNaN( ciag[i] ) && isNaN( ciag[i-1] ) ){
            dane[0] = ciag.substring( i,ciag.length);
            dane[1] = i;
            return dane;
        //return dane[ ciag.substring( i,ciag.length), i];
        }
        if( isNaN( ciag[i] ) && ciag[i] != '.' ){
            dane[0] = ciag.substring( i+1,ciag.length);
            dane[1] = i+1;
            return dane;
        //return dane[ ciag.substring( i,ciag.length), i];
        }

    }
}

function dodaj() {
    ciag_liczb = '3*-2';
    wypisz_ciag_liczb();
}

function modulo() {

}

function pierwiastek() {

}

function odwrotnosc() {

}

function ce() {
    // zabezpieczenia np, spr czy już ma minus, if ma minus powinien mieć plus i chuj xd
    let nr = wyznacz_ostatni_wyraz(ciag_liczb);
    console.log(nr+" nr");
    //console.log(typeof(nr[0]));
    if(ciag_liczb == '-'){
        ciag_liczb = '';
    }
    else if( ciag_liczb != ''){
        ///console.log(nr);
        //  #0   konwer na array
        //  #1   wywalić ostatni wyraz
        //  #2   dodać do ciagu ten sam ale z minusem
        
        //  #0
        ciag_liczb = Array.from(ciag_liczb);
        //  #1
        
        ciag_liczb.splice( nr[1], ciag_liczb.length );
        console.log( ciag_liczb +" bez koncówki");
        ciag_liczb = ciag_liczb.join("");
        console.log(ciag_liczb+" join "+nr);
        
    }
    wypisz_ciag_liczb();

}

function c() {
    ciag_liczb = '';
    wypisz_ciag_liczb();
}

function remove() { // kasuje ostatnia szufladke
    ciag_liczb = Array.from(ciag_liczb); // zamienia string na tablice
    ciag_liczb.pop(); // zmiania wartosc ostatniej szufladki
    ciag_liczb = ciag_liczb.join(""); // zmienia tablice na stringa bez przecinka
    wypisz_ciag_liczb();
}

function plusminus() {
    // zabezpieczenia np, spr czy już ma minus, if ma minus powinien mieć plus i chuj xd
    let nr = wyznacz_ostatni_wyraz(ciag_liczb);
    let zmiana;
    console.log(nr+" nr");
    //console.log(typeof(nr[0]));
    if(ciag_liczb == '-'){
        ciag_liczb = '';
    }
    else if( ciag_liczb != ''){
        if (  parseFloat( nr[0] ) < 0  ){
             zmiana =  parseFloat( nr[0] ) * (-1);
            console.log(nr+" nr[0]");
        }
        else if( parseFloat( nr[0] ) > 0 ){
             zmiana = "-"+nr[0];
        }
        ///console.log(nr);
        //  #0   konwer na array
        //  #1   wywalić ostatni wyraz
        //  #2   dodać do ciagu ten sam ale z minusem
        
        //  #0
        ciag_liczb = Array.from(ciag_liczb);
        //  #1
        
        ciag_liczb.splice( nr[1], ciag_liczb.length );
        console.log( ciag_liczb +" bez koncówki");
        ciag_liczb = ciag_liczb.concat(zmiana);
        console.log( ciag_liczb +" concat");
        ciag_liczb = ciag_liczb.join("");
        console.log(ciag_liczb+" join "+nr);
        
    }
    wypisz_ciag_liczb();
}

function dodaj_liczbe(liczba) {
    ciag_liczb = ciag_liczb + liczba;
    // console.log( typeof( ciag_liczb ) );
    // console.log(  liczba  );
    wypisz_ciag_liczb();
}