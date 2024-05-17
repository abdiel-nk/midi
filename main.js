function playSound(elemt_Audio){
    document.querySelector(elemt_Audio).play();
    console.log(elemt_Audio);
    
}
const keyList =  document.querySelectorAll('.key');

let contador=0;

for(contador =0; contador<keyList.length; contador++){
    const key = keyList[contador];
    const instrument = key.classList[1];

    const idAudio = `#sonido_${instrument}`;

    key.onclick = function(){
        playSound(idAudio);
    };

    key.onkeydown = function (event){
        console.log(event);
        if(event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('activa');
        }
    } 
    key.onkeyup = function(){
        key.classList.remove('activa');
    }
}


// while(contador < 9){
//     const key = keyList[contador];
//     // console.log(key);
//     const instrument = key.classList[1];
//     console.log(instrument);
//     const idAudio = `#sonido_${instrument}`;
//     console.log(idAudio);

//     key.onclick = function (){
//         playSound(idAudio);
//     };
//     contador++;
// }



