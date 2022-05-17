// code your solution here
function saturdayFun(doSomething="roller-skate"){
    return `This Saturday, I want to ${doSomething}!`
}
saturdayFun();

let mondayWork= function(doAnything="go to the office"){
    return `This Monday, I will ${doAnything}.`
}
mondayWork();

let msg = function wrapAdjective(style) {
    return function(adj) {
      return `You are ${style}${adj}${style}!`
    }
  }
  wrapAdjective('*', 'cool')