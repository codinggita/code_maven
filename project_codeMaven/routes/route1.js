// routes to match username and password.

const express = require('express');

const router =express.Router();


const {createUser} = require('../controller/createUser');
const {postTodoList} = require('../controller/postTodoList');
const {getTasks, getTasksbyId} = require('../controller/getTasks');
const {deleteTask} = require('../controller/deleteTask');
const{updateTask} = require('../controller/updateTask');
const{createProfile}= require('../controller/createProfile');
const{getProfile} = require('../controller/getProfile');
const{getNotes} = require('../controller/getNotes');
const{createNotes} = require('../controller/createNotes');
const{updateNotes} = require('../controller/updateNotes');
router.post('/createUser', createUser);
router.post('/postTodoList', postTodoList);
router.get('/getTasks',getTasks);
router.get('/getTasks/:id',getTasksbyId);
router.delete('/deleteTask/:taskId',deleteTask);
router.put('/updateTask/:taskId',updateTask);
router.post('/createProfile',createProfile);
router.get('/getProfile/:id',getProfile);
router.get('/getNotes/:title',getNotes);
router.post('/createNotes',createNotes);
router.put('/updateNotes/:title',updateNotes);

module.exports = router;