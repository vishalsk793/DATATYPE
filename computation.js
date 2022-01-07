const compute = require('./airthmatic_ops');

{
    var addition_result = compute.addition(10, 20);
    console.log('Addition Result is : ' + addition_result);
}

{
     var multiply_result = compute.multi(10, 20);
     console.log('multiplication Result is : ' + multiply_result);
}

{
    var division_result = compute.div(10, 20);
    console.log('division Result is : ' + division_result);
}

{
     var substraction_result = compute.sub(10, 20);
     console.log('substraction Result is : ' + substraction_result);
}