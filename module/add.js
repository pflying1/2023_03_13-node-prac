const numberChecker= require("./number-checker.js");

  module.exports = function(first,second){
    if(numberChecker(first)===true){
    return first + second;
  }
}
