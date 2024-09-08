
document.getElementById('contatos').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

const botao = document.getElementById('show-iframe');
const iframe = document.getElementById('sign-in-iframe');
botao.addEventListener('click', function() 
{
    iframe.style.display = 'block';
});

window.addEventListener('message', function(event) {
    if (event.data === 'fechar') {
        if (iframe) {
            iframe.remove(); // Ou você pode usar iframe.remove() se quiser removê-lo completamente
        }
    }
});