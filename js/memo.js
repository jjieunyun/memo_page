//메모 동작 만들기 ->메모를 작성하고 확인을 누르면 메모가 추가되는 기능구현

//0. html에서 가져올 요소들을 만들어줌
//0-1. 메모보드 가져오기
const memoBoard = document.querySelector("#memo_board"); //메모보드 가져오기

//0-2.메모폼과 메모인풋 가져오기
const memoForm = document.querySelector("#memo_form");
const memoInput = document.querySelector("#memo_form input");

//2.배열을 만들어서 미리 작성된 메모를 저장하기 (for구문 사용)
//2-1. 미리쓰여진 메모는 배열에 넣어줌 (여러개를 만들때는 배열을 이용하는 것이 편리함)
const saveMemo = ["미리만들어진 메모입니다.", "미리만들어진 메모입니다. 2"] 
        //cf) 배열로 만들때 활용방법 예시
        const saveTime = [];
        const saveMemoForm = [  //규칙이 있는 값의 형태는 객체로 만들어주기
            {memo: "메모", time:"12:08"},
            {memo: "메모2", time:"12:09"}
        ];

//2-2. for문을 이용하여 div를 자동생성 해주기
//cf)createElement : 새로운 요소 생성하는 메소드
//cf) appendchild : 생성된 요소 추가
//cf)innerHTML -> 태그안에 작성하겠다.
for (let m of saveMemo) {
    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}



//3. submit을 눌렀을때 인풋에 있는 값을 가져오는 동작을 함수로 만들기
// 내용 : 메모보드에 바로 붙이는게 아니라 div태그를 가져오고 submit 했을때 value값을 가져와서 출력
        // text로 입력한 글을 div에 자동으로 추가해주기
//cf) console.log(memoInput.value) : 해당 요소 속성 확인하기
function  memoFormSubmit (event) {
    event.preventDefault(); 
    
    //3-1 새로운 요소(태그)를 만들어서 memoBoard(div요소)에 추가
    //cf) createElement : 새로운 요소 생성 ;
    //cf) appendchild : 성된 요소 추가. memoBoard에 요소추가
    //cf)innerHTML : 추가된 memo요소를 html추가
    let memo = document.createElement("div");  
    memoBoard.appendChild(memo)  //생성된 div를 추가해줌
    memo.innerHTML = memoInput.value+ "<br><br>" + getClock();
    memoInput.value = "";   //메모를 작성하고나면 value값 초기화해서 작성된 글 없어짐
    //console.dir(memoInput);
    memoInput.autofocus = true; //autofocus 실행
}

//4.submit제출 버튼을누를때(이벤트가 발생할 때) 함수가 실행되도록 하기
//EventListener : DOM객체. addEventListener(이벤트명, 실행할 함수명, 옵션)
memoForm.addEventListener("submit", memoFormSubmit);