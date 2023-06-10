jogo();
function jogo() {
    const personagem = document.getElementById('personagem');
    const adversario = document.getElementById('adversario');
    const corpo = document.getElementsByTagName('body')[0];
    const lua = document.getElementById('lua');
    const menu = document.getElementById('menu');
    let c = 0
    
    menu.innerHTML = '<p>Clique para iniciar!</p>';
    
    corpo.addEventListener('mousedown', () => {
        menu.innerHTML = '';

        if (c == 0) {
            lua.style.transform += 'translateX(-100vw)'
            c++
        }
    
        for(i = 0;i < 150;i++) {
            personagem.style.transform = 'rotate(-5deg) translateY(-300px)'
        }
    });
    
    corpo.addEventListener('mouseup', () => {
        for(i = 0;i < 150;i++) {
            personagem.style.transform += 'rotate(0.1deg) translateY(4.5px)'
        }
    });

    function gerarAdversario() {

    }
}
