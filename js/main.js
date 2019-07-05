const page = [];    // 실행중인 메뉴목록 true or false
const page_name = [];   //  메뉴목록 이름
const page_num = document.getElementsByClassName("visual").item(0); // 각 메뉴에 접근하기 위함
console.log(page_name);

/* 페이지 로딩시 초기화 */
function Init_page() {
    console.log("Init_page() 실행");
    for(let i = 0; i < page_num.childElementCount; i++) {
        page_name.push(page_num.children[i].id);
        page.push("false");
    }
    page[0] = 'true';

    for(let i = 0; i < page_num.childElementCount; i++) {
        if(page[i] === 'false') {
            document.getElementById(page_name[i]).style.display = "none";
        }
    }

    

    console.log(page_name);
    console.log(page);
}

/* 메뉴 목록 클릭시 body부분 화면 전환 */
function Update_page(num) {
    for(let i = 0; i< page_num.childElementCount; i++){
        if(page[i] === 'true') {
            document.getElementById(page_name[i]).style.display = "none";
            page[i] = 'false';
        }
    }
    page[num] = 'true';
    console.log("Update_page 함수 page : ",page);
    document.getElementById(page_name[num]).style.display = "block";
    /* STUDY 페이지 활성화시 PREV 버튼 숨김 */
    if(page_num[num] === 1) {
        let btn = document.getElementById("prev_btn");
        btn.style.display = "none";
    }
}


