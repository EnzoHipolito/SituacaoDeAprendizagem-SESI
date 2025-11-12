const select = document.getElementById('select-lei');
const res = document.getElementById('res');
const resP = document.getElementById('resP');
const resLD = document.getElementById('resLD');
const menuBtn = document.getElementById('menuBtn');
const sideBar = document.getElementById('sideBar');

menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
})

select.addEventListener('change', () => {
    const valor = select.value;

    // Pega todas as seções (tensao, corrente, resistencia)
    const secoes = document.querySelectorAll("section");

    // Remove 'active' de todas
    secoes.forEach(sec => sec.classList.remove("active"));

    // Ativa a seção selecionada
    const ativa = document.getElementById(valor);
    if (ativa) {
        ativa.classList.add("active");
        history.pushState({ valor }, "", `#${valor}`);
    } else {
        history.pushState({}, "", window.location.pathname);
    }
});

function principalOHM(){
    let corrente = Number(document.getElementById('corrente').value)    
    let tensao = Number(document.getElementById('tensao').value)    
    let resistencia = Number(document.getElementById('resistencia').value)
    
    res.innerHTML = ''

    if (select.value === 'tensao'){
        tensao = corrente * resistencia
        res.innerHTML += `O valor da tensão é: ${tensao}`
    }
    if (select.value === 'corrente'){
        corrente = tensao / resistencia
        res.innerHTML += `O valor da corrente é: ${corrente}`
    }
    if (select.value === 'resistencia'){
        resistencia = tensao / corrente
        res.innerHTML += `O valor da resistencia é: ${resistencia}`
    }
}

function principalP(){
    let tensaoP = Number(document.getElementById('tensaoP').value)
    let correnteP = Number(document.getElementById('correnteP').value)
    let potencia = 0
    
    resP.innerHTML = ''
    
    console.log(tensaoP)
    console.log(correnteP)

    potencia = tensaoP * correnteP
    
    resP.innerHTML += `O valor da potencia é de: ${potencia}`
}

function principalLD(){
    let sensor = Number(document.getElementById('sensor').value)

    resLD.innerHTML = ''

    if(sensor < 0 || sensor > 1023){
        resLD.innerHTML += `Você deve digitar um valor entre 0 a 1023!`
    }
    if(sensor > 0 && sensor <= 306.9){
        resLD.innerHTML += `Pouca intensidade`
    }
    if(sensor > 306.9 && sensor <= 716.1){
        resLD.innerHTML += `Media intensidade`
    }
    if(sensor > 716.1 ){
        resLD.innerHTML += `Alta intensidade`
    }
}