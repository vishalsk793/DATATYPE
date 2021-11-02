function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}


const n = 12;

if(n <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
}