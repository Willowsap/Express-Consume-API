import express from 'express';
import HadesCtrl from '../controllers/hades';

const router = express.Router();
const hadesCtrl = new HadesCtrl();

router.route('/')
    .get(hadesCtrl.getGods)
    .post(hadesCtrl.createGod);

router.route('/:name')
    .get(hadesCtrl.getGod)
    .put(hadesCtrl.updateGod)
    .delete(hadesCtrl.deleteGod)

export default router;
