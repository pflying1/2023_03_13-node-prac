module.exports = function(data) {
  if(typeof(data) === "number") {
    return true;
  }else {
    console.error("이거 숫자 아니야")
  }
}