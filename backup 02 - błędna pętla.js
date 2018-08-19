/*window.onload = licz();
function licz(){
    var a = prompt();
   alert( (480-5 * a) / 4 );
}
*/
//          TESTY
var chuj = 'uchuj';
//chuj[2] = 'ó';
chuj = Array.from( chuj );
//console.log( chuj );
chuj[ chuj.length-1 ] = '+';
//console.log( chuj.join("") );


var ciag_liczb = '';

function wynik(){
    // analiza 'ciag_liczb'
    // #1   szuka znaku o najwyższym piorytecie
    //          1   potęgowanie wraz z pierwiastkowaniem, (pierwiastkowaniem zajmuje się inna funkcja, wykonywane jest ono od razu ;) )
    //          2   mnożenie wraz z dzieleniem,
    //          3   dodawanie wraz z odejmowaniem.
    // #2   if znajdzie szuka liczb wokół tego znaku, aż do poczatku / konca stringu lub jakiegos znaku działania
    //      schemat -> 1 liczba, znak działania, druga liczba -> otrzymana liczba wchodzi na miejsce poprzednich znaków, analiza od poczatku
    // #3   if nie znajdzie szuka znaku działania o niższy piorytecie
    
    //  #1
    var liczby = [];
    var l_wyn_dzial;
    const dl = ciag_liczb.length;
    for (var i = 1; i <= 3; i++) {
        for (var nr = 0; nr < dl; nr++) { // nr to numer szufladki w stringu
            if( isNaN( ciag_liczb[ nr ] )){
                //console.log('jestem w isNan');
                liczby = znajdz_liczby_wokol(ciag_liczb, nr);
                //console.log(ciag_liczb[ nr ]);
                switch( ciag_liczb[ nr ] ) {
                    case '+':
                        if( i == 3 ){
                            zamienic = ciag_liczb.substring(liczby[2],liczby[3]);
                            l_wyn_dzial = parseInt(liczby[0]) + parseInt(liczby[1]);
                            ciag_liczb = ciag_liczb.replace( zamienic, l_wyn_dzial-1 );
                            //console.log( ciag_liczb );
                            //nr = 0;
                        }
                        break;
                    case '-':
                        if( i == 3 ){
                            zamienic = ciag_liczb.substring(liczby[2],liczby[3]);
                            l_wyn_dzial = parseInt(liczby[0]) - parseInt(liczby[1]);
                            ciag_liczb = ciag_liczb.replace( zamienic, l_wyn_dzial-1 );
                            // console.log( ciag_liczb.replace( zamienic, l_wyn_dzial ) );
                            // console.log( zamienic );
                            // console.log( l_wyn_dzial );
                            // console.log( liczby );
                            //nr = 0;
                            console.log( ciag_liczb +" -");
                        }
                        break;
                    case '*':
                        if( i == 2 ){
                            zamienic = ciag_liczb.substring(liczby[2],liczby[3]);
                            l_wyn_dzial = parseInt(liczby[0]) * parseInt(liczby[1]);
                            ciag_liczb = ciag_liczb.replace( zamienic, l_wyn_dzial );
                            console.log( ciag_liczb +" *");
                        }
                        break;
                    case '/':
                        if( i == 2 ){
                            zamienic = ciag_liczb.substring(liczby[2],liczby[3]);
                            l_wyn_dzial = parseInt(liczby[0]) / parseInt(liczby[1]);
                            ciag_liczb = ciag_liczb.replace( zamienic, l_wyn_dzial-1 );
                            //console.log( ciag_liczb );
                        }
                        break;
                    case '^':
                        if( i == 1 ){
                            //console.log('jestem w switchu' + i);
                            zamienic = ciag_liczb.substring(liczby[2],liczby[3]);
                            //console.log(zamienic);
                            l_wyn_dzial = Math.pow(liczby[0],liczby[1]);
                            //console.log(l_wyn_dzial);
                            ciag_liczb = ciag_liczb.replace( zamienic, l_wyn_dzial-1 );
                            //console.log( ciag_liczb );
                        }
                        break;
    
                    default:
                        //code block
                }
            }
           /* 
           switch(ciag_liczb[ nr ]) {
                case n:
                    code block
                    break;
                case n:
                    code block
                    break;
                default:
                    code block
            }
            */
        }
    }
    wypisz_ciag_liczb();
}

