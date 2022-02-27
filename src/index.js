module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  const arr = str.split('');

  const brackets = bracketsConfig.map(br => br[0] + br[1]);

  const result = compare(arr, brackets);

  function compare(arr, brackets) {
    for (let i = 0; i < arr.length; i += 1) {
      let joinBracket = brackets.includes(arr[i] + arr[i + 1]);
      if (joinBracket) {
        arr.splice(i, 2);
        compare(arr, brackets);
      }
    }
    return arr;
  }
  return result.length ? false : true;
};

const config1 = [['(', ')']];
const config2 = [
  ['(', ')'],
  ['[', ']'],
];
const config3 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
];
const config4 = [['|', '|']];
const config5 = [
  ['(', ')'],
  ['|', '|'],
];
const config6 = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6'],
  ['7', '7'],
  ['8', '8'],
];
const config7 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['|', '|'],
];

// console.log(check('((()))()', config1)); //, true);
// console.log(check('())(', config1)); //, false);
// console.log(check('[(])', config2)); //, false);
// console.log(check('[]][[]', config3)); //, false);
// console.log(check('||', config4)); //, true);
// console.log(check('|(|)', config5)); //, false);
// console.log(check('|()|(||)||', config5)); //, true);
// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6))
// //, true);
// console.log(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6))
// //, false);
// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7))
// //, false);
// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7))
// //, true);
// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7))
// //, true);

// module.exports = function check(str, bracketsConfig) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let brackets = bracketsConfig.findIndex(el => el[0] === str[i]);

//     if (brackets !== -1) {
//       if (bracketsConfig[brackets][1] === arr[arr.length - 1]) {
//         arr.pop();
//       } else {
//         arr.push(str[i]);
//       }
//     } else {
//       if (arr.length === 0) {
//         return false;
//       }
//       let closeBrackets = bracketsConfig.findIndex(el => el[1] === str[i]);
//       if (bracketsConfig[closeBrackets][0] === arr[arr.length - 1]) {
//         arr.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return arr.length === 0;
// };
