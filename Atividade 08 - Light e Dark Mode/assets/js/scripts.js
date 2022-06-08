let btn = document.getElementById('btn-trocar');
let main = document.getElementsByTagName('main');
let titulo = document.getElementById('title');

btn.addEventListener('click',()=>{
    if(btn.classList[0] = 'dark_mode'){
        //Trocando as classes dos botões
        btn.classList.toggle('dark_mode');
        btn.classList.toggle('light_mode');
        if(btn.classList[0] == 'light_mode'){
            titulo.innerHTML = 'Light MODE ON';
            btn.innerHTML = 'Dark Mode';
        }else{
            titulo.innerHTML = 'Dark MODE ON';
            btn.innerHTML = 'Light Mode';
        }

        //Trocando o fundo da Tag main
        main[0].classList.toggle('main_light');
        main[0].classList.toggle('main_dark');

        //trocando a classe do titulo   
        titulo.classList.toggle('dark_mode_title');
        titulo.classList.toggle('light_mode_title');
    }else{

    }
});