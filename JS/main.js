var menu;
var element = document.getElementById("personnal-menu");
var menu = document.getElementById("menu");
var visible = false;
var clicked = false;
document.addEventListener("click",onClick);
document.addEventListener("mouseover",onMouseOver);

function onClick(){
    menu.style.display = 'inline';
}
// function onMouseOver(){
//     if(mouseover('menu')){
//         visible = true; 
//         console.log(visible);
//     }
// }

// function appear(visible, clicked){
//     if (visible == true && clicked == true){
//     }   else{
//         menu.style.display = 'none';
//     }
// }