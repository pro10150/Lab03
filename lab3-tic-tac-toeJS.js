let timeCount = 0;
let roast = ["You lose a bot? CRINGE.","Obviously you need some training. NOOB","YOU LOSE TO A BOTTTTT","LMAO","This bot can't even think. HOW!?","It's just a random bot. HOW DID YOU LOSE","PFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF","F"];

function onClick(x,y){
    let imgSrc = document.getElementById('tic').rows[x].cells[y].innerHTML;
    let gameOver = false;
    if(imgSrc === '<img src="https://www.panelplus.co.th/uploads/collection/5be55-white-mk630n.jpg" alt="" class="img-thumbnail">'){
        document.getElementById('tic').rows[x].cells[y].innerHTML = '<img src="https://image.flaticon.com/icons/png/512/75/75519.png" alt="" class="img-thumbnail">';
        timeCount = 0;
        if(timeCount === 0 && check() === false && checkForDraw() === true){
            
            console.log('Draw!');
            Endgame();
            gameOver = true;
            document.getElementById('results').innerHTML = 'Draw! ';
            
        }
        if(check()===true){
            console.log('Win!');
            Endgame(); 
            gameOver = true;
            document.getElementById('results').innerHTML = 'You Win!';
        } 
        if(checkForDraw() === false && gameOver === false){
            while(true){
                let i = Math.floor(Math.random() * 3);
                let j = Math.floor(Math.random() * 3);
                if(document.getElementById('tic').rows[i].cells[j].innerHTML === '<img src="https://www.panelplus.co.th/uploads/collection/5be55-white-mk630n.jpg" alt="" class="img-thumbnail">'){
                    document.getElementById('tic').rows[i].cells[j].innerHTML = '<img src="https://img2.pngio.com/png-o-free-opng-transparent-images-11532-pngio-black-letter-o-png-2000_2000.png" alt="" class="img-thumbnail">';
                    timeCount++;
                    checker = true;
                    if(check()===true){
                        console.log('bot Win!');
                        Endgame();
                        document.getElementById('results').innerHTML = 'Bot Win! ' + roast[Math.floor(Math.random() * (roast.length))];
                    }
                break;
                }
            }
            
        }
        
        
        
    }
}
function Endgame(){
    
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(document.getElementById('tic').rows[i].cells[j].innerHTML === '<img src="https://www.panelplus.co.th/uploads/collection/5be55-white-mk630n.jpg" alt="" class="img-thumbnail">'){
                document.getElementById('tic').rows[i].cells[j].innerHTML = '<img src="https://www.cdg.co.th/website/wp-content/uploads/2016/06/white-bg.jpg" alt="" class="img-thumbnail">'
            
            }
        }
    }
    let button = document.getElementById("reset");
    button.style.display = 'inline';
    button.addEventListener('click',function() {reset()},true);
    
}

function reset(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            document.getElementById('tic').rows[i].cells[j].innerHTML = '<img src="https://www.panelplus.co.th/uploads/collection/5be55-white-mk630n.jpg" alt="" class="img-thumbnail">'

        }
    }
    let button = document.getElementById("reset");
    button.style.display = 'none';
    document.getElementById('results').innerHTML = '';
    document.body.removeEventListener('click',function() {reset()},false);
    
}

function check(){
    let flag;
    if(checkX() === true) return true;
    else if(checkO() === true) return true;
    else return false;
}
function checkX(){
    let flag = false;
    let src = '<img src="https://image.flaticon.com/icons/png/512/75/75519.png" alt="" class="img-thumbnail">';
    if(checkDiagonal(src) === true){
        if(checkHorizontal(src) === true){
            if(checkVertical(src) === true){
                return true;
            }
            else return true;
        }
        else{
            if(checkVertical(src) === true){
                return true;
            }
            else return true;
        }
    }
    else{
        if(checkHorizontal(src) === true){
            if(checkVertical(src) === true){
                return true;
            }
            else return true;
        }
        else{
            if(checkVertical(src) === true){
                return true;
            }
            else return false;
        }
    }
}
function checkO(){
    let flag = false;
    let src = '<img src="https://img2.pngio.com/png-o-free-opng-transparent-images-11532-pngio-black-letter-o-png-2000_2000.png" alt="" class="img-thumbnail">';
    if(checkDiagonal(src) === true){
        if(checkHorizontal(src) === true){
            if(checkVertical(src) === true){
                return true;
            }
            else return true;
        }
        else{
            if(checkVertical(src) === true){
                return true;
            }
            else return true;
        }
    }
    else{
        if(checkHorizontal(src) === true){
            if(checkVertical(src) === true){
                return true;
            }
            else return true;
        }
        else{
            if(checkVertical(src) === true){
                return true;
            }
            else return false;
        }
    }
}

