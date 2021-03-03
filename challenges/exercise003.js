function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!

  const squares = nums.map((num) => num * num);
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  const camelCase = words.map((word, ind) => {

    return ind === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
  });

  return camelCase.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  const subjects = people.reduce((acc, curr) => {
    return acc + curr.subjects.length;
  }, 0);

  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  }

  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!

  const duplicates = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let a = 0; a < arr2.length; a++) {

      if (arr1[i] === arr2[a]) {
        if (!duplicates.includes(arr1[i])) {
          duplicates.push(arr1[i]);
        }
      }

    }
  }

  return duplicates.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
