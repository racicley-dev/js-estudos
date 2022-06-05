window.onload = () =>{
    let btn_add = document.getElementsByTagName('button');
    let inp_texto = document.getElementById('entrada');
    let checkbox = document.getElementsByTagName('li');

    function montaElemento(valor){
        let elemento = document.createElement('li');
        let check = document.createElement('input');
        check.type='checkbox';

        elemento.appendChild(check);
        elemento.innerHTML += valor;
        document.querySelector('ul').appendChild(elemento); 
    }

    function trocaClasse(){
        if(this.firstChild.checked != true){
            this.className = 'none';
        }else{
            this.className = 'riscado';
        }
    }

    btn_add[0].addEventListener('click', ()=>{
        //console.log(inp_texto.value);
        montaElemento(inp_texto.value);

        for(let element of checkbox){
            element.addEventListener('click', trocaClasse)
        }
    });

    
    


}