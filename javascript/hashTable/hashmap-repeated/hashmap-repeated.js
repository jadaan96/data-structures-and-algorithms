function repeated(str) {
    const words = str.toLowerCase().split(' ');
    let counteObj = {};
  console.log(counteObj);
    for (let i = 0; i < words.length; i++) {
      if (counteObj[words[i]] === 1) {
        return words[i];
      } else {
        counteObj[words[i]] = (counteObj[words[i]] || 0) + 1;
      }
    }
  
    return null;
  }
  
  module.exports = repeated;
  
  const inputString = "all  is This is only a test.";
  const repeatedWord = repeated(inputString);
  console.log(repeatedWord);
  