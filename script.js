const select = document.getElementById('select-lei');
const res = document.getElementById('res');
const resP = document.getElementById('resP');
const resLD = document.getElementById('resLD');
const menuBtn = document.getElementById('menuBtn');
const sideBar = document.getElementById('sideBar');
const btnDados = document.getElementById('btnDados');
const resDados = document.getElementById('resDados');

menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
})

btnDados.addEventListener('click', () =>{
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)

    resDados.innerHTML = ''
    resDados.innerHTML += `Seu nome é ${nome}<br>`
    resDados.innerHTML += `Você tem ${idade} Anos<br>`
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

function gerarAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

function principalOHM(){
    let corrente = Number(document.getElementById('corrente').value)    
    let resistencia = Number(document.getElementById('resistencia').value)
    let tensao = 0
    
    res.innerHTML = ''

        tensao = corrente * resistencia
        res.innerHTML += `O valor da tensão é: ${tensao}`
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

function ordenarNumeros() {
    let resOrdenar = document.getElementById("resOrdenar")
    let arr = []
    for (let i = 1; i <= 20; i++) {
        arr.push(i)
    }
    resOrdenar.innerHTML = "Crescente: " + arr + "<br>";
    resOrdenar.innerHTML += "Decrescente: " + arr.reverse()
}

function BubbleSort() {
    let resBubble = document.getElementById("resBubble")
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = gerarAleatorio(1,20)
    }

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let aux = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = aux
            }
        }
    }

    resBubble.innerHTML = "Array ordenado: " + arr
}

function somarAleatorios() {
    let resSoma = document.getElementById("resSoma")
    let arr = []
    let soma = 0

    resSoma.innerHTML = ''

    for (let i = 0; i < 10; i++) {
        arr[i] = gerarAleatorio(1,220)
        soma += arr[i]
    }

    resSoma.innerHTML += `Numeros: ${arr} <br>`
    resSoma.innerHTML += `Soma: ${soma}`
}

function gerarMatriz(){
    let resMatriz = document.getElementById('resMatriz')
    let mat = []

    resMatriz.innerHTML = ''

    for(let i = 0; i < 3; i++){
        mat[i] = []
        for(let j = 0; j < 3; j++){
            mat[i][j] = gerarAleatorio(1, 20)

            resMatriz.innerHTML += `${mat[i][j]} |`
        }
        resMatriz.innerHTML += `<br>`
    }
}

function calcularIMC() {
    let resIMC = document.getElementById("resIMC")
    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("peso").value)
    let imc = 0

    resIMC.innerHTML = ''

    if (altura <= 0) {
        res.innerHTML = "Altura inválida!"
    }else if (peso <= 0) {
        res.innerHTML = "Peso inválido!"
    }else{
        imc = peso / (altura * altura)
        resIMC.innerHTML += `IMC: ${imc.toFixed(2)}`
    }
}

function converterTemperatura() {
    let resTemp = document.getElementById("resTemp")
    let conversao = document.getElementById("conversao").value.toUpperCase()
    let temperatura = Number(document.getElementById("temperatura").value)
    
    res.innerHTML = ""

    if (isNaN(temperatura) || temperatura <= 0) {
        res.innerHTML = "Temperatura inválida!"
    }else{
        if (conversao === "C") {
            let resultado = (temperatura - 32) * (5 / 9)
            res.innerHTML += `${temperatura} °F = ${resultado.toFixed(2)} °C"`
        } else if (conversao === "F") {
            let resultado = (temperatura * 9 / 5) + 32
            res.innerHTML += `${temperatura} °F = ${resultado.toFixed(2)} °C"`
        } else {
            res.innerHTML = "Digite 'C' ou 'F'."
        }
    }
}

function buscaLinear() {
    let resBusca = document.getElementById("resBusca")
    let num = Number(document.getElementById("num").value)
    let arr = [1,3,5,8,10,12,17,20,26,34]
    
    resBusca.innerHTML = ''

    if(num <= 0){
        resBusca.innerHTML += `Você deve digitar apenas números positivos!`
    }else{
        let posicao = arr.indexOf(num)
    
        if (posicao !== -1) {
            resBusca.innerHTML += `O número ${num} foi encontrado na posição ${posicao + 1}` 
        } else {
            resBusca.innerHTML = "Numero não encontrado"
        }
    }

}
