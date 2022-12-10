const bar = document.getElementById('bar');
const menu = document.getElementById('menu');

menu.style.right = '-300px';
bar.onclick = function(){
    if(menu.style.right =='-300px'){
        menu.style.right = '0';
    }
    else{
        menu.style.right = '-300px';
    }
}
