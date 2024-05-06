import express from 'express';
import {getContacts , getAllContacts} from '../controllers/contact.controller.js';
import {isAuthenticated} from '../middleware/adminmiddleware.js'
const router = express.Router();


// route for contact us

router.post('/contactus', isAuthenticated ,getContacts);
router.get('/getcontact', getAllContacts);


export { router}
