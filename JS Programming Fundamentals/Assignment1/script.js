function zapremina(){
    const pi = 3.14;
    var r = prompt("Unesite vrednost poluprečnika osnove valjka: ");
    var H = prompt("Unesite vrednost visine: ");
    var V = parseInt(r)*parseInt(r)*pi*parseInt(H);
    alert("Zapremina valjka je: " + V);
}