//로그인 동작 만들기 -> 아이디를 입력하고 로그인버튼을 누르면 반갑습니다 문구 출력
// 0. getElementById를 이용하면 HTML의 아이디값을 가져오기
const loginform = document.getElementById("login_form");

// 0-1. quertySelector를 이용하면 CSS선택자를 이용해서 요소의 첫번째 태그f를 가져옴
//cf) querySelectorAll -> 배열 전체를 가져오기
const loginInput = document.querySelector("#login_form input");
const  greeting = document.querySelector("#greeting");  //값이 변할 일이 없기 때문에 전역변수를 사용해도 됨.


const memoFormShow = document.querySelector("#memo_form")


//1. input값 가져오는 함수만들기
//cf) console에서 값이 제대로 반영되는지 확인을 하고 -> html로 출력해줘야함
function onLoginSumbit(event) {
    //1-1. 실행되었을때, 새로고침해서 없어지는 것을 막아주기
    //cf) preventDefault(): 실행되었을때 새로고침이 되지않게 해줌
    //ch) console.dir(loginInput)  //dir -> 디렉토리 loginInput객체의 속성깂을 보려고 함
    event.preventDefault(); 
    
    //1-2. log in할때, 넣은 값(value)를 <h1>greeting</h1>에 띄워주기
    //cf)innerHTML -> 태그안에 작성하겠다.
    const userName = loginInput.value;
    greeting.innerHTML= "반갑습니다! " + userName + "님"; 

    //1-3. 로그인 input은 화면에 보이지 않게하고, memo form은 보이게하게
    //cf)classlist: 태그에 class를 추가하거나 제거하는 함. [class="hidden" 앞에 아무부호 없음]
    //해당 요소의 클래스 속성값을 추가, 같은 클래스명 있는 경우 무시
    loginform.classList.add("hidden")  
    memoFormShow.classList.remove("hidden");
}
    //2. submit제출 버튼을누를때(이벤트가 발생할 때) 함수가 실행되도록 하기
    //cf) EventListener : DOM객체. addEventListener(이벤트명, 실행할 함수명, 옵션)
    //이벤트가 발생할 때 어떤 함수를 실행시켜 주는 역할
    loginform.addEventListener("submit",onLoginSumbit);  
