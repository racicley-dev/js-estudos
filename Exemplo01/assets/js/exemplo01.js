window.onload = ()=>{

    let bt1 = document.getElementById('btn1');
    let bt2 = document.getElementById('btn2');
    var numero = document.getElementsByTagName('span');

    bt1.addEventListener('click', ()=>{
        numero[0].innerHTML--;
        mudaCor(numero);
    });

    bt2.addEventListener('click', ()=>{
        numero[0].innerHTML++;
        mudaCor(numero);
    });

    function mudaCor(numero){
        if(numero[0].innerHTML < 0){
            numero[0].style.color = 'red';
        }else{
            numero[0].style.color = 'burlywood'; 
        }
    }
}