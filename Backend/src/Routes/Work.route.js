import express from 'express'
import {
    insert,
    getWorkById,
    updateStatus,
    deleteOneTask,
    getAllWorks
} from '../Controllers/Work.controller.js'

const route = express.Router();

route.post('/insert', insert);
route.post('/getWorkById', getWorkById);
route.post('/updateStatus', updateStatus);
route.post('/deleteOneTask', deleteOneTask);
route.get('/getAllWork', getAllWorks);

export default route;