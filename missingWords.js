function missingWords(s, t) {
   let primaryS = s.split(' ')
   let secondayT = t.split(' ')

   let missingWordArray = []
    
        for (let i = 0; i < primaryS.length; i++) {
            const elementS = primaryS[i];
            if(elementS !== secondayT[i- missingWordArray.length]) {
                missingWordArray.push(elementS)
                console.log(missingWordArray)
               
            }
            
        }
        return missingWordArray
    }

    // function missingWords(s, t) {
	
    //     	var missing = [];
    //     	var a = s. split(' ');
    //     	var b = t.split(' ');
            
    //     	a.forEach((word, i) => {
    //     		if(word !== b[i- missing.length]) {
    //     			missing.push(word);
    //     		}
    //     	});
            
    //     	return missing;
    //     }
  



console.log(missingWords("Python is Python", "Python"))