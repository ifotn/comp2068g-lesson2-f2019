// what is a js closure?

function parent()  {
    var message = 'Hello world';
    var currentVal = 3;

    function child() {
        console.log(message);
        console.log(currentVal);
        currentVal = 4;

    }

    child();
    console.log(currentVal);
}

parent();
//console.log(message);