/*
    ? 형변환
    * JS - "10" + "10" = 1010. 사람 - "10" + "10" = 20. 이러한 문제를 해결하기 위함.
    ! 암시적 형변환 - js 엔진이 자동으로 변환. 명시적 형변환 - 개발자가 직접 지정 변환.
    ? 암시적 형변환 CASE
    * 1. 숫자 형 + 문자 형 = 문자형. case.2
    * 2. 불린 형 + 숫자 형 = 숫자형. case.3
    * 3. 불린 형 + 문자 형 = 문자형. case.4
    
    ? 명시적 형변환 CASE
    * 1. 숫자 -> 문자. 
*/


/*
    ? parse
    * 1. parseInt(value); - 정수 형
    * 2. parseFloat(value); - 실수 형
    
    ? Number
    * Number(value); - 정수 형,실수 형
*/

//  todo.1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt("나이입력.");
    var result = Number(age) + 20; // ? 전역함수 Number
    console.log(result);
}
//  * window.prompt로 무언가 입력을 받게 되면 무조건 문자형으로 들어옴
//  *   -> so, 문자형을 숫자형으로 바꿔주어야 함
//  *   -> Number는 예전부터(통으로 묶어서 변환해버렸던 추세) 지금까지 많이 쓰이고 있고 정수든 실수든 상관하지 않고 무조건 숫자로 변환해버림



//  todo.2 강제 숫자 - 문자형 변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}

//  todo.3 강제 불린 - 숫자형 변환
function forcedNumber(){
    var result =  2 + true;
    console.log(result);
}
//  * boolean이 숫자랑 만났을 때는 강제 형변환되어 true = 1, false = 0으로 바뀜


//  todo.4 강제 불린 - 문자형 변환
function forcedString2(){
    var a = '2' + true;
    console.log(a);
}


/*
    ? String
    * String(value); - 문자형으로 변환(Number()와 사용 형태가 같음, 예전부터 사용하던 거고 광범위함)

    ? .toString()
    * Number(value).toString(); - 괄호 안에 @진수를 넣으면 @진법문자로 변경(16을 넣으면 16진수로), 괄호를 비워둘 경우 문자형으로 변환.
    *                               String(); 보다는 toString을 많이 쓰는 추세

    ? .toFixed()
    * Number.toFixed() - 소수점자리수는 반올림 하고 실수 문자형으로 변환.
*/

//  todo.5 test1에 들어있는 숫자를 문자로 형변환.

function stringNumb(){
    var test1 = 15;
    var result = String(test1); // ? 전역함수 String
    console.log(typeof(result) + ' = ' + result);
}

function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString()
    console.log(typeof(result) + ' = ' + result);
}


//  todo.6 test에 들어있는 문자를 숫자로 형변환

function numbString(){
    var test = '300';
    var result = parseInt(test) + 10;
    console.log(typeof(result) + ' = ' + result);
}