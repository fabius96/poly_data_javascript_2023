// 1.객체의 생성으로 함수를 생성하는 것이 원칙입니다.
var add = new Function("x,y", "return x+y");
console.log( add(1,2) );

// fuction 키워드를 제공하는 것이다.
function plus(x,y) {
    return x + y;
}

console.log(plus(1,2));

