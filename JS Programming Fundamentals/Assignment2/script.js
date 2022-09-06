function izracunaj(){
    const operator = prompt('Računska operacija ( uneti jedno od sledećih +, -, *, / ): ');

    const broj1 = parseFloat(prompt('Prvi broj: '));
    const broj2 = parseFloat(prompt('Drugi broj: '));

    let rezultat;

    switch (operator){
        case "+":
            rezultat = broj1 + broj2;
            alert(`${broj1} ${operator} ${broj2} = ${rezultat}`);
            break;
        case "-":
            rezultat = broj1 - broj2;
            alert(`${broj1} ${operator} ${broj2} = ${rezultat}`);
            break;
        case "*":
            rezultat = broj1 * broj2;
            alert(`${broj1} ${operator} ${broj2} = ${rezultat}`);
            break;
        case "/":
            if (broj2 == 0){
                alert('Svaki put kad deliš nulom negde se otvori crna rupa. :)');
                break;
            } else{
            rezultat = broj1 / broj2;
            alert(`${broj1} ${operator} ${broj2} = ${rezultat}`);
            break;
            }
        default:
            alert('Pokušaj ponovo!');
            break;
    }
}