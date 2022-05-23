const addNumbers = require("../src/main");

describe("addNumbers()",()=>{
    test('should always return one number value',()=>{
        let actual = addNumbers(9,3);
        expect(typeof actual).toBe('number');
    })
    test('should return error if params are undefined',()=>{
        let actual = addNumbers();
        expect(actual).toBe(0)
    })

    test('should return error if params are the incorrect type',()=>{
        let actual = addNumbers('the','dog');
        expect(actual).toBe('Incorrect types entered');
    })

    test('should add negative numbers',()=>{
        let actual = addNumbers(-2,-3);
        expect(actual).toBe(-5);
    })
    test('should add stringified numbers',()=>{
        let actual = addNumbers('3','3');
        expect(actual).toBe(6);
    })

})


//Use Cases/Requirements
//
//console.log(`function should always return one number value`,typeof addNumbers(9,3) ==='number');
//what to do if param is undefined && is the correct datatype being passed through && what to do if params are missing?
//console.log(`should return error if params are undefined or the incorrect type`, addNumbers('the','dog')==='Incorrect types entered')
//console.log(`should return error if params are undefined or the incorrect type`, typeof addNumbers('the','dog')==='object')
// should not return a negative number/are nums negatives?
//console.log(`should add negative numbers`, addNumbers(-2,-3)===-5);
//should add stringified numbers
//console.log(`should add stringified numbers`, addNumbers('3','3')===6);
