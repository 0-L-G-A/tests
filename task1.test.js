const sumOf3Squares = require("./task1");

describe('Sum of 3 squares', () => {
    test(" should return array with subarrays with 3 numbers", () => {
        expect(sumOf3Squares(56)).not.toBeFalsy();
    });
    test(' should return [2, 4, 6] if number is 56', () => {
        expect(sumOf3Squares(56)).toEqual([[2, 4, 6]]);
    })
    test(' should return [1, 1, 9], [3, 5, 7] if number is 83', () => {
        expect(sumOf3Squares(83)).toEqual([[1, 1, 9], [3, 5, 7]]);
    })
    test(' should throw an eror if the number is smaller than 3', () => {
        expect(() => sumOf3Squares(2)).toThrow('Number is too small');
    })
})