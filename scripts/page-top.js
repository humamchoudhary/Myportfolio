const scroll_to_top = document.querySelector(".scroll-top-btn");

window.onscroll = function(){
    currentpos = window.scrollY;
        if (currentpos >= 200 ){
            scroll_to_top.classList.add("btn-active");
        
        }
        else{
        scroll_to_top.classList.remove("btn-active");
        }
}




function rem_btn_navactive(){
    if (nav.classList.contains(".nav-active")){
        
        scroll_to_top.classList.remove("btn-active");
    }
    else{
        scroll_to_top.classList.add("btn-active");
    }
}