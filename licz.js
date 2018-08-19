//          TESTS
//var chuj = 'uchuj';
//chuj[2] = 'ó';
//chuj = Array.from( chuj );
//console.log( chuj );
//chuj[ chuj.length-1 ] = '+';
//console.log( chuj.join("") );
//console.log(chuj.substr(1, 2));
//console.log(chuj.substring(1, 2));

// global
// str_of_numbers
var str_of_numbers = '';    //  we will operate on this string
//const action_signs = ['^', '*', '/', '+', '-'];   //  table with action signs | redundant :c

//  main funcion (function called with button):
function add_number(number) {   //  add number to str_of_numbers
    // concat str_of_numbers with number, added number will be always on end of the str_of_numbers
    str_of_numbers = str_of_numbers + number;
    // console.log( typeof( str_of_numbers ) );
    // console.log(  number  );
    WRITE_str_of_num(); // write str_of_numbers on div "Numbers" // write str_of_numbers on div "Numbers"
}

function quare(){ // replace last number (word) in str_of_numbers to result number^2
    let nr = designate_last_word(str_of_numbers); // return array, array[0] = number (word), array[1] = drawer number last word
    let quare = Math.pow( nr[0] ,  2 ); // power ( [string into float], to 2 )
    //console.log(quare);
    change_last_word(nr[1], quare); //change last number to quare, nr[1] is drawer number last word
}

function square_root() {
    let nr = designate_last_word(str_of_numbers);// return array, array[0] = number (word), array[1] = drawer number last word
    let number;
    if( nr[0] >= 0){    // number under root must be >= 0
        number = nr[0]; // convert string to number
        let sqrt = Math.sqrt( number ); // or Math.pow(x, 0.5) nvm
        //console.log(nr[0] + " " + pierwiastek);
        change_last_word(nr[1], sqrt);  //change last number to sqrt, nr[1] is drawer number last word
    }
    
}

function inverts() { //inverts the last word. for example, 2 to 1/2 -> 0.5 not -2
    let nr = designate_last_word(str_of_numbers);// return array, array[0] = number (word), array[1] = drawer number last word
    let num_inverts = 1 / nr[0] ; //inverts the last word
    //console.log( num_inverts +" num_inverts");
    change_last_word(nr[1], num_inverts); //change last number to num_inverts, nr[1] is drawer number last word
}

function ce() { //remove last number(word)
    let nr = designate_last_word(str_of_numbers);// return array, array[0] = number (word), array[1] = drawer number last word
    //console.log(nr+" nr");
    //console.log(typeof(nr[0]));
    if( str_of_numbers != ''){ // if str_of_numbers is not empty
        ///console.log(nr);
        //  #0  convert to array
        //  #1  dump the last word
        //  #2  convert array to string 
    
        //  #0
        str_of_numbers = Array.from(str_of_numbers);// change in array

        //  #1
        str_of_numbers.splice( nr[1], str_of_numbers.length ); // usuwa koncówke
        //console.log( str_of_numbers +" bez koncówki");
        
        //  #2
        str_of_numbers = str_of_numbers.join("");//zmian atablicy w stringa
        //console.log(str_of_numbers+" join "+nr);
        
    }
    WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
}

function c() { // remove all in str_of_numbers
    str_of_numbers = '';
    WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
}

function remove() { // remove last simply number (for example: 123 -> 12) 
    str_of_numbers = Array.from(str_of_numbers); // convert to array
    str_of_numbers.pop(); // pop last
    str_of_numbers = str_of_numbers.join(""); // convert array to string 
    WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
}

function plusminus() {
    // zabezpieczenia np, spr czy już ma minus, if ma minus powinien mieć plus i chuj xd
    let nr = designate_last_word( str_of_numbers );
    let change; //variable to determine what will change
    //console.log(nr+" nr");
    //console.log(typeof(nr[0]));
    if(str_of_numbers == '-'){ // if str_of_numbers is only '-'
        str_of_numbers = '';
    }
    else if( str_of_numbers != ''){
        if ( nr[0] < 0  ){              // if nr is negative nr must be positive
             change = nr[0] * (-1);
            //console.log(nr+" nr[0]");
        }
        else if( nr[0] > 0 ){ // if nr is positive nr must be negative
             change = "-"+nr[0];
        }
        ///console.log(nr);
        //  #0   konwer na array
        //  #1   wywalić ostatni wyraz
        //  #2   dodać do ciagu ten sam ale z minusem
        
        //  #0
        change_last_word(nr[1], change); //change last number to 'change', nr[1] is drawer number last word
    }
    WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
}

