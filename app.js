let dis = document.querySelector('.dis')
let keys = document.querySelectorAll('.key').forEach(elem=>{
    elem.addEventListener("click", ()=>{
        calp(elem.innerHTML)
    })
})

document.addEventListener('keydown',event=>{
    if((event.key).match(/[0-9%\/*\-+\(\)=.]|Backspace|Enter/)) calp(event.key)
})

function calp(elem){
    let value
    if(elem.match(/=|Enter/)){
        try{
            dis.innerHTML = eval(dis.innerHTML);
            // dis.innerHTML = Math.trunc(eval(dis.innerHTML));
        }catch{
            let oldValue = dis.innerHTML;
            let newValue = 'Это вырожение пока еще не допустима!';
            dis.innerHTML = newValue;
            setTimeout(()=>{
                dis.innerHTML = oldValue;
            },1500);
        }
    }else if(elem == 'AS'){
        dis.innerHTML = '';
    }else if(elem.match(/C|Backspace/)){
        dis.innerHTML = dis.innerHTML.slice(0,-1);
    }else{
        dis.innerHTML += elem;
    }
}