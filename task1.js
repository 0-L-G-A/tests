//Дано натуральне число n. Чи можна представити його в вигляді
//суми трьох квадратів натуральних чисел? Якщо можна то:
//вказати трійку x, y, z таких натуральних чисел, що:
// n = x2 + y2 + z2

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


module.exports = sumOf3Squares;
