//Два натуральних числа називають дружніми, якщо кожне з них
//рівне сумі всіх ділителів іншого, крім самого цього числа.
//Знайдіть всі пари дружніх чисел, що лежать в діапазоні від 200 до 300
//

function friendNumbers(from, to){
  if(from<200 || to>300){
    throw new Error('Write correct numbers')
  }
  let sumsOfDividers = [];
  for(let i = from; i <= to; i++){
    let dividers = [];
    for(let j=1; j<i; j++){
      if(i % j === 0){dividers.push(j)}
    }
    let sum = dividers.reduce((prev, cur) => prev + cur);
    sumsOfDividers.push({num: i, sum: sum})
  }
  console.log(sumsOfDividers)
  let arr = [];
  let item = sumsOfDividers.find(function(el){
    for(let obj of sumsOfDividers){
      if(obj.num === el.sum && el.num === obj.sum){
        arr.push([obj, el])
      }
    }
  })
  return [arr[0][0].num, arr[0][0].sum];
}

// console.log(friendNumbers(200, 300));


module.exports = friendNumbers;
