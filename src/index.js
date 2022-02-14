// module.exports =

function check(str, bracketsConfig) {
  // const arr = str.split('');
  // console.log(str);
  const brackets = bracketsConfig
    .map(br => br[0] + br[1])
    .filter(pair => str.includes(pair));

  console.log(brackets);
  return brackets.length ? true : false;
}

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
console.log(check('())(', config1)); //, false);
// console.log(check('[(])', config2)); //, false);
// console.log(check('[]][[]', config3)) //, false);
// console.log(check('||', config4)) //, true);
// console.log(check('|(|)', config5)) //, false);
// console.log(check('|()|(||)||', config5)) //, true);
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
