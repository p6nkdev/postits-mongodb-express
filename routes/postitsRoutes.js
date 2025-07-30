const express = require('express');
const router = express.Router();
const { getAllPostits, createPostit, deletePostit } = require('../controllers/postitController');

// definindo rotas para post-its
router.get('/postits', getAllPostits);
router.post('/postits', createPostit);
router.delete('/postits/:id', deletePostit);
router.get('/', (req, res) => { res.render('formulario') })
router.get('/lista', (req, res) => { res.render('index'); });
router.get('/admin-pannel-postits', (req, res) => { res.render('admin'); });

module.exports = router;