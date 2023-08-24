let turn="x"
let square=[];
let title=document.querySelector(".title");
let Second_player=document.getElementById('Second_player')
let First_player=document.getElementById('First_player')

function detectwinner(){

    for( let i=1;i<10;i++){
        square[i]=document.getElementById('item'+ i).innerHTML;

    }
    function winner(num1,num2,num3){
        title.innerHTML=`${square[num1]} winner`
        document.getElementById('item'+num1).style.background ='#000';
        document.getElementById('item'+num2).style.background ='#000';
        document.getElementById('item'+num3).style.background ='#000';
        setInterval(function(){title.innerHTML+='.'},1000);
        setTimeout(() => {
            location.reload()
            
        }, 4000);

    }

    if(square[1] == square[2] && square[2] == square[3] && square[1] != ''){
   winner(1,2,3)

    }else if(square[4]==square[5]&& square[5]==square[6]&& square[6]!=''){
        winner(4,5,6)

    }else if(square[7]==square[8]&& square[8]==square[9]&& square[9]!=''){
        winner(7,8,9)
        
    }else if(square[1]==square[4]&& square[4]==square[7]&& square[7]!=''){
        winner(1,4,7)
        
    }
    else if(square[2]==square[5]&& square[5]==square[8]&& square[5]!=''){
        winner(2,5,8)
        
    }
    else if(square[3]==square[6]&& square[6]==square[9]&& square[9]!=''){
        winner(3,6,9)
        
    }else if(square[1]==square[5]&& square[5]==square[9]&& square[9]!=''){
        winner(1,5,9)
        
    }else if(square[3]==square[5]&& square[5]==square[7]&& square[7]!=''){
        winner(3,5,7)
        
    }else if(square[1]!=''&&square[2]!=''&&square[3]!=''&&square[4]!=''&&square[5]!=''&&square[6]!=''&&square[7]!=''&&square[8]!=''&&square[9]!='' ){
title.innerHTML=` equality`;
setInterval(function(){title.innerHTML+='.'},1000);
setTimeout(() => {
    location.reload()
    
}, 3000);
    }

}

function game(id){

    let element=document.getElementById(id);
    if(turn==='x'&& element.innerHTML==''){
        element.innerHTML='x';
        turn="o"
        title.innerHTML='O turn'




    }else if(turn==='o' && element.innerHTML==''){
        element.innerHTML='o';
        turn="x"
        title.innerHTML='X turn'

    }
    detectwinner()
}
