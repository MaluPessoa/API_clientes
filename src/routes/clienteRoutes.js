// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const clienteController = require('../controllers/clienteController');

// ============================================================
// DEFINIÇÃO DAS ROTAS
// ============================================================

// GET /clientes - Listar todos os clientes
router.get('/', clienteController.listarTodos);

// GET /clientes/nome/:nome - Buscar por nome
router.get('/nome/:nome', clienteController.buscarPornome);

// GET /clientes/:id - Buscar cliente específico por ID
router.get('/:id', clienteController.buscarPorId);

// POST /clientes - Criar novo cliente
router.post('/', clienteController.criar);

// PUT /clientes/:id - Atualizar cliente completo
router.put('/:id', clienteController.atualizar);

// DELETE /clientes/:id - Deletar cliente
router.delete('/:id', clienteController.deletar);

// ============================================================
// EXPORTAR O ROUTER
// ============================================================
module.exports = router;
