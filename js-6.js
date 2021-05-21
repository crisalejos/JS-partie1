function submitInfo() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;                
    //  division
    document.write(`<p>Premier nombre = ${firstNumber}</p><p>Deuxième nombre = ${secondNumber} </p><p>Afficher le reste de la division de deux nombres. ${firstNumber} + ${secondNumber} = ${firstNumber/secondNumber} </p>`) ;
}