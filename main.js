var input = 'turpentine and turtles'

let vowels = ['a', 'e', 'i', 'o', 'u']

resultArray = []

inputArray = Array.from(input)

//console.log(inputArray)

for (let i = 0; i < inputArray.length; i++) {
  const letter = inputArray[i];
  //console.log(i);

  if (letter === 'e'){
  resultArray.push(inputArray[i])
  }

  if (letter === 'u'){
    resultArray.push(inputArray[i])
  }

  for (let j = 0; j < vowels.length; j++) {
    const vowel = vowels[j];
    //console.log(j);
    if (letter === vowel){
      resultArray.push(letter)
  }
}
}
resultString = resultArray.join('').toUpperCase()

console.log(resultString)
