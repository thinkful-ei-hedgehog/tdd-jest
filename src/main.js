function addNumbers(a=0, b=0){
    a = Number(a);
    b = Number(b);
    if(isNaN(a) || isNaN(b)){
        return 'Incorrect types entered';
    }
    return a+b;
}

module.exports = addNumbers;