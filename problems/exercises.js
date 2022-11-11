// Question 1
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
	debugger;
	let lower = string.match(/[a-z]/g);
    let upper = string.match(/[A-Z]/g);
    let other = string.match(/[^a-zA-Z]/g);
    const letterCount ={
    	lowercase: lower.length, 
    	uppercase: upper.length, 
    	neither: other.length 
    };
    return letterCount;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
