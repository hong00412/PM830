/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...
    *루프
    ! 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    ! 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/

// todo.1 이름을 10번 출력해보기
function namePrint10() {
    var userName = "eunbi";

    for (var i = 1; i <= 10; i++) {
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.2 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력.
function favorFluit() {
    var array = ['포도','딸기','메론','자두','파인애플','사과'];

    // console.log(array[0]);

    for(var i = 0; i < array.length; i++) {
        alert(array[i]);
    }
}

// todo.3 반절 피라미드 -> 다중 for문
function halfPyramid() {
    var star = '';
    for (var i = 1; i <= 10; i++) {
        for(var j = 0; j < i; j++) {
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
//  ! i = 1일 때 i <= 10을 비교하여 true가 떨어지고 첫번째 만나는 로직인 j for문에서 j = 0이 선언되어 있어 j < i가 true로 반환
//  !   true이기 때문에 star에 *이 하나 찍히고 j++로 1로 증가시켰는데 j < i 가 1 < 1이 되어 false를 반환하기 때문에 탈출하여 star += <br>로 넘어감
//  !   이 때 j for문은 탈출하면서 죽었고 br을 찍은 뒤 다시 i for문 초기로 돌아가 i++ 하여 i = 2가 되고 i <= 10을 비교하니 true가 되어
//  !   다시 j for문으로 들어감. 이 때 j for문에서 j는 0으로 초기화 되었기 때문에 j < i의 조건이 0 < 2, 1 < 2 이렇게 2번 충족하여 star += * 을 2번 돌게 됨(**이 찍힘)
//  !   위 로직이 반복되면서 i = 11이 되는 순간 i for문을 탈출하게 되고 그 밖에 있는 document.write에 쌓여 있던 star를 한꺼번에 찍어서 출력
//  !       -> document.write는 로직이 돌지 못 한게 아니라 i for문이 끝나지 않아서 본인의 순서를 기다렸던것뿐 출력문을 계속 쌓아온 후 한꺼번에 출력한 것