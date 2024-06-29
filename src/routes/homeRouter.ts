import { Router } from 'express';
import { getHome, postData ,addUser, deleteData,getExcel} from '../controllers/homControllers';


const router = Router();

router.get('/', getHome);
router.post('/data', postData);
router.post('/name', addUser);
router.delete('/data/:id', deleteData); // เพิ่มเส้นทาง DELETE
router.post('/getReport',getExcel)

export default router;