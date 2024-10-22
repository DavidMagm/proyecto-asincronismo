// EXAMPLE CALLBACKS

function sum(num1, num2) {
    return num1 + num2
};

function calculator(callback, num1, num2) {
    return callback(num1, num2);
};

console.log(calculator(sum, 2, 2));

// SETTIMEOUT IS A CALLBACK

setTimeout(() => {
    console.log('Hola Javascript');
}, 2000);