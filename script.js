const select = document.getElementById('select-lei');

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
    
}