import express from 'express';
import {getCarousel ,getAllCarousel ,getOneCarousel} from  '../controllers/carousel.controller.js';

const router = express.Router();


//route for adding blogs 

router.post('/addcarousel',getCarousel )
router.get('/getallcarousel' , getAllCarousel)
router.get('/getonecarousel/:id', getOneCarousel)

export  {router};