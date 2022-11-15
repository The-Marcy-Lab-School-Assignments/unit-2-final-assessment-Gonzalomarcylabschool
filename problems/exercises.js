//Question 1
function stripPunctuation(string) {
	let newString = string.match(/[a-z0-9]+/ig).join('')
	return newString;
}


// Question 2
function rotateArray(arr) {
	if ( Array.isArray(arr) === false){
		return;
	}
	else if (0 === arr.length) {
			return arr
	}
	const newArr = [...arr];
    let hold = newArr.shift();
    newArr.push(hold);
    return newArr;

}

// Question 3

function letterCaseCounts(string) {
  const apha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const letterCount = {
      lowercase: 0,
      uppercase: 0,
      neither: 0
    };
    
    for (let i = 0; i < string.length; i++) {
      
      if (apha.includes(string[i].toLowerCase())) {
        if (string[i] === string[i].toLowerCase()) {
          letterCount.lowercase++
        }
        else  {
          letterCount.uppercase++
        }
      }
      else {
        letterCount.neither++
      }
    }
    return letterCount;
  }

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
