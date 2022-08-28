// Get user input as a string. Declare variables.
let word = 'JavaSript';
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']; 
const suffix = 'ay';
const conArray = [];

  for (let i = 0; i < word.length; i++){
    for (let j = 0; j < consonants.length; j++){
      if (word[i] === consonants[j]){
        conArray.push(word[i]);
      }
    }
  }

// Step 3: Remove the first consonant
  const firstCon = conArray.shift();  

// Step 4: Put it at the end of the word and add the suffix. Set to new variable.
  let newString = word.substring(1);
  newString = newString + firstCon + suffix;
  console.log(newString);


