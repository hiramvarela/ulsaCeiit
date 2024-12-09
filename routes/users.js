var express = require('express');
var router = express.Router();

const {
  registrarUsuario,iniciarSesion,buscarUsuario,buscarUsuarioPorQr
} = require('../controllers/user.controller.js');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/buscar_usuario_qr',buscarUsuarioPorQr);
router.post('/registrar', registrarUsuario);
router.post('/iniciar_sesion', iniciarSesion);
router.get('/buscar_usuario',buscarUsuario);

module.exports = router;

