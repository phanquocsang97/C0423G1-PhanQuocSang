// let a = +prompt("a: ");
// let b = +prompt("b: ");
// result = (a + b < 4) ? 'Below' : 'Over';
// document.write(result);
// let a = +prompt("a: ");
// let b = +prompt("b: ");
// result = (a + b < 4) ? 'Below' : 'Over';
// alert(result);

// let message;

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }
// let login = prompt('Enter')
// if(login == 'Employee'){
//     alert('hello');
// }else if (login == 'Director'){
//     alert('Greetings');
// }else if (login == ''){
//     alert('No login');
// }else
//     alert('');



let login = prompt("Enter:");
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(message);