function checkHorizontal(src){
    let flag = false;
    let i,j;
    
        if(document.getElementById('tic').rows[0].cells[0].innerHTML === src){
                if(document.getElementById('tic').rows[0].cells[1].innerHTML === src){
                    if(document.getElementById('tic').rows[0].cells[2].innerHTML === src){
                        return  true;
                        
                    }
                    
                }
            }
                 
        if(document.getElementById('tic').rows[1].cells[0].innerHTML === src){
                if(document.getElementById('tic').rows[1].cells[1].innerHTML === src){
                    if(document.getElementById('tic').rows[1].cells[2].innerHTML === src){
                        return  true;
                        
                    }
                    
                }
                
            }
        if(document.getElementById('tic').rows[2].cells[0].innerHTML === src){
                if(document.getElementById('tic').rows[2].cells[1].innerHTML === src){
                    if(document.getElementById('tic').rows[2].cells[2].innerHTML === src){
                        return  true;
                        
                    }
                    
                }
                
            }
        
            return false;
        

    
    
        
}
function checkVertical(src){
    let flag = false;
    let i;
    
    if(document.getElementById('tic').rows[0].cells[0].innerHTML === src){
        if(document.getElementById('tic').rows[1].cells[0].innerHTML === src){
            if(document.getElementById('tic').rows[2].cells[0].innerHTML === src){
                return true;
                
            }
            
        }
        
    }
    
    if(document.getElementById('tic').rows[0].cells[1].innerHTML === src){
        if(document.getElementById('tic').rows[1].cells[1].innerHTML === src){
            if(document.getElementById('tic').rows[2].cells[1].innerHTML === src){
                return  true;
                
            }
            
        }
        
    }
    
    if(document.getElementById('tic').rows[0].cells[2].innerHTML === src){
        if(document.getElementById('tic').rows[1].cells[2].innerHTML === src){
            if(document.getElementById('tic').rows[2].cells[2].innerHTML === src){
                return  true;
                
            }
            
        }
        
    }
    
        return false;
    
    
    
   
}

function checkDiagonal(src){
    let flag = false;
    let i;
    
        if(document.getElementById('tic').rows[0].cells[0].innerHTML === src){
        if(document.getElementById('tic').rows[1].cells[1].innerHTML === src){
            if(document.getElementById('tic').rows[2].cells[2].innerHTML === src){
                return  true;
            }
            
        }
        
    }
    
    if(document.getElementById('tic').rows[0].cells[2].innerHTML === src){
        if(document.getElementById('tic').rows[1].cells[1].innerHTML === src){
            if(document.getElementById('tic').rows[2].cells[0].innerHTML === src){
                return  true;
            }
            
        }
        
    }
    
        return  false; 
      
    
    
    
}

function checkForDraw(){
    let whiteCount = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(document.getElementById('tic').rows[i].cells[j].innerHTML === '<img src="https://www.panelplus.co.th/uploads/collection/5be55-white-mk630n.jpg" alt="" class="img-thumbnail">'){
                whiteCount++;
            }
     
        }
    }
    if(whiteCount === 0){
        return true;
    }
    else return false;
        
}

let row = document.querySelectorAll('tr');

for(let i=0;i<row.length;i++){
    let button = document.getElementById("reset");
    button.style.display = 'none';
    let col = document.querySelectorAll('#' +row[i].id+' td');
    for(let j=0;j<col.length;j++){
        col[j].addEventListener('click',function() {onClick(i,j)});
        
    }
}

