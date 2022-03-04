//객체가져오기
const todoInput = document.querySelector("#memo_form input");
const todobutton = document.querySelector("#todo_button");

const todoBoard = document.querySelector("#todo_board");


todobutton.addEventListener("click", todoFormButton);

//1. 버튼동작 함수만들기
//버튼을 눌렀을 때 li요소를 생성하고 추가함.
function todoFormButton() {
    const li = document.createElement("li");
    //체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //체크박스에 이벤트 리스너 추가
    checkbox.addEventListener("click",todoCheck); //함수는 밑에


    //내용 : createTextNode
    const text = document.createTextNode(todoInput.value);

    //X버튼(삭제버튼)
    const button = document.createElement("button");
    button.textContent = "X" 

    //X버튼 이벤트 리스너 추가
    //cf) 이벤트리스너: 투두를 만든만큼 백그라운드에서 대기 -> 클릭하면 함수를 바로실행
    button.addEventListener("click",todoDelete);
    
    //li에 체크박스 내용과 X버튼 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    //ul에 li추가
    todoBoard.appendChild(li);
    todoInput.value = "";
}

//2. 체크박스 이벤트 리스너 함수
function todoCheck(event) {
    console.log(event.target)
    const checkbox = event.target; // 이름길어서 변수에 넣어줬음!
    if (checkbox.checked) {
        //체크박스가 checked되면 li의 색을 lightGray로 바꿈
        checkbox.parentNode.style.color = "lightGray";
        checkbox.parentNode.style.textDecoration = "line-through"
    }
    else {
        checkbox.parentNode.style.color = "black";
        
    }

    //체크박스가 checked가 아니면 li의 색을 black으로 바꿈
}

//3. X버튼 이벤트 리스너 함수
function todoDelete(event) { //event객체를 쓰는 이유 : 쿼리셀렉트를 쓸수 없기 때문에
    //checkbox를 통해서 li를 찾아서 삭제(remove사용)
    event.target.parentNode.remove();
}