function znajdz_liczby_wokol(ciag, nr){ // okresla jakie liczby sa wokół znaku działania i zwraca je w formie tablicy
    // liczba przed znakiem
    var liczba1 = [];
    //console.log( ciag[ nr ]);
    for (var i = nr-1; i >= 0; i--) {
        if( isNaN( ciag[ i ] ) || i == 0){
            //console.log(ciag.substr(i,nr));
            liczba1[0] = ciag.substring(i,nr);
            liczba1[2] = i;
            //i = -1;
            break;
        }
    }
    for (var i = nr+1; i < ciag.length; i++) {
        if( isNaN( ciag[ i ] ) || i == ciag.length-1){
            liczba1[1] = ciag.substring(nr+1,i);
            liczba1[3] = i-1;
           // i = ciag.length ;
            break;

        }
    }
    console.log(liczba1+" zwrot");
    return liczba1;
}

function wypisz_ciag_liczb(){
    if(ciag_liczb != undefined){
        document.getElementById("Numbers").innerHTML = ciag_liczb;
    }
    else{
        document.getElementById("Numbers").innerHTML = '';
    }
}

function dodaj_do_ciag_liczb(dzialanie){
    len_ciag_liczb = ciag_liczb.length;
    if( !isNaN(ciag_liczb[ len_ciag_liczb-1 ]) && ciag_liczb != ''){ //jeżeli ostatnia szufladka w 'ciag_liczb' jest liczba i nie jest pusta wtedy dokładam do napisu znak dzialania
        ciag_liczb = ciag_liczb + dzialanie;

        wypisz_ciag_liczb();

    }
    //console.log( isNaN( ciag_liczb[ len_ciag_liczb-1 ] ) );
    else if( isNaN( ciag_liczb[ len_ciag_liczb-1 ] ) && ciag_liczb != ''){ //jeżeli ostatnia szufladka w 'ciag_liczb' nie jest liczba i nie jest pusta ( czyli jest tam już taki znak działania ) wtedy zastępuje ostatnia szufladkę nowym znakiem działania

        ciag_liczb = Array.from( ciag_liczb );          // zamienia string na tablice
        ciag_liczb[ len_ciag_liczb-1  ] = dzialanie;    // zmiania wartosc ostatniej szufladki
        ciag_liczb = ciag_liczb.join("");               // zmienia tablice na stringa bez przecinka
        console.log( ciag_liczb);
        wypisz_ciag_liczb();
    }

}

function standardowy(){
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
    ciag_liczb = '';
    wypisz_ciag_liczb();
}
function remove(){ // kasuje ostatnia szufladke
    
}
function plusminus(){

}
function dodawanie(){
    len_ciag_liczb = ciag_liczb.length;
    if( ciag_liczb[ len_ciag_liczb-1 ] != '+' && ciag_liczb != ''){
        ciag_liczb = ciag_liczb + '+';
        wypisz_ciag_liczb();
    } // do usunięcia?

}
function dzielenie(){   // do usunięcia?
    len_ciag_liczb = ciag_liczb.length;
    if( ciag_liczb[ len_ciag_liczb-1 ] != '/' && ciag_liczb != ''){
        ciag_liczb = ciag_liczb + '/';
        wypisz_ciag_liczb();
    }
}
function dodaj_liczbe(liczba){
    ciag_liczb = ciag_liczb + liczba;
   // console.log( typeof( ciag_liczb ) );
   // console.log(  liczba  );
    wypisz_ciag_liczb();
}
function odejmowanie(){     // do usunięcia?
    len_ciag_liczb = ciag_liczb.length;
    if( ciag_liczb[ len_ciag_liczb-1 ] != '+' && ciag_liczb != ''){
        ciag_liczb = ciag_liczb + '+';
        wypisz_ciag_liczb();
    }
}
function mnozenie(){    // do usunięcia?

}
function przecinek(){ // ??

}


/*
    problem: instnieje hover na klase, ale id ma background i hover klasy nie działa :/
 */