function result() {
    if( !isNaN(str_of_numbers[str_of_numbers.length-1] ) ){ // last drawer cant be a sign of action or '.'
        one_operation_further(str_of_numbers); 
    }
}

// ancillary function (function called by other function):

function change_last_word(nr, l_concat){
    str_of_numbers = Array.from(str_of_numbers); // convert to array
    str_of_numbers.splice( nr, str_of_numbers.length ); // remove last munber(word)
    //console.log( str_of_numbers +" bez koncówki");
    str_of_numbers = str_of_numbers.concat(l_concat); // concat with l_concat
    //console.log( str_of_numbers +" concat");
    str_of_numbers = str_of_numbers.join(""); // convert array to string
    //console.log(str_of_numbers+" join "+nr);
    WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
}

function one_operation_further(str) {
    // # 1 looks for the action sign (except the first character - it can be a negative number) if it does not end the functions if and so the next steps:
     // # 2 after finding this character performs actions, pastes them in place of used numbers, for example: '1-2-3' -> '-1-3'
     // # 3 the given string dumps into functions one_operation_further (ciag)

    //  #1
 
  //  console.log(return_highest_action(ciag));
    var action = return_highest_action(str);
    if (action == undefined || action == 0) {
        str_of_numbers = str;
        WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
    } else if (action != undefined) { // działanie to liczba albo false
        //console.log(str[action] + " action");
        var scope = return_numbers_and_scope(str, action); 
        performs_action_change_string(str, str[action], scope); // performs 1 action, changes the string.
    }
}

function performs_action_change_string(str, action, scope) {
    //console.log(str, action, scope);
    var result_action; //wynik działania
    var change; //wycinek, który należy zamienić z wynikiem działania
    switch (action) {
        case '+':
            result_action = scope[0] + scope[1];
            change = str.substring(scope[2], scope[3] + 1);
            str = str.replace(change, result_action);
           // console.log(str);
            one_operation_further(str);
            break;
        case '-':
            result_action = scope[0] - scope[1];
            change = str.substring(scope[2], scope[3] + 1);
            str = str.replace(change, result_action);
            //console.log(str);
            one_operation_further(str);
            break;
        case '*':
            result_action = scope[0] * scope[1];
            change = str.substring(scope[2], scope[3] + 1);
            str = str.replace(change, result_action);
            //console.log(str);
            one_operation_further(str);
            break;
        case '/':
            result_action = scope[0] / scope[1];
            change = str.substring(scope[2], scope[3] + 1);
            str = str.replace(change, result_action);
            //console.log(str);
            one_operation_further(str);
            break;
        case '^':
            result_action = Math.pow(scope[0], scope[1]);
            change = str.substring(scope[2], scope[3] + 1);
            str = str.replace(change, result_action);
            //console.log(str);
            one_operation_further(str);
            break;

        default:
            console.log('error function performs_action_change_string(str, action, scope)');
    }
    //str_of_numbers = str;
    //WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
}

function return_numbers_and_scope(str, nr) {
    let data = [];
    for (var i = nr - 1; i >= 0; i--) { // okrela liczbę przed znakiem działania
        if (i == 0 && str[i] == '-') {
            data[0] = str.substring(i, nr);
            data[2] = i;
            break;
        } else if (str[i] == '^' || str[i] == '*' || str[i] == '/' || str[i] == '+' || str[i] == '-') {
            // console.log( str.substring(i+1, nr)+" L0" );
            //console.log( i+1 +" L2" );
            data[0] = str.substring(i + 1, nr);
            data[2] = i + 1;
            break;
        } else if (i == 0) {
            // console.log( str.substring(i, nr)+" L0 przy 0"  );
            // console.log( i+" L2 przy 0"  );
            data[0] = str.substring(i, nr);
            data[2] = i;
            break;
        }
    }
    // okrela liczbę po znaku działania
    for (var i = nr + 1; i < str.length; i++) {
        if (i == nr + 1 && str[i] == '-') { // warunek dla działania typu 3*-2, gdzie liczba po znaku jest ujemna a nie dodatnia
           // console.log('huju mam Cię!!!');
            for (var u = i + 1; u < str.length; u++) {
                if (str[u] == '^' || str[u] == '*' || str[u] == '/' || str[u] == '+' || str[u] == '-') {
                    //console.log(str.substring(nr + 1, u) + " L1");
                    //console.log(u + 1 + " L3");
                    data[1] = str.substring(nr + 1, u);
                    data[3] = u - 1;
                    break;
                } else if (u == str.length - 1) {
                    //console.log(str.substring(nr + 1, u + 1) + " L1 przy 0");
                    //console.log(u + " L3 przy 0");
                    data[1] = str.substring(nr + 1, u + 1);
                    data[3] = u;
                    break;
                }
            }
        } 
        // warunek dla działania typu 3*4-2, wydzieli 4, ponieważ znajdzie po tej liczbie znak działania
        else if (str[i] == '^' || str[i] == '*' || str[i] == '/' || str[i] == '+' || str[i] == '-') {
            //console.log(str.substring(nr + 1, i) + " L1");
            //console.log(i + 1 + " L3");
            data[1] = str.substring(nr + 1, i);
            data[3] = i - 1;
            break;
        } 
        // warunek dla działania typu 4-2, wydzieli 2 ponieważ dojdzie do konca stringa
        else if (i == str.length - 1) {
            //console.log(str.substring(nr + 1, i + 1) + " L1 przy 0");
            //console.log(i + " L3 przy 0");
            data[1] = str.substring(nr + 1, i + 1);
            data[3] = i;
            break;
        }
    }
    data[0] = int_or_float(data[0]);
    data[1] = int_or_float(data[1]);
    return data;
}

