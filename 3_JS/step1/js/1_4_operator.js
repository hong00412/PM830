/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    
    ? 문자열 연산자
    * + 문자열을 합친다.
    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * ex> a = a + 10; > a += 10;
    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소
    ? 조건비교 연산자
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    * == 좌변과 우변이 같다.
    * != 좌변과 우변이 다르다.
    * ex> 
    if(273 < 52){
        alert('273은 52보다 작습니다.');
    }
    if(273 > 52){
        alert('273은 52보다 큽니다.');
    }
    참이면 실행하고 거짓이면 무시한다.
    ? 논리 연산자
    * &&(곱) '그리고(모든 조건이 맞아야 함)', ||(합, verticalBar) '이거나(모든 조건 중 하나만 맞으면 됨)'
    * -> 조건비교를 할 경우 결과는 true나 false로 반환
    *    A && B && C 일 경우 A, B, C가 모두 맞아야하고 셋 중 하나라도 맞지 않으면 false
    *    A || B || C 일 경우 A, B, C 중 하나라도 맞으면 true, 다 맞지 않을 경우에만 false
    
    ? 논리 부정연산자
    * !
    * ex>
    alert(!true);
    alert(!false);
    참을 거짓으로, 거짓을 참으로 바꾼다.
    ? 접근 연산자
    * .
*/

// ? case.1 10이 저장된 변수 a, 숫자 20, 그리고 30을 더해서 result 변수에 담아 log로 출력.
function numbOP1() {
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}

// ? case.2 숫자 5를 2로 나누었을 때 나머지 값이 몇인지 result 변수에 저장 후 log로 출력
function numbOP2() {
    var result = 5%2;
    console.log(result);
}

// ? case.3 'hi'가 담긴 변수 a와 'WEB'이 담긴 변수 b를 합쳐 'hiWEB'을 출력
function stringOP() {
    var a = 'hi';
    var b = 'WEB';
    console.log(a+b);
}

// ? case.4 ul, li 구조의 tag를 html Page에 삽입 후 출력
function operatorEx() {
    var list = '';
    
    list += '<ul>';
    list += '   <li>hello</li>';
    list += '   <li>JS!</li>';
    list += '</ul>';

    document.body.innerHTML = list;
}

function numberPlusAfter() {
    var number = 10;
    alert(number++); // ? number = 10
    alert(number++); // ? number = 11
    alert(number++); // ? number = 12
}

// * 사람은 한번에 보기 때문에 처음 alert(number++);를 한꺼번에 계산하고 11로 생각할 수 있지만
// * 컴퓨터는 한 번에 하나의 연산밖에 할 수 없기 때문에 일단 alert이 먼저 실행된 후 ++ 전에 있는 number만 바라보고 10을 출력
// *    -> but ++가 존재는 하기 때문에 두번째 alert으로 갈 때 1을 더한 11로 바뀌어 넘어감
// *      마지막 3번째 12까지 출력되고 또 ++가 적용되어 number는 최종적으로 13으로 끝나고 마무리(출력은 12까지만)

function numberPlusBefore() {
    var number = 10;
    alert(++number); // ? number = 11
    alert(++number); // ? number = 12
    alert(++number); // ? number = 13
}

// todo. 결과값이 어떻게 나올지 생각해보기
function numberPlusTodo(){
    var number = 10;
    alert(number++); // ? 출력: ? / 최종: ?
    alert(--number); // ? 출력: ? / 최종: ?
    alert(++number); // ? 출력: ? / 최종: ?
    alert(number--); // ? 출력: ? / 최종: ?
    console.log(number); // ? 출력: ? / 최종: ?
}

// ? case.5 숫자 10이 담긴 변수 a와 숫자 20이 담긴 변수의 크기를 비교하고 결과 출력
function compareOperator() {
    var a = 10;
    var b = 20;
    // var result = a > b;
    // console.log("10 > 20 = " + result); // ? false로 반환

    var result = a != b;
    console.log("10 != 20 ? " + result); // ? true로 반환
}

// ? case.6 a변수에는 '여자', b변수에는 '웹디자이너' 라는 값이 저장되어 있다. 담겨있는 두 값이 모두 맞는지 result 변수에 저장 후 출력
function logicalOperater() {
    var a = '여자';
    var b = '웹디자이너';
    var result = (a=='여자') && (b=='웹디자이너');
    console.log('a는 여자이고, b는 웹디자이너 입니까?' + result);
}
// * &&는 둘 중 하나라도 틀리게 되면 false를 반환하기 때문에 둘 다 맞는 조건이어야 함

// ? case.7 a변수에는 '여자', b변수에는 '웹퍼블리셔' 라는 값이 저장되어 있다. 담겨있는 두 값 중 하나라도 맞는지 result 변수에 저장 후 출력
function logicalOperater2() {
    var a = '여자';
    var b = '웹퍼블리셔';
    var result = (a=='남자') || (b=='웹퍼블리셔');
    console.log('a가 남자이거나 b가 웹퍼블리셔입니까?' + result);
}
// * ||는 둘 중 하나라도 맞는 값이면 true를 반환