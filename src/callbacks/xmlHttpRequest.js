const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fecthData(urlApi, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', urlApi, true);

    xmlHttp.onreadystatechange = function (event) {
        if(xmlHttp.readyState == 4) {
            if(xmlHttp.status == 200) {
                callback(null, JSON.parse(xmlHttp.responseText))
            } else {
                const error = new Error('Error')
                return callback(error, null);
            }
        }
    }
    xmlHttp.send();
};

// CALLBACK HELL ESTO ES PARA VER MAS EL EFECTO DE CALLBACK PERO NO ES RECOMENDABLE

fecthData(`${API}/products`, function(error1, data1) {
    if(error1) return console.log(error1);
    fecthData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if(error2) return console.log(error2);
        fecthData(`${API}/categories/${data2.category.id}`, function(error3, data3) {
            if(error3) return console.log(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

// SERIA MEJOR OPCION HACER LA PETICION 

fecthData(`${API}/products`, function(error, data) {
    if(error) console.log(error);
    console.log(data[0])
})