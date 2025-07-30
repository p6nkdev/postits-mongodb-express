const Postit = require('../models/Postit');

// listagem do postit
async function getAllPostits(req, res) {
    try {
        const postits = await Postit.find();
        res.status(200).json(postits);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar post-its', error });
    }
}

// criação do postit
async function createPostit(req, res) {
    const { nome, descricao, color, avaliacao } = req.body;

    if (!nome || !descricao || !color || !avaliacao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        await Postit.create({ nome, descricao, color, avaliacao });
        res.redirect('/obrigado');
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar post-it', error });
    }
}

async function deletePostit(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ message: 'ID do post-it é obrigatório' });
    }

    try {
        await Postit.findByIdAndDelete(id);
        res.status(200).json({ message: 'Post-it deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar post-it', error });
    }
}

module.exports = {
    getAllPostits,
    createPostit,
    deletePostit
}