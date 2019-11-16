const express = require('express')
const app = express()
const port = 3000;

app.all("*", function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "x-requested-with");
    next();
})






app.get('/calc/:toantu/:num1/:num2', (req, res) => {
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);
    let kq = 0;
    switch (req.params.toantu) {
        case "+":
            kq = num1 + num2;
            break;
        case "-":
            kq = num1 - num2;
            break;
        case "x":
            kq = num1 * num2;
            break;
        case "÷":
            kq = num1 / num2;
            break;

    };
    res.send({ kq: kq });
})

app.listen(port, () => console.log('Server listening on http://localhost:' + port))