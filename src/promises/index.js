const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10) {
        resolve('We have enogth cows');
    } else {
        reject('You do not have cows');
    }
})

countCows
    .then(response => console.log(response))
    .catch(error => console.log(error));
