function Addition() {
    let no1 = +document.getElementById('number1').value;
    let no2 = +document.getElementById('number2').value;
    let total = no1 + no2 ;
    document.write('Kết quả là ' + total);
}
function Subtraction() {
    let no1 = document.getElementById('number1').value;
    let no2 = document.getElementById('number2').value;
    let total = no1 - no2 ;
    document.write('Kết quả là ' + total);
}
function Multiplication() {
    let no1 = document.getElementById('number1').value;
    let no2 = document.getElementById('number2').value;
    let total = no1 * no2 ;
    document.write('Kết quả là ' + total);
}
function Division() {
    let no1 = document.getElementById('number1').value;
    let no2 = document.getElementById('number2').value;
    let total = no1 / no2 ;
    document.write('Kết quả là ' + total);
}