fetch('https://dummyjson.com/products/add', {
    method: "POST",
    headers: {
        "Content-Type": "application/html"
    },
    body: JSON.stringify({ title: "Pannkakor" })
})
    .then(response => response.json())
    //.then(function (response) { Samma som raden över
    //    return response.json();
    //})
    .then(jsonObject => console.log(jsonObject))
    .catch(error => console.log(error));

async function addProduct(product) {
    /*let responses = await Promise.all([
        fetch('https://dummyjson.com/products/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/html"
            },
            body: JSON.stringify(product)
        }),
        fetch('https://dummyjson.com/products/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/html"
            },
            body: JSON.stringify(product)
        }),
        fetch('https://dummyjson.com/products/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/html"
            },
            body: JSON.stringify(product)
        })
    ]);*/

    const response = await fetch('https://dummyjson.com/products/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/html"
        },
        body: JSON.stringify(product)
    });

    if (response.status === 201) {
        const json = await response.json();
        return json;
    } else {
        console.error("Error adding product.");
    }
}

// test().then(number => console.log(number));

addProduct({ title: "Pannkakor" }).then(res => console.log(res));

// JavaScript är single threaded
// Event Loop
// 1. Kör alla JavaScript kod
// 2. Lyssna efter events (knapptryck, button submits, fetch)
// 3. När ett event uppstår -> anropa event listener
// -> test() -> callback
// -> func1() -> callback
// -> func2() -> callback

console.log("HEJSAN!");