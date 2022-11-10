var dollar = 11000.34;
var euro = 12354.03;
var Dticket = 500 * dollar;
var Dhotel = 250 * dollar;
var Denjoyable = 120 * dollar
var Eticket = 500 * euro;
var Ehotel = 250 * euro;
var Eenjoyable = 120 * euro;
var Dallprice = Dticket + Denjoyable + Dhotel;
var Eallprice = Eticket + Eenjoyable + Ehotel;
var results = prompt("Iltimos mablag'ingizni kiriting:");
if (results >= Dallprice && Eallprice ) {
    alert ("Oq yo'l sizga");
    console.log("Oq yo'l sizga");
} else if ( results < Dallprice && Eallprice) {
    alert ("Ozgina sabr qilish kerak do'stim.");
    console.log("Ozgina sabr qilish kerak do'stim.");
} else {
    alert ("Pulingizni raqamda kiriting.");
    console.log("Pulingizni raqamda kiriting.");
}