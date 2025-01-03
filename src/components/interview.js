const camelLetters = (string) => {
  let camelString = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      camelString += string[i].toUpperCase();
    }
    camelString += string[i].toLowerCase();
  }
  return camelString;
};

console.log(camelLetters("hello"));
