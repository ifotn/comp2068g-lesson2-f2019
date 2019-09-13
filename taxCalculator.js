// link to http module to run web server
let http = require('http');

// link to url library to read url parameters
let url = require('url');

// add accounting npm package for currency formatting - automatically found in node_modules
let accounting = require('accounting');

// start web server
http.createServer((request, response) => {
    // http header
    response.writeHead(200, {'Content-Type': 'text-plain'});

    // page content
    response.write('<h1>Tax Calculator</h1>');

    // read the url parameter string (the part after the ? in the url, like PHP $_GET)
    let query = url.parse(request.url, true).query;

    // parse the value for the key name subtotal and cast as float to perform calculations
    let subTotal = parseFloat(query.subtotal);

    // calc tax & total variables.
    let tax = subTotal * 0.13;
    let total = subTotal + tax;

    // display all 3 values
    response.write('<h2>Sub Total:</h2>' + accounting.formatMoney(subTotal) +
        '<br /><h2>Tax:</h2> ' + accounting.formatMoney(tax) +
        '<br /><h2>Total:</h2> ' + accounting.formatMoney(total));

    // end response
    response.end();
}).listen(3000);

console.log('Server running on port 3000');
