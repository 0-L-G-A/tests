const friendNumbers = require("./task2");

describe('friendNumbers', () => {
    test(" should return array with subarrays with 3 numbers", () => {
        expect(friendNumbers(200, 300)).not.toBeFalsy();
    });
    test(' should return [2, 4, 6] if number is 56', () => {
        expect(friendNumbers(200, 300)).toEqual([284, 220]);
    })
    test(' should throw an eror if the number is smaller than 3', () => {
        expect(() => friendNumbers(150, 300)).toThrow('Write correct numbers');
    })
})