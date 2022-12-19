const express = require('express');
const router = express.Router();

const { 
     addJadwal,
     getJadwal,
     updateQuota,
 } = require('../controllers/jadwal')

 const { 
     addPesan,
 } = require('../controllers/pesan')


const { register, login, checkAuth } = require('../controllers/auth');
const { auth } = require('../middlewares/auth');

router.post('/pesan', addPesan);

 router.post('/jadwal', auth, addJadwal);
 router.get('/jadwal/:id', auth, getJadwal);
 router.patch('/jadwal/:id', auth, updateQuota);

router.post('/register', register);
router.post('/login', login);
router.get("/check-auth", auth, checkAuth);

module.exports = router;