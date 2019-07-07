function Init_study_page() {
    console.log("Init_study_page() 실행");
    console.log("study_iframe 목록 : ", study_iframe);


    for (let i = 0; i < num_of_iframe; i++) {
        if(study_page_init_status === 'false') {
            study_iframe_name.push(study_iframe.children[i].id);
        }
        if (i !== 0) {
            document.getElementById(study_iframe_name[i]).style.display = "none";
        }
    }
    study_page_init_status = 'true';
    document.getElementById("study_page1").style.display = "block";
    Button_study_page(0);
}

/* Study 페이지 Next 버튼 클릭시 */
function Next_study_page() {
    console.log("Next_study_page() 실행"); 
    document.getElementById(study_iframe.children[now_page].id).style.display = "none";
    document.getElementById(study_iframe.children[++now_page].id).style.display = "block";
    Button_study_page();
}

/*  Study 페이지 Prev 버튼 클릭시 */
function Prev_study_page() {
    console.log("Prev_study_page() 실행");
    document.getElementById(study_iframe.children[now_page].id).style.display = "none";
    document.getElementById(study_iframe.children[--now_page].id).style.display = "block";
    Button_study_page();
}

/* Study 페이지 next, prev 버튼 상태 변경 */
function Button_study_page() {
   console.log("Button_study_page() 실행");
   let prev_btn = document.getElementById("prev_btn");
   let next_btn = document.getElementById("next_btn");
   switch(now_page) {
        case 0:
           prev_btn.style.display = "none";
           break;
        case 1:
            prev_btn.style.display = "block";
            break;
        case num_of_iframe-2:
            next_btn.style.display = "block";
            break;
        case num_of_iframe-1:
            next_btn.style.display = "none";
            break;
   }
}