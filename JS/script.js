jogo();
function jogo() {
    const personagem = document.getElementById('personagem');
    const adversario = document.getElementById('adversario');
    const corpo = document.getElementsByTagName('body')[0];
    const lua = document.getElementById('lua');
    const menu = document.getElementById('menu');
    const contador = document.querySelector('#contador');
    let adversarioAtual;
    let qtdAdiversarios = 0;
    let move = true;
    let speed = 20;
    
    menu.innerHTML = '<p>Clique para iniciar!</p>';

    function botaoDown() {
        if(personagem.getBoundingClientRect().top < window.innerHeight) {
            menu.innerHTML = '';

            if (move) {
                lua.style.transform = 'translateX(-100vw)'
                gerarAdversario(qtdAdiversarios);
                move = false;
            }
        
            personagem.style.transform = 'rotate(-5deg) translateY(-300px)'
        }
    }

    function botaoUp() {
        for(i = 0;i < 150;i++) {
            personagem.style.transform += 'rotate(0.1deg) translateY(4.5px)'
        }
    }

    setInterval(() => {
        if(move === false && personagem.getBoundingClientRect().top < window.innerHeight) { 
            gerarAdversario(qtdAdiversarios)
        }}, 5000);
    
    corpo.addEventListener('mousedown', () => botaoDown());
    corpo.addEventListener('mouseup', () => botaoUp());

    window.document.addEventListener('keydown', (e) => {
        console.log(e)
        if(e.key === " ") {
            botaoDown()
        }
    });
    window.document.addEventListener('keyup', (e) => {
        if(e.key === " ") {
            botaoUp()
        }
    });

    function gerarAdversario(numAdversario) {
        adversario.innerHTML = `<img id="adversario-img${numAdversario}" class="adversario__img" src="assets/img/geometry-dash-balls-png-download-geometry-dash-icons (2).png" alt="Adversário">`;
        
        let adversarioImg = document.getElementById(`adversario-img${numAdversario}`);
        adversarioImg.style.top = `${Math.random() * 60 + 10}%`;

        setTimeout(moverAdversario, 300);

        function moverAdversario() {
            adversarioImg.style.transform = `translateX(-1${speed}vw) rotateY(180deg)`;
            qtdAdiversarios++;

            if(speed >= 99) {
                return;
            }
            speed++
        }

        adversarioAtual = adversarioImg;
    }

    setInterval(() => {
        if(adversarioAtual.getBoundingClientRect().left < 0) {
            contador.innerHTML = `${qtdAdiversarios}`;
        }
    }, 1000);

    setInterval(() => {
        if(personagem.getBoundingClientRect().top > window.innerHeight) {
            gameOver();

            corpo.addEventListener('click', () => {
                document.location.reload();
            });

            window.document.addEventListener('keypress', (e) => {
                if(e.key === " ") {
                    document.location.reload();
                }
            });
        }
    }, 500);

    function gameOver() {
        menu.innerHTML = 'Fim de jogo!';
        move = true;
    }
}