function int_or_float(str_to_number) {
    for (var i = 0; i < str_to_number.length; i++) {
        if (str_to_number[i] == '.') {
           // console.log(parseFloat(str_to_number) + " przecinek");
            return parseFloat(str_to_number);
        }
    }
    return parseInt(str_to_number);
}

function return_highest_action(str) {
    // szuka potęg
    for (var nr = 1; nr < str.length; nr++) {
        if (str[nr] == '^' ) {
            return nr;
        }
    }
    // szuka * lub / 
    for (var nr = 1; nr < str.length; nr++) {
        if (str[nr] == '*' || str[nr] ==  '/' ) {
            return nr;
        }
    }
    // szuka + lub -
    for (var nr = 1; nr < str.length; nr++) {
        if (str[nr] == '+' || str[nr] == '-' ) {
            return nr;
        }
    }


    // }
}

function WRITE_str_of_num() { // write str_of_numbers on div "Numbers"
    if (str_of_numbers != undefined) { // security for crash on tests ;)
        document.getElementById("Numbers").innerHTML = str_of_numbers; 
    } else {
        document.getElementById("Numbers").innerHTML = '';
    }
}

function add_to_string_of_numbers(action) { //add sign of action to str_of_numbers
    // it has specific conditions
    if (str_of_numbers == '' && action == '-') {
        str_of_numbers = '-';
        WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
    } else if (!isNaN(str_of_numbers[str_of_numbers.length - 1]) && str_of_numbers != '') { // if the last drawer in 'str_of_numbers' is a number and is not empty, then I add an action sign to the string
        str_of_numbers = str_of_numbers + action;

        WRITE_str_of_num(); // write str_of_numbers on div "Numbers"

    }
    //console.log( isNaN( str_of_numbers[ str_of_numbers.length-1 ] ) );
    else if (isNaN(str_of_numbers[str_of_numbers.length - 1]) && str_of_numbers != '') { // if the last drawer in 'str_of_numbers' is not a number and is not empty (ie there is already such a sign of action) then it replaces the last drawer with a new sign of action

        str_of_numbers = Array.from(str_of_numbers); 
        str_of_numbers[str_of_numbers.length - 1] = action; 
        str_of_numbers = str_of_numbers.join(""); 
       // console.log(str_of_numbers);
        WRITE_str_of_num(); // write str_of_numbers on div "Numbers"
    }
}

function designate_last_word(str){ //zwraca [0] -> ostatni wyraz, [1] nr szufladki ostatniego wyrazu
    let data = [];
    for (var i = str.length - 1; i >= 0; i--) {
        if(i==0){
            data[0] = parseFloat( str.substring( i,str.length) );
            data[1] = i;
            return data;
        //return data[ str.substring( i,str.length), i];
        }
        if( isNaN( str[i] ) && isNaN( str[i-1] ) ){
            data[0] = parseFloat( str.substring( i,str.length) );
            data[1] = i;
            return data;
        //return data[ str.substring( i,str.length), i];
        }
        if( isNaN( str[i] ) && str[i] != '.' ){
            data[0] = parseFloat( str.substring( i+1,str.length) );
            data[1] = i+1;
            return data;
        //return data[ str.substring( i,str.length), i];
        }

    }
}

function dodaj() { // for tests and through laziness
    str_of_numbers = '3*-2';
    WRITE_str_of_num(); // write str_of_numbers on div "Numbers"// for tests
}
