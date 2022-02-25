//배경 움직이게하기

//0. 이미지 파일의 이름을 베열로 가져오기
const images = ["0.jpg","1.jpg","2.jpg","3.jpg"]


//1. mathrandom을 이용해 이미지 파일 이름을 랜덤으로 가져오기
//cf)math.random :0~1 사이의 실수를 리턴합니다.(1 미포함) * 이미지의 갯수(배열의 갯수)    
//cf) math.floor : 소수점 1째자리 이후의 숫자를 버림하고, 정수를 리턴합니다.
const chooseImges = images[  Math.floor(Math.random() * images.length)];
            //아래의 식을 위의 한줄로 표현함
            //let index = Math.floor(Math.random() * images.length) ;
            // const chooseImages = images[index]; r

//2. body 전체부분 백그라운드 들고오기
//cf)CSS style을 이용해서 bodyBackground에 추가하면 배경화면이 랜덤으로 바뀌지 않음.
//style = "background : url="이미지주소";" ->스타일값이 고정되어서 나옴  -> js로 랜덤으로 되게만들기
const bodyBackground = document.querySelector("body");

//2-1. 랜덤으로 출력되게 만든 이미지를 문자열로 삽입해서 이미지가 출력되게하기
bodyBackground.style.background = `url(./img/${chooseImges})`;


