function playSound(elemt_Audio){
    document.querySelector(elemt_Audio).play();
    console.log(elemt_Audio);
    
}


const keyList =  document.querySelectorAll('.key');

let contador=0;

while(contador < 9){
    const key = keyList[contador];
    // console.log(key);
    const instrument = key.classList[1];
    console.log(instrument);
    const idAudio = `#sonido_${instrument}`;
    console.log(idAudio);

    key.onclick = function (){
        playSound(idAudio);
    };
    contador++;
}


