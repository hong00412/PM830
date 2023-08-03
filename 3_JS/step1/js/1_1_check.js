
// alert('hello js!');
// * 이렇게 함수를 전역적으로 풀어놓지 않음(원할 때만 부를 수 없고 무조건적으로 활성화 되기 때문)

function runAlert() {
    alert('hello, js!');
}
// runAlert();
// * 이렇게 함수화 시키는 것
// *    -> 이렇게 되면 alert이라는 함수는 밖에 있는 runAlert 함수에 갇혀 있게 되고
// *        runAlert 함수가 호출되어야 실행이 됨(멋대로 작동되지 않음)

// * 파일에서 바로 호출하는 게 아니라 console창에서도 함수를 호출해 실행시킬 수 있음
// *    -> console창에서는 runAlert();이라고 하면 호출, 그냥 runAlert만 적으면 어떤 함수인지 나열해줌

function runWrite() {
    document.write('hi' + '<br>' + 'js!');
}
// * document.write라는 함수는 ()에 있는 텍스트를 브라우저 페이지에 작성시켜줌
// *    -> <br>을 적을 경우 html 태그로 인식해 줄바꿈 됨

function runLog() {
    console.log('hi\njs!');
}
// * \n 은 html의 <br> 태그와 같이 줄바꿈을 할 수 있음
// * console.log는 함수 실행 시 ()에 있는 텍스트를 개발자도구 - console 탭에 작성시킴

// ! 위 3가지의 경우 모두 출력 함수
// *    -> 무언가 만들 때 꼭 필요하거나 넣어야 하는 함수들은 아니지만
// *       개발을 시작하는 단계에서는 아직 익숙하지 않기 때문에 실수를 하게 되어
// *       그 실수 범위를 줄이기 위해 사용하는게 일반적임