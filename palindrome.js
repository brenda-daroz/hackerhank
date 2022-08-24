function palindrome(str) {
    
    let fixedStr = str.replace(/\W/g,"").replace(/[_]/g,"").toLowerCase();
  console.log(fixedStr)
  if(fixedStr === fixedStr.split('').reverse().join(''))
    {
       return true;
    }

  return false;
   
  }



  console.log(palindrome("1 eye for of 1 eye."));