window.onscroll = function showHeader (){
    const header = document.querySelector(".header")
    if(window.pageYOffset>200){
        header.classList.add("header_fixed");
    }

}