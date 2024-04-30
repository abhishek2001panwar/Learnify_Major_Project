import express from 'express';
import {getContacts , getAllContacts} from '../controllers/contact.controller.js';
const router = express.Router();


// route for contact us

router.post('/contactus', getContacts);
router.get('/getcontact', getAllContacts);


export { router}
