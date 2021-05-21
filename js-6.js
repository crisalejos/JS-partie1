function submitInfo() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;                
    document.write('<p>Premier nombre = ' + firstNumber  + '</p><p>Deuxième nombre = '  + secondNumber +  '</p><p>' + firstNumber + '/' + secondNumber + '=' + firstNumber/secondNumber + '</p>') ;
}