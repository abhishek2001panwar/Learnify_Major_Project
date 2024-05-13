import express from 'express';
import {getContacts , getAllContacts ,deleteContact} from '../controllers/contact.controller.js';
import {isAuthenticated} from '../middleware/adminmiddleware.js'
const router = express.Router();


// route for contact us

router.post('/contactus', isAuthenticated ,getContacts);
router.get('/getcontact', getAllContacts);
router.delete('/deletecontact/:id', deleteContact);



export { router}
