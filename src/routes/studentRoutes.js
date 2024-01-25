const express = require('express');
const studentController = require('../controllers/studentController');

const studentRouter =  express.Router();

// GET /api/students Gauti visa sarasa
studentRouter.get('/students', studentController.all);

// GET /api/students/:id gauti vien astudenta pagal ID
studentRouter.get('/students/:id', studentController.single);

//POST /api/students irasyti studenta
studentRouter.post('/students', studentController.create);

//PUT /api/students/:id studento duomenu atnuajinimas
studentRouter.put('/students/:id', studentController.update);

//DELETE /api/students/:id istrina pagal id
studentRouter.delete('/students/:id', studentController.delete);


module.exports = studentRouter;