let menu_icon=document.querySelector("#humberger_menu_icon");
let menu_list=document.querySelector("#humberger_menu_list");
menu_icon.addEventListener("click",function (){
    console.log("Function");
    menu_list.classList.toggle('show')
}
);