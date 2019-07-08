const menu_status_arr = []; // 실행중인 메뉴목록 true or false
const menu_name_arr = []; //  메뉴목록 이름
const menu = document.getElementsByClassName("visual").item(0); // 각 메뉴에 접근하기 위함

const study_iframe = document.getElementsByClassName("study-page").item(0); //  Study 페이지의 각 iframe에 접근하기 위함
const study_iframe_name = []; //  iframe 목록 이름
const num_of_iframe = study_iframe.childElementCount; //  iframe의 개수
let now_page;
let study_page_init_status = 'false';

/* 페이지 로딩시 초기화 */
function Init_page() {
    console.log("Init_page() 실행");
    console.log("menu.childElementCount : ", menu.childElementCount);
    for (let i = 0; i < menu.childElementCount; i++) {
        menu_name_arr.push(menu.children[i].id);
        menu_status_arr.push('false');
    }
    menu_status_arr[3] = 'true';    //  home-page로 초기화

    for (let i = 0; i < menu.childElementCount; i++) {
        if (menu_status_arr[i] === 'false') {
            document.getElementById(menu_name_arr[i]).style.display = "none";
        }
    }
    console.log("menu_name_arr :", menu_name_arr);
    console.log("menu_status_arr :", menu_status_arr);
}

/* 메뉴 목록 클릭시 body부분 화면 전환 */
function Update_page(num) {
    console.log("Update_page() 실행");
    for (let i = 0; i < menu.childElementCount; i++) {
        if (menu_status_arr[i] === 'true') {
            document.getElementById(menu_name_arr[i]).style.display = "none";
            menu_status_arr[i] = 'false';
        }
    }
    menu_status_arr[num] = 'true';
    console.log("Update_page()의 menu 리스트  : ", menu);

    document.getElementById(menu_name_arr[num]).style.display = "block";

    /* Study 메뉴 */
    if (menu_name_arr[num] === 'study_menu') {
        console.log("Study 메뉴 시작");
        now_page = 0;
        Init_study_page();

        console.log(study_iframe_name);
        let visual_height = document.getElementById("visual");
        visual_height.style.height = "1900px";
    } else if (menu_name_arr[num] === "trip_menu") {
        console.log("Trip 메뉴 시작");
        let visual_height = document.getElementById("visual");
        visual_height.style.height = "1900px";
    } else {
        let visual_height = document.getElementById("visual");
        visual_height.style.height = "auto";
    }

}
