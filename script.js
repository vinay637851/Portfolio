let skill_contant=document.getElementsByClassName('skill-contant')[0];
function move(ele){
    let data=Array.from(ele.parentNode.children).indexOf(ele);
    for(let i=0;i<skill_contant.children.length;i++){
        if(i==data){
            skill_contant.children[i].style.zIndex="0";
        }
        else{
            skill_contant.children[i].style.zIndex="-1";
        }
    }
}
function edcucation_move(){
    let part1=document.getElementsByClassName("education-container")[0];
    part1.children[0].style.top="0";
    part1.children[1].style.top="0";
}
let idx=0;
function list_on(){
    if(idx%2==0)
        document.getElementsByClassName("fa-bars")[0].parentElement.children[0].style.visibility="visible"
    else
        document.getElementsByClassName("fa-bars")[0].parentElement.children[0].style.visibility="hidden"
    idx++;
}
function list(ele){
    console.log(ele.parentNode)
    ele.parentElement.style.visibility="hidden"
}