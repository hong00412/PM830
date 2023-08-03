/*
	? 변수란
	? 데이터를 저장 하는 장소, 데이터를 읽고 쓸 수 있는 장소.
	실무의 예
	? 1. 로그인 상태정보를 저장.
	? 2. 사용자가 선택한 항목을 저장.
	? 3. admin 으로 관리하는 항목을 저장. (메뉴 등)
	? 4. 게임등에서 기록되는 레코드나 데이터(에너지 등)를 저장.
	? 5. 쇼핑몰 장바구니의 상품목록 등 저장.
	? 6. 게시판 목록 등.
	? 
	? 주의사항
	? 1. 숫자로 시작 할 수 없다. ( 에러가 나는 브라우저가 있다. )
	? 2. 대,소문자를 구분한다. ( 전혀 다른 변수가 된다. )
	? 3. 변수는 대문자가 아닌 소문자로 시작한다. ( 암묵적인 룰 )
	? 4. 변하지 않는 환경 변수(상수변수 : 관리자아이디 등)는 모두 대문자 (ex > DB_NAME)로 정하여, 3번의 암묵적인 룰을 이용. 변경이 안되도록 회피한다.
	? 	(java 등은 상수변수를 문법적으로 잠궈버리지만 js는 그렇지 않다.)
	? 5. js에서 이미 정의된 예약어 사용 금지.
	? 	(break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with)
	? 변수의 종류
    ? 1. 전역변수 - 밑에 잔뜩 있는 것들. 전체 영역에서 사용 가능 한 변수.
    ? 2. 지역변수 - 정해진 영역 내에서만 사용 할 수 있는 변수.
    var globalVal = "전역변수";
    window.onload=function(){
        var localVal = "지역변수";
        alert(localVal);
    }
    function func1(){
        var localVal = "함수1번내 지역변수";
        alert(localVal);
    }
    function func2(){
        var globalVal = "함수2번내 지역변수";
        alert(globalVal);
    }
    
    3. 매개변수 - 함수 외부에서 내부로 데이터를 전달할 때, 사용 하는 변수.
    var globalVal = "전역변수";
    window.onload=function(){
        var localVal = "지역변수";
        func1(100,200);
    }
    function func1(num1, num2){
        var localVal = "지역변수";
        document.write("매개변수 num1="+num1+", num2 ="+num2);
    }
    4. 멤버변수 - 클래스 내부에 만들어 지며,
    객체에서 사용하는 정보를 담는 변수.
    function Markclass(){
    	this.name = "멤버변수";
    }
    Markclass.prototype.showName=function(){
        document.write("name=",this.name);
    }
    var objClass = new Markclass();
    objClass.showName();
*/


function varInfo() {
    var name = "Eunbi";
    var name = "Eunbi2";
    name = "nameChange";

    console.log(name);
}
// * var는 변수 재선언도 가능하고 값만 변경하는 것도 모두 가능

function letInfo() {
    let name = "Eunbi";
    // ? let name = "Eunbi2"; -> 위와 중복되는 이름의 변수를 재선언 하면 오류남
    name = "nameChange"; // ? 대신 이미 선언되어 있는 변수의 값을 바꾸는 건 가능

    console.log(name);
}
// * let은 변수 재선언은 불가능, 값을 변경하는 것은 가능

function constInfo() {
    const name = "Eunbi";
    // ? const name = "Eunbi2"; -> 위와 중복되는 이름의 변수를 재선언 하면 오류남
    name = "nameChange"; // ? -> 이미 선언되어 있는 변수의 값을 변경하는 것도 불가능

    console.log(name);
}
// * const는 변수 재선언 불가, 값 변경도 모두 불가


var name = "Eunbi", age = 29;
//  = var name = "Eunbi";
//    var age  = 29;

// * 변수 기본 선언 방법
// ? var variableName = value;
// ? , 를 기준으로 여러개 변수를 한줄로 선언할 수 있음

var radius, pi; // ? 변수 선언(value = undefined);
radius = 10, pi = 3.14159265; // ? 변수 초기화(변수에 값을 부여)
console.log(radius, pi);


// ! 변수의 특성 (변수를 그릇에 비유)
var cup; // ? 빈 컵
cup = 'Coffee'; // ? 컵에 커피를 담았다.
cup = 'Green Tea'; // ? 커피를 버리고 녹차를 담았다.

console.log(cup);
// * 변수는 한 번에 하나의 값밖에 담을 수 없음
// *   -> 위에서 Coffee를 담고 있었는데 GreenTea라는 값을 새로 넣었더니 값이 GreenTea로 바뀌는 것처럼


// ! 연산자 사용 시
var value = 10;
// value = value + 20;
value += 20; // ? 위 연산자를 이렇게 줄여서 쓸 수 있음

console.log(value);

// * value는 처음에 10으로 초기화가 되고 그 값에 20을 더하고 싶을 경우에 value = value + 20;으로 다시 초기화
// * 우변 value는 10을 내려받아 처리되는 과정이 되고 좌변 value는 우변 처리부가 지난 후의 30이라는 값으로 바뀜
