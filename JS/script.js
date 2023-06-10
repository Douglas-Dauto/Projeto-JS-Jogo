jogo();
function jogo() {
    const personagem = document.getElementById('personagem');
    const adversario = document.getElementById('adversario');
    const corpo = document.getElementsByTagName('body')[0];
    const lua = document.getElementById('lua');
    const menu = document.getElementById('menu');
    let qtdAdiversarios = 0;
    let move = true;
    
    menu.innerHTML = '<p>Clique para iniciar!</p>';

    setInterval(() => {
        if(move === false) { 
            gerarAdversario(qtdAdiversarios)
        }}, 5000);
    
    corpo.addEventListener('mousedown', () => {
        menu.innerHTML = '';

        if (move) {
            lua.style.transform = 'translateX(-100vw)'
            gerarAdversario(qtdAdiversarios);
            move = false;
        }
    
        personagem.style.transform = 'rotate(-5deg) translateY(-300px)'
    });
    
    corpo.addEventListener('mouseup', () => {
        for(i = 0;i < 150;i++) {
            personagem.style.transform += 'rotate(0.1deg) translateY(4.5px)'
        }
    });

    function gerarAdversario(numAdversario) {
        adversario.innerHTML = `<img id="adversario-img${numAdversario}" class="adversario__img" src="assets/img/geometry-dash-balls-png-download-geometry-dash-icons (2).png" alt="Adversário">`;
        
        let adversarioImg = document.getElementById(`adversario-img${numAdversario}`);
        adversarioImg.style.top = `${Math.random() * 60 + 10}%`;

        setTimeout(moverAdversario, 300);

        function moverAdversario() {
            adversarioImg.style.transform = 'translateX(-120vw) rotateY(180deg)';
            qtdAdiversarios++;
        }
    }
}
