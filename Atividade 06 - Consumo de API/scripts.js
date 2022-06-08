

const BASE_URL = 'https://api.scryfall.com/cards/random';

let img = document.getElementById('img_carta');
let btn = document.getElementsByTagName('button');
let nome = document.getElementById('nome_carta');

let custo_mana = document.getElementById('custo_c');
let efeito = document.getElementById('efeito');
let tipo = document.getElementById('tipo');
let cores = document.getElementById('cores');

var carta = {
    nome:'',
    img:'',
    cmc:'',
    cor:'',
    custo_mana:'',
    raridade: ''
}

const pegaCarta = async () => {
    
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        //const [name, image_uris, cmc, colors, mana_cost, rarity] = json;

        //carta.nome = json.name;
        //carta.img = json.image_uris.large;


        return json;
    }catch(e){
        console.log(e);
    }
}


const loadImg = async() =>{
    let obj = {}
    obj = await pegaCarta();
    
    img.src = obj.image_uris.large;
    nome.innerHTML = obj.name;
    custo_mana.innerHTML = obj.mana_cost;
    efeito.innerHTML = obj.oracle_text;
    tipo.innerHTML = obj.type_line;

    console.log(obj);
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