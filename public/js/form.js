// cores para o seletor
const select = document.querySelector('#color');
select.addEventListener('change', function() {
    const selectedColor = select.value;
    select.style.backgroundColor = selectedColor;
});

// validação do formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const nome = document.querySelector('#nome').value;
    const descricao = document.querySelector('#descricao').value;
    const color = select.value;
    const avaliacao = document.querySelector('input[name="avaliacao"]:checked');

    if (!nome || !descricao || !color || !avaliacao) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});