function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.substring(0, 1).toUpperCase() + word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  const firstInitial = firstName.charAt(0).toUpperCase();
  const secondInitial = lastName.charAt(0).toUpperCase();

  return firstInitial + "." + secondInitial;


}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!

  return Number ((originalPrice + originalPrice * vatRate/100).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!

  return Number ((originalPrice - originalPrice * reduction/100).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  return str.length % 2 == 0 ? str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2) : str.charAt(str.length / 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let allreverseWords = [];
  words.forEach(function(word){
    allreverseWords.push(word.split("").reverse().join(""));

  });

  return allreverseWords;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
