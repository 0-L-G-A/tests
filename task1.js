//Дано натуральне число n. Чи можна представити його в вигляді
//суми трьох квадратів натуральних чисел? Якщо можна то:
//вказати трійку x, y, z таких натуральних чисел, що:
// n = x2 + y2 + z2
console.log('TASK 1')

function sumOf3Squares(num) {
  const root = Math.trunc(Math.sqrt(num));
  let cases = [];
  if(num>=3){
    for(let x = 1; x<=root; x++){
      for(let y = 1; y<=root; y++){
        for(let z = 1; z<=root; z++){
          if(x*x + y*y + z*z === num && 
            !cases.some(el => el.includes(x) && el.includes(y) && el.includes(z))){
            cases.push([x, y, z])
          }
        } 
      } 
    }
  }else{
    throw new Error('Number is too small')
  }
  return cases; 
}

console.log('X2 + Y2 + Z2 = 52',sumOf3Squares(56))
console.log('X2 + Y2 + Z2 = 83',sumOf3Squares(83))
console.log('X2 + Y2 + Z2 = 90',sumOf3Squares(90))
console.log('X2 + Y2 + Z2 = 17',sumOf3Squares(17))


module.exports = sumOf3Squares;
