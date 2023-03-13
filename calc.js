//require 요청하다.
const test = require("./module/add.js");
const work = test.add("너는", "배고프다.");
console.log(work);
//defendency, injecting 의존 하고 있다.
//module.js에 관계가 있다.
//복잡도가 높아진다. 
//대규모 애플리케이션 일수록 코드를 다 알고 있는 사람은 없다.
//숫자만 결과를 내야하는데 문자열도 결과를 낸다. 이게 바로 *버그 에러가 아님