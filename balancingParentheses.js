function balanceParentheses (s) {
    splittedS = s.split("")
    let right = 0
    let left = 0
   
    splittedS.forEach(element =>{
      if (element === '(') {
        ++right
      } else if (element === ')' && right > 0) {
        --right
      } else {
        ++left
      }
    })
    console.log(left + right) 
   }


   console.log(balanceParentheses('()))'));