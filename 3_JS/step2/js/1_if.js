/*
    * 조건문
    * 
    * 실무사용의 예
    * 1. 로그인 후 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    * 2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    * 3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    * 4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    * 5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	* if(273 < 100){
	* 	표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
	* 	 alert('273<100=>true');
	* }
	* alert('종료');
    
*/

// todo.1 현재 시각이 오후인지 오전인지
function amORpm() {
    var date = new Date(); // ? 현재 시간을 불러오는 전역함수
    console.log(date);

    var hour = date.getHours();
    console.log(hour);

    if(hour < 12) {
        alert('오전입니다');
    }
    if(hour >= 12) {
        alert('오후입니다');
    }
}

// todo.2 prompt로 임의의 숫자를 입력 받아 양수인지 음수인지 판단해주는 함수 만들기
function numbJudgment() {
    var numb = window.prompt('숫자를 입력하세요','양수, 음수 상관없음');

    if(numb > 0) {
        alert('양수입니다');
    } else if(numb < 0) {
        alert('음수입니다');
    } else {
        alert('입력하신 수가 0이거나 잘못된 입력값입니다');
    }
}

// todo.3 사용쟈 id "eunbi"와 password "1234"의 정보가 틀릴 경우 틀린 정보에 대한 오류 메세지 출력
function userInfoCheck() {
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 비밀번호');

    if (userID == "eunbi" && userPW == "1234") {
        alert("로그인 되었습니다.");
    } else if (userID != "eunbi") {
        alert('ID가 존재하지 않습니다.');
    } else {
        alert("password가 틀렸습니다.");
    }
}

// todo.4 코드 간소화 시키기
function btnMouseEx() {
    var clickBtn = window.prompt('누르실 마우스 버튼을 입력하세요 (왼쪽, 오른쪽, 가운데)');

    // if(clickBtn == "왼쪽") {
    //     document.write("왼쪽!");
    // } else if(clickBtn == "오른쪽") {
    //     document.write("오른쪽!");
    // } else if (clickBtn == "가운데") {
    //     document.write("가운데!");
    // } else {
    //     document.write("올바른 값을 입력하세요.");
    // }

    if(clickBtn == "왼쪽" || clickBtn == "오른쪽" || clickBtn == "가운데") {
        document.write(clickBtn + '!');
    } else {
        document.write('올바른 값을 입력하세요.');
    }
}