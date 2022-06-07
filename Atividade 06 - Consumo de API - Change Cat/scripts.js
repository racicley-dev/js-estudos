const BASE_URL = 'https://thatcopy.pw/catapi/rest';



const pegaGatos = async () => {
    
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }catch(e){
        console.log(e);
    }
}


const loadImg = async() =>{
    console.log(await pegaGatos());
}

loadImg();