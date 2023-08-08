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
    ? String
    * String(value); - 문자형으로 변환(Number()와 사용 형태가 같음, 예전부터 사용하던 거고 광범위함)

    ? .toString()
    * Number(value).toString(); - 괄호 안에 @진수를 넣으면 @진법문자로 변경(16을 넣으면 16진수로), 괄호를 비워둘 경우 문자형으로 변환.
    *                               String(); 보다는 toString을 많이 쓰는 추세

    ? .toFixed()
    * Number.toFixed() - 소수점자리수는 반올림 하고 실수 문자형으로 변환.
*/

/*
    ? parse
    * 1. parseInt(value); - 정수 형
    * 2. parseFloat(value); - 실수 형
    
    ? Number
    * Number(value); - 정수 형,실수 형
*/
