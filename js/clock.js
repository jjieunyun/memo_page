//시계만들기

//0. html에서 태그 가져오기
const clock = document.querySelector("#clock");

//1. 시계를 1초마다 바뀌게하는 함수 만들기
//cf) Date라는 객체를 만들어서 숫자값으로 받아오면 1의자리수는 한 자리로 표현
function getClock() {
    const date = new Date(); 

    //1-1. 시계 단위 두자리로 표현 하기 ex. 1 -> 01
    //cf) padStart: 자릿수 맞추기 (단,string형에서만 가능함 string으로 형변환 -> padstart사용 )
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    return  `${hours}:${minutes}:${seconds}`;  //html에 문자열로 넣어주어야함
}

//2. 함수 불러와서 실행시키기
clock.innerHTML = getClock();

//3. setinterval을 통해 계속 바뀌게 만들기
setInterval(() => {clock.innerHTML=getClock();}, 1000);