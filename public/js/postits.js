// faz uma requisição para obter os postits
async function getAllPostits() {
    try {
        const response = await fetch('/postits');
        if (!response.ok) {
            throw new Error('Erro ao buscar post-its');
        }
        const postits = await response.json();
        return postits;
    } catch (error) {
        console.error('Erro:', error);
        return [];
    }
}

// cria os post-its dinamicamente
async function createPostits(postIts) {
    const container = document.getElementById('postItsContainer');
    container.innerHTML = ''; // limpa o container antes de adicionar novos post-its

    // tratativa caso não haja post-its
    if (postIts.length === 0) {
        const postitElement = document.createElement('div');
        postitElement.className = 'postit';
        postitElement.style.backgroundColor = '#fdfd96'; // cor amarela
        postitElement.innerHTML = `
          <p>Não há nenhum post-it para exibir.<p>
        `;

        container.appendChild(postitElement);
    } else {
        postIts.forEach(pi => {
            const postitElement = document.createElement('div');
            postitElement.className = 'postit';
            postitElement.style.backgroundColor = pi.color;
            postitElement.innerHTML = `
          <h2>${pi.nome}</h2>
          <p>${pi.descricao}<p>
        `;

            container.appendChild(postitElement);
        });
    }
}

// pega valores, cria post-its e atualiza contadores
async function updatePostits() {
    const postIts = await getAllPostits();
    await createPostits(postIts);
    document.getElementById('totalPostits').textContent = postIts.length;
    document.getElementById('avaliacaoMedia').textContent = postIts.reduce((acc, pi) => acc + pi.avaliacao, 0) / postIts.length || 0;
    document.getElementById('totalVermelho').textContent = postIts.filter(pi => pi.color === '#ff6961').length;
    document.getElementById('totalVerde').textContent = postIts.filter(pi => pi.color === '#77dd77').length;
    document.getElementById('totalAmarelo').textContent = postIts.filter(pi => pi.color === '#fdfd96').length;
    document.getElementById('totalAzul').textContent = postIts.filter(pi => pi.color === '#84b6f4').length;
    document.getElementById('totalRosa').textContent = postIts.filter(pi => pi.color === '#fdcae1').length;
}

document.addEventListener('DOMContentLoaded', () => {
    updatePostits();
});

setInterval(() => {
    updatePostits();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // rola para o final da pagina
}, 5000); // atualiza a cada 5 segundos