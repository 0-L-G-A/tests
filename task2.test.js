const friendNumbers = require("./task2");

describe('friendNumbers', () => {
    test(" should return array", () => {
        expect(friendNumbers(200, 300)).not.toBeFalsy();
    });
    test(' should return [284, 220] if numbers are 200, 300', () => {
        expect(friendNumbers(200, 300)).toEqual([284, 220]);
    })
    test(' should throw an eror if number is smaller than 200 or bigger than 300', () => {
        expect(() => friendNumbers(150, 300)).toThrow('Write correct numbers');
    })
})