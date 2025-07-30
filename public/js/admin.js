// faz requisição para obter os postits
async function getAllPostits() {
    const response = await fetch('/postits');
    if (!response.ok) {
        throw new Error('Erro ao buscar post-its');
    }
    const postits = await response.json();
    return postits;
}

// funcao para deletar postit pelo id
async function deletePostit(id) {
    const response = await fetch(`/postits/${id}`, { method: 'DELETE' });
    if (!response.ok) {
        throw new Error('Erro ao deletar post-it');
    } else {
        await updatePostits(); // atualiza a lista de post-its após a exclusão
    }
}

// funcao para criar post-its dinamicamente
async function updatePostits() {
    const postits = await getAllPostits();
    const container = document.getElementById('postits-container');
    container.innerHTML = ''; // limpa o container antes de adicionar novos post-its

    postits.forEach(postit => {
        const postitElement = document.createElement('div');
        postitElement.className = 'sent';
        postitElement.style.backgroundColor = postit.color;
        postitElement.innerHTML = `
            <p>${postit.nome}</p>
            <p>${postit.descricao.slice(0, 50)}</p>
            <button class="delete-button" onclick="deletePostit('${postit._id}')">X</button>
        `;
        container.appendChild(postitElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updatePostits();

    // funcionalidade de pesquisa
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const postits = document.getElementsByClassName('sent');
        for (const postit of postits) {
            const text = postit.textContent.toLowerCase();
            postit.style.display = text.includes(filter) ? 'flex' : 'none';
        }
    });
});