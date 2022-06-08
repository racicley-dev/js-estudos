

const BASE_URL = 'https://api.scryfall.com/cards/random';

let img = document.getElementById('img_carta');
let btn = document.getElementsByTagName('button');
let nome = document.getElementById('nome_carta');

let custo_mana = document.getElementById('custo_c');
let efeito = document.getElementById('efeito');
let tipo = document.getElementById('tipo');
let cores = document.getElementById('cores');

const pegaCarta = async () => {
    
    try{
        let arr = [];
        
        const data = await fetch(BASE_URL);
        const simbolos = await fetch('https://api.scryfall.com/symbology');
        
        
        const json = await data.json();
        const simjson = await simbolos.json();


        arr.push(json);
        arr.push(simjson);

        return arr;
    }catch(e){
        console.log(e);
    }
}


const loadImg = async() =>{
    let ar = []
    
    let obj = {}
    let sim = {}
    
    ar = await pegaCarta();
    
    obj = ar[0];
    sim = ar[1];

    //console.log(sim.data);
    var custo_final = obj.mana_cost;
    for(let item of sim.data){
        if(custo_final.indexOf(item['symbol']) !== -1){
            //console.log(item['svg_uri']);
            //console.log(item['symbol']);
            let nome_img = '<img src=\"'+item['svg_uri']+'\" id=\"custo_c\">';
        
            custo_final = custo_final.replaceAll(item['symbol'], nome_img);
            console.log(custo_final);
        }
    }
    //console.log(custo_final);

    img.src = obj.image_uris.large;
    nome.innerHTML ="Nome da carta: "+ obj.name;
    custo_mana.innerHTML ="Custo de mana: "+ custo_final;
    efeito.innerHTML ='Efeito da Carta: '+ obj.oracle_text;
    tipo.innerHTML = 'Tipo da carta: '+ obj.type_line;

    //console.log(obj);
}

btn[0].addEventListener('click', loadImg);




///Uma forma de consumir a API Scryfall
/*
const response = fetch('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3').then(
    (responseData)=>{
        return responseData.json();
    }
)
.then(
    (jsonData)=>{
        console.log(jsonData.data);
    }
);*/