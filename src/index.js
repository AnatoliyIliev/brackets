module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let brackets = bracketsConfig.findIndex(el => el[0] === str[i]);

    if (brackets !== -1) {
      if (bracketsConfig[brackets][1] === arr[arr.length - 1]) {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    } else {
      if (arr.length === 0) {
        return false;
      }
      let closeBrackets = bracketsConfig.findIndex(el => el[1] === str[i]);
      if (bracketsConfig[closeBrackets][0] === arr[arr.length - 1]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return arr.length === 0;
};
