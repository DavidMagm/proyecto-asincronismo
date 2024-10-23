import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(url, data) {
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response
};

const productData = {
    "title": "New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, productData)
    .then(response => response.json())
    .then(data => console.log(data))
