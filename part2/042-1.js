// const로 상수 선언하기 2
// 불변 객체가 되는 것은 아님, 내부 상태 변경 가능 하지만 재할당은 안됨

const CONST_USER = {name: 'jay', age: 20};
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name ='jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER = {name: 'bbo'};
