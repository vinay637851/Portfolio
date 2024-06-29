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