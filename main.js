(()=>{
    'use strict';

    const form = document.querySelector('#form');
    const btnSoma = document.querySelector('#somar')

    const btnSave = document.querySelector('#save');

    const output = document.querySelector('.output');

    let arr = [];

    const addValue = (e)=>{

        e.preventDefault()

        let textContent = document.querySelector('#textContent');
        let textConvertNumber = Number(textContent.value);

        if(isNaN(textConvertNumber) || textConvertNumber == 0){
            console.log('somente numeros')
            return false
        }else{
            arr.push(textConvertNumber);
            alert(`numero ${textConvertNumber} adicionado na lista`)
            textContent.value = ''
            textContent.focus()
        }
    }
    const somarArrays = ()=>{
        let indiceDaSoma = 0;
        for(let i = 0;i< arr.length;i++){
            indiceDaSoma+=arr[i];
        }
       if(indiceDaSoma === 0){
        return false
       }else{
        output.classList.add('visible')
        let p = document.querySelector('p').textContent = indiceDaSoma;
        console.log(p)
       }

        const crash = document.querySelector("#crash");
        crash.addEventListener('click',()=>{
            output.classList.remove('visible')
            let p = document.querySelector('p').textContent = "";
        })
    }
    const saveArray = ()=>{
        const saveArr = [arr]
        let indiceDaSoma = 0;
        for(let i = 0;i< arr.length;i++){
            indiceDaSoma+=arr[i];
        }
        if(saveArr === [] || indiceDaSoma == 0){
            return false
        }else{
            alert(`Salvo [${saveArr}] `+` soma destes numeros ${indiceDaSoma}`)
        }
    }

    btnSave.addEventListener('click',saveArray)
    
    btnSoma.addEventListener('click',somarArrays)

    form.addEventListener('submit',addValue)


})